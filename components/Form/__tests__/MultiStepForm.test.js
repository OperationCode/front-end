/* eslint-disable react/no-multi-comp */
/* eslint-disable max-classes-per-file */
import React from 'react';
import faker from 'faker';
import get from 'lodash/get';
import { mount } from 'enzyme';
import { Field } from 'formik';
import * as Yup from 'yup';
import { networkErrorMessages } from 'common/constants/messages';
import asyncRenderDiff from 'test-utils/asyncRenderDiff';
import { MultiStepForm } from '../MultiStepForm';

const submitForm = async enzymeWrapper => {
  const submitButton = enzymeWrapper.find('button[type="submit"]');
  submitButton.simulate('submit');
  await asyncRenderDiff(enzymeWrapper);
};

const typeIntoInput = async (enzymeWrapper, inputName, value) => {
  const input = enzymeWrapper.find(`input#${inputName}`);

  input.simulate('change', { target: { id: inputName, value } }).simulate('blur');
};

function makeNameForm(submitHandler = jest.fn()) {
  return class NameForm extends React.Component {
    static validationSchema = Yup.object().shape({
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
    });

    static initialValues = {
      firstName: '',
      lastName: '',
    };

    static submitHandler = submitHandler;

    render() {
      const { props } = this;
      return (
        <>
          <Field
            type="text"
            name="firstName"
            id="firstName"
            label="First Name*"
            component="input"
            {...props}
          />
          <Field
            type="text"
            name="lastName"
            id="lastName"
            label="Last Name*"
            component="input"
            {...props}
          />
        </>
      );
    }
  };
}

describe('MultiStepForm', () => {
  // Define some mock form steps
  const nameFormSubmitHandler = jest.fn();

  const NameForm = makeNameForm(nameFormSubmitHandler);

  const ultimateAnswerIncorrectMessage =
    'The Answer to the Ultimate Question of Life, the Universe, and Everything is 42';
  const ultimateAnswerFormSubmitHandler = jest.fn();

  class UltimateAnswerForm extends React.Component {
    static validationSchema = Yup.object().shape({
      ultimateAnswer: Yup.string()
        .matches(/42/, ultimateAnswerIncorrectMessage)
        .required(),
    });

    static initialValues = {
      ultimateAnswer: '',
    };

    static submitHandler = ultimateAnswerFormSubmitHandler;

    render() {
      const { props } = this;
      return (
        <Field
          type="text"
          name="ultimateAnswer"
          id="ultimateAnswer"
          label="What is the answer to the Ultimate Question of Life?*"
          component="input"
          {...props}
        />
      );
    }
  }

  const favoritesFormSubmitHandler = jest.fn();

  class FavoritesForm extends React.Component {
    static validationSchema = Yup.object().shape({
      favoriteNumber: Yup.string().required(),
      favoritePerson: Yup.string(),
    });

    static initialValues = {
      favoriteNumber: '',
      favoritePerson: '',
    };

    static submitHandler = favoritesFormSubmitHandler;

    render() {
      const { props } = this;
      return (
        <>
          <Field
            type="text"
            name="favoriteNumber"
            id="favoriteNumber"
            label="Favorite Number*"
            component="input"
            {...props}
          />
          <Field
            type="text"
            name="favoritePerson"
            id="favoritePerson"
            label="Favorite Person*"
            component="input"
            {...props}
          />
        </>
      );
    }
  }

  const getErrorMessage = jest.fn().mockImplementation(error => {
    const serverError = get(error, 'response.data.error', '');

    if (serverError) {
      return serverError;
    }

    return error.message;
  });

  const requiredProps = {
    initialValues: {
      firstName: '',
      lastName: '',
      ultimateAnswer: '',
      favoriteNumber: '',
      favoritePerson: '',
    },
    getErrorMessage,
    onFinalSubmit: jest.fn(),
    steps: [NameForm, UltimateAnswerForm, FavoritesForm],
  };

  it('should render with required props passed', () => {
    // hiding console statements for this test
    /* eslint-disable no-console */
    const originalConsoleError = console.error;
    console.error = jest.fn();

    const wrapper = mount(<MultiStepForm {...requiredProps} />);
    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper.find('input').exists()).toBe(true);
    expect(wrapper.find('button').text()).toContain('Next');

    // reset console.error's behavior
    console.error = originalConsoleError;
    /* eslint-enable no-console */
  });

  it('should not render later steps on first render', () => {
    const wrapper = mount(<MultiStepForm {...requiredProps} />);
    expect(wrapper.find('input#ultimateAnswer').exists()).toBe(false);
  });

  it('should render 2nd step after completing first step', async () => {
    const wrapper = mount(<MultiStepForm {...requiredProps} />);

    typeIntoInput(wrapper, 'firstName', faker.name.firstName());
    typeIntoInput(wrapper, 'lastName', faker.name.lastName());
    await submitForm(wrapper);

    expect(wrapper.find('input#ultimateAnswer').exists()).toBe(true);
  });

  it('should call final handlers after last step submission in happy-path', async () => {
    const onFinalSubmitMock = jest.fn();
    const wrapper = mount(<MultiStepForm {...requiredProps} onFinalSubmit={onFinalSubmitMock} />);

    typeIntoInput(wrapper, 'firstName', faker.name.firstName());
    typeIntoInput(wrapper, 'lastName', faker.name.lastName());
    await submitForm(wrapper);

    typeIntoInput(wrapper, 'ultimateAnswer', '42');
    await submitForm(wrapper);

    expect(wrapper.find('button[type="submit"]').text()).toContain('Submit');

    typeIntoInput(wrapper, 'favoriteNumber', faker.random.number());
    typeIntoInput(wrapper, 'favoritePerson', faker.name.firstName());
    await submitForm(wrapper);

    expect(onFinalSubmitMock).toHaveBeenCalledTimes(1);
  });

  it('should call onEachStepSubmit handler after each step submission in happy-path', async () => {
    const onEachStepSubmit = jest.fn();
    const wrapper = mount(<MultiStepForm {...requiredProps} onEachStepSubmit={onEachStepSubmit} />);

    typeIntoInput(wrapper, 'firstName', faker.name.firstName());
    typeIntoInput(wrapper, 'lastName', faker.name.lastName());
    await submitForm(wrapper);

    expect(onEachStepSubmit).toHaveBeenCalledTimes(1);

    typeIntoInput(wrapper, 'ultimateAnswer', '42');
    await submitForm(wrapper);

    expect(onEachStepSubmit).toHaveBeenCalledTimes(2);

    typeIntoInput(wrapper, 'favoriteNumber', faker.random.number());
    typeIntoInput(wrapper, 'favoritePerson', faker.name.firstName());
    await submitForm(wrapper);

    expect(onEachStepSubmit).toHaveBeenCalledTimes(3);
  });

  it('should handle error on final submit if success handler throws', async () => {
    const onFinalSubmitMock = jest
      .fn()
      .mockRejectedValue(new Error(networkErrorMessages.serverDown));

    const wrapper = mount(<MultiStepForm {...requiredProps} onFinalSubmit={onFinalSubmitMock} />);

    typeIntoInput(wrapper, 'firstName', faker.name.firstName());
    typeIntoInput(wrapper, 'lastName', faker.name.lastName());
    await submitForm(wrapper);

    typeIntoInput(wrapper, 'ultimateAnswer', '42');
    await submitForm(wrapper);

    expect(wrapper.find('button[type="submit"]').text()).toContain('Submit');
    typeIntoInput(wrapper, 'favoriteNumber', faker.random.number());
    typeIntoInput(wrapper, 'favoritePerson', faker.name.firstName());
    await submitForm(wrapper);

    expect(wrapper.find('Alert').text()).toStrictEqual(networkErrorMessages.serverDown);
  });

  it('should handle server error on final submit', async () => {
    const errorMessage = 'Unauthorized request';

    const onFinalSubmitMock = jest
      .fn()
      .mockRejectedValue({ response: { data: { error: errorMessage } } });

    const wrapper = mount(<MultiStepForm {...requiredProps} onFinalSubmit={onFinalSubmitMock} />);

    typeIntoInput(wrapper, 'firstName', faker.name.firstName());
    typeIntoInput(wrapper, 'lastName', faker.name.lastName());
    await submitForm(wrapper);

    typeIntoInput(wrapper, 'ultimateAnswer', '42');
    await submitForm(wrapper);

    expect(wrapper.find('button[type="submit"]').text()).toContain('Submit');
    typeIntoInput(wrapper, 'favoriteNumber', faker.random.number());
    typeIntoInput(wrapper, 'favoritePerson', faker.name.firstName());
    await submitForm(wrapper);

    expect(wrapper.find('Alert').text()).toStrictEqual(errorMessage);
  });

  it('should wipe error message between an invalid and valid submit', async () => {
    const onFinalSubmitMock = jest
      .fn()
      .mockRejectedValueOnce(new Error(networkErrorMessages.serverDown))
      .mockResolvedValueOnce();

    const wrapper = mount(<MultiStepForm {...requiredProps} onFinalSubmit={onFinalSubmitMock} />);

    // sanity check
    expect(wrapper.find('Alert')).not.toExist();

    typeIntoInput(wrapper, 'firstName', faker.name.firstName());
    typeIntoInput(wrapper, 'lastName', faker.name.lastName());
    await submitForm(wrapper);

    typeIntoInput(wrapper, 'ultimateAnswer', '42');
    await submitForm(wrapper);

    expect(wrapper.find('button[type="submit"]').text()).toContain('Submit');
    typeIntoInput(wrapper, 'favoriteNumber', faker.random.number());
    typeIntoInput(wrapper, 'favoritePerson', faker.name.firstName());
    await submitForm(wrapper);

    expect(wrapper.find('Alert').text()).toStrictEqual(networkErrorMessages.serverDown);

    await submitForm(wrapper);

    expect(wrapper.find('Alert')).not.toExist();
  });

  it('should be able to go back and forth between steps, maintaining form state', async () => {
    const wrapper = mount(<MultiStepForm {...requiredProps} />);

    const firstNameValue = faker.name.firstName();
    const lastNameValue = faker.name.lastName();

    typeIntoInput(wrapper, 'firstName', firstNameValue);
    typeIntoInput(wrapper, 'lastName', lastNameValue);
    await submitForm(wrapper);

    expect(wrapper.find('input#ultimateAnswer').exists()).toBe(true);

    const goToPreviousStepButton = wrapper.find('button[type="button"]');
    expect(goToPreviousStepButton.exists()).toBe(true);
    expect(goToPreviousStepButton.text()).toContain('Previous');

    goToPreviousStepButton.simulate('click');

    await asyncRenderDiff(wrapper);

    expect(wrapper.find('input#ultimateAnswer').exists()).toBe(false);
    expect(wrapper.find('input#firstName').exists()).toBe(true);
    expect(wrapper.find('input#lastName').exists()).toBe(true);
    expect(wrapper.find('input#firstName').props().value).toStrictEqual(firstNameValue);
    expect(wrapper.find('input#lastName').props().value).toStrictEqual(lastNameValue);
  });

  it('calls setFieldTouched for every field on prev step if calling showPreviousStep', async () => {
    const wrapper = mount(<MultiStepForm {...requiredProps} />);

    const firstNameValue = faker.name.firstName();
    const lastNameValue = faker.name.lastName();

    typeIntoInput(wrapper, 'firstName', firstNameValue);
    typeIntoInput(wrapper, 'lastName', lastNameValue);
    await submitForm(wrapper);

    // make sure that step 2's input is untouched & visible after step 1 submission
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('input#ultimateAnswer').exists()).toBe(true);
    expect(wrapper.find('input#ultimateAnswer').prop('touched')).toStrictEqual({
      firstName: true,
      lastName: true,
      favoriteNumber: true,
      favoritePerson: true,
      ultimateAnswer: false,
    });

    // click on "Previous" button
    const goToPreviousStepButton = wrapper.find('button[type="button"]');
    expect(goToPreviousStepButton.exists()).toBe(true);
    expect(goToPreviousStepButton.text()).toContain('Previous');
    goToPreviousStepButton.simulate('click');

    // make sure that step 1's inputs are untouched & visible after clicking "Previous" from step 1
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('input#firstName').exists()).toBe(true);
    expect(wrapper.find('input#lastName').exists()).toBe(true);
    expect(wrapper.find('input#firstName').prop('touched')).toStrictEqual({
      firstName: false,
      lastName: false,
      favoriteNumber: true,
      favoritePerson: true,
      ultimateAnswer: false,
    });
    expect(wrapper.find('input#lastName').prop('touched')).toStrictEqual({
      firstName: false,
      lastName: false,
      favoriteNumber: true,
      favoritePerson: true,
      ultimateAnswer: false,
    });
  });

  it('should call custom step handler after submitting', async () => {
    const wrapper = mount(<MultiStepForm {...requiredProps} />);

    typeIntoInput(wrapper, 'firstName', faker.name.firstName());
    typeIntoInput(wrapper, 'lastName', faker.name.lastName());
    await submitForm(wrapper);

    expect(nameFormSubmitHandler).toHaveBeenCalledTimes(1);
  });

  it('should handle error if custom handler throws after submitting', async () => {
    const mockedSubmitHandler = jest
      .fn()
      .mockRejectedValueOnce(new Error(networkErrorMessages.serverDown));

    const steps = [makeNameForm(mockedSubmitHandler), requiredProps.steps[1]];

    const wrapper = mount(<MultiStepForm {...requiredProps} steps={steps} />);

    typeIntoInput(wrapper, 'firstName', faker.name.firstName());
    typeIntoInput(wrapper, 'lastName', faker.name.lastName());
    await submitForm(wrapper);

    expect(nameFormSubmitHandler).toHaveBeenCalledTimes(0);
    expect(mockedSubmitHandler).toHaveBeenCalledTimes(1);
    expect(wrapper.find('Alert').text()).toStrictEqual(networkErrorMessages.serverDown);
  });

  it('should handle server error on custom handler submit', async () => {
    const errorMessage = 'Error just give up.';
    const mockedSubmitHandler = jest
      .fn()
      .mockRejectedValue({ response: { data: { error: errorMessage } } });

    const steps = [makeNameForm(mockedSubmitHandler), requiredProps.steps[1]];

    const wrapper = mount(<MultiStepForm {...requiredProps} steps={steps} />);

    typeIntoInput(wrapper, 'firstName', faker.name.firstName());
    typeIntoInput(wrapper, 'lastName', faker.name.lastName());
    await submitForm(wrapper);

    expect(nameFormSubmitHandler).toHaveBeenCalledTimes(0);
    expect(mockedSubmitHandler).toHaveBeenCalledTimes(1);
    expect(wrapper.find('Alert').text()).toStrictEqual(errorMessage);
  });
});
