/* eslint-disable react/no-multi-comp */
/* eslint-disable max-classes-per-file */
import React from 'react';
import faker from 'faker';
import get from 'lodash/get';
import { render, fireEvent, wait } from '@testing-library/react';
import { Field } from 'formik';
import * as Yup from 'yup';
import { networkErrorMessages } from 'common/constants/messages';
import { MultiStepForm } from '../MultiStepForm';

const submitForm = async container => {
  const button = container.querySelector('button[type="submit"]');
  await wait(() => {
    fireEvent.submit(button);
  });
};

const typeIntoInput = (container, inputName, value) => {
  const input = container.querySelector(`input#${inputName}`);
  fireEvent.change(input, { target: { id: inputName, value } });
  fireEvent.blur(input);
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
            data-testid="firstName"
            label="First Name*"
            component="input"
            {...props}
          />
          <Field
            type="text"
            name="lastName"
            id="lastName"
            data-testid="lastName"
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
          data-testid="ultimateAnswer"
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
            data-testid="favoriteNumber"
            label="Favorite Number*"
            component="input"
            {...props}
          />
          <Field
            type="text"
            name="favoritePerson"
            id="favoritePerson"
            data-testid="favoritePerson"
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

    const { container } = render(<MultiStepForm {...requiredProps} />);
    expect(container.querySelector('form')).not.toBeNull();
    expect(container.querySelector('input')).not.toBeNull();
    expect(container.querySelector('button').textContent).toContain('Next');

    // reset console.error's behavior
    console.error = originalConsoleError;
    /* eslint-enable no-console */
  });

  it('should not render later steps on first render', () => {
    const { queryByTestId } = render(<MultiStepForm {...requiredProps} />);
    expect(queryByTestId('ultimateAnswer')).toBeNull();
  });

  it('should render 2nd step after completing first step', async () => {
    const { container, queryByTestId } = render(<MultiStepForm {...requiredProps} />);

    typeIntoInput(container, 'firstName', faker.name.firstName());
    typeIntoInput(container, 'lastName', faker.name.lastName());
    await submitForm(container);

    expect(queryByTestId('ultimateAnswer')).not.toBeNull();
  });

  it('should call final handlers after last step submission in happy-path', async () => {
    const onFinalSubmitMock = jest.fn();
    const { container, queryByTestId } = render(
      <MultiStepForm {...requiredProps} onFinalSubmit={onFinalSubmitMock} />,
    );

    typeIntoInput(container, 'firstName', faker.name.firstName());
    typeIntoInput(container, 'lastName', faker.name.lastName());
    await submitForm(container);

    typeIntoInput(container, 'ultimateAnswer', '42');
    await submitForm(container);

    expect(queryByTestId('Submit Multi-Step Form').textContent).toContain('Submit');

    typeIntoInput(container, 'favoriteNumber', faker.random.number());
    typeIntoInput(container, 'favoritePerson', faker.name.firstName());
    await submitForm(container);

    expect(onFinalSubmitMock).toHaveBeenCalledTimes(1);
  });

  it('should call onEachStepSubmit handler after each step submission in happy-path', async () => {
    const onEachStepSubmit = jest.fn();
    const { container } = render(
      <MultiStepForm {...requiredProps} onEachStepSubmit={onEachStepSubmit} />,
    );

    typeIntoInput(container, 'firstName', faker.name.firstName());
    typeIntoInput(container, 'lastName', faker.name.lastName());
    await submitForm(container);

    expect(onEachStepSubmit).toHaveBeenCalledTimes(1);

    typeIntoInput(container, 'ultimateAnswer', '42');
    await submitForm(container);

    expect(onEachStepSubmit).toHaveBeenCalledTimes(2);

    typeIntoInput(container, 'favoriteNumber', faker.random.number());
    typeIntoInput(container, 'favoritePerson', faker.name.firstName());
    await submitForm(container);

    expect(onEachStepSubmit).toHaveBeenCalledTimes(3);
  });

  it('should handle error on final submit if success handler throws', async () => {
    const onFinalSubmitMock = jest
      .fn()
      .mockRejectedValue(new Error(networkErrorMessages.serverDown));

    const { container, queryByRole, queryByTestId } = render(
      <MultiStepForm {...requiredProps} onFinalSubmit={onFinalSubmitMock} />,
    );

    typeIntoInput(container, 'firstName', faker.name.firstName());
    typeIntoInput(container, 'lastName', faker.name.lastName());
    await submitForm(container);

    typeIntoInput(container, 'ultimateAnswer', '42');
    await submitForm(container);

    expect(queryByTestId('Submit Multi-Step Form').textContent).toContain('Submit');
    typeIntoInput(container, 'favoriteNumber', faker.random.number());
    typeIntoInput(container, 'favoritePerson', faker.name.firstName());
    await submitForm(container);

    expect(queryByRole('alert').textContent).toStrictEqual(networkErrorMessages.serverDown);
  });

  it('should handle server error on final submit', async () => {
    const errorMessage = 'Unauthorized request';

    const onFinalSubmitMock = jest
      .fn()
      .mockRejectedValue({ response: { data: { error: errorMessage } } });

    const { container, queryByRole, queryByTestId } = render(
      <MultiStepForm {...requiredProps} onFinalSubmit={onFinalSubmitMock} />,
    );

    typeIntoInput(container, 'firstName', faker.name.firstName());
    typeIntoInput(container, 'lastName', faker.name.lastName());
    await submitForm(container);

    typeIntoInput(container, 'ultimateAnswer', '42');
    await submitForm(container);

    expect(queryByTestId('Submit Multi-Step Form').textContent).toContain('Submit');
    typeIntoInput(container, 'favoriteNumber', faker.random.number());
    typeIntoInput(container, 'favoritePerson', faker.name.firstName());
    await submitForm(container);

    expect(queryByRole('alert').textContent).toStrictEqual(errorMessage);
  });

  it('should wipe error message between an invalid and valid submit', async () => {
    const onFinalSubmitMock = jest
      .fn()
      .mockRejectedValueOnce(new Error(networkErrorMessages.serverDown))
      .mockResolvedValueOnce();

    const { container, queryByRole, queryByTestId } = render(
      <MultiStepForm {...requiredProps} onFinalSubmit={onFinalSubmitMock} />,
    );

    // sanity check
    expect(queryByRole('alert')).toBeNull();

    typeIntoInput(container, 'firstName', faker.name.firstName());
    typeIntoInput(container, 'lastName', faker.name.lastName());
    await submitForm(container);

    typeIntoInput(container, 'ultimateAnswer', '42');
    await submitForm(container);

    expect(queryByTestId('Submit Multi-Step Form').textContent).toContain('Submit');
    typeIntoInput(container, 'favoriteNumber', faker.random.number());
    typeIntoInput(container, 'favoritePerson', faker.name.firstName());
    await submitForm(container);

    expect(queryByRole('alert').textContent).toStrictEqual(networkErrorMessages.serverDown);

    await submitForm(container);

    expect(queryByRole('alert')).toBeNull();
  });

  it('should be able to go back and forth between steps, maintaining form state', async () => {
    const { container, queryByTestId } = render(<MultiStepForm {...requiredProps} />);

    const firstNameValue = faker.name.firstName();
    const lastNameValue = faker.name.lastName();

    typeIntoInput(container, 'firstName', firstNameValue);
    typeIntoInput(container, 'lastName', lastNameValue);
    await submitForm(container);

    expect(queryByTestId('ultimateAnswer')).not.toBeNull();

    const goToPreviousStepButton = queryByTestId('Previous Step Button');
    expect(goToPreviousStepButton).not.toBeNull();
    expect(goToPreviousStepButton.textContent).toContain('Previous');

    fireEvent.click(goToPreviousStepButton);

    await wait(() => {
      expect(queryByTestId('ultimateAnswer')).toBeNull();
      expect(queryByTestId('firstName')).not.toBeNull();
      expect(queryByTestId('lastName')).not.toBeNull();
      expect(queryByTestId('firstName').value).toStrictEqual(firstNameValue);
      expect(queryByTestId('lastName').value).toStrictEqual(lastNameValue);
    });
  });

  it('calls setFieldTouched for every field on prev step if calling showPreviousStep', async () => {
    const { container, queryByTestId } = render(<MultiStepForm {...requiredProps} />);

    const firstNameValue = faker.name.firstName();
    const lastNameValue = faker.name.lastName();
    typeIntoInput(container, 'firstName', firstNameValue);
    typeIntoInput(container, 'lastName', lastNameValue);
    await submitForm(container);

    // make sure that step 2's input has initialValue & visible after step 1 submission
    expect(container.querySelectorAll('input')).toHaveLength(1);
    expect(queryByTestId('ultimateAnswer')).not.toBeNull();
    expect(queryByTestId('ultimateAnswer').value).toStrictEqual(
      UltimateAnswerForm.initialValues.ultimateAnswer,
    );

    // click on "Previous" button
    const goToPreviousStepButton = queryByTestId('Previous Step Button');
    expect(goToPreviousStepButton).not.toBeNull();
    expect(goToPreviousStepButton.textContent).toContain('Previous');
    fireEvent.click(goToPreviousStepButton);

    // make sure that step 1's inputs have persisted & visible after clicking "Previous" from step 1
    expect(container.querySelectorAll('input')).toHaveLength(2);
    expect(queryByTestId('firstName')).not.toBeNull();
    expect(queryByTestId('lastName')).not.toBeNull();

    expect(queryByTestId('firstName').value).toStrictEqual(firstNameValue);
    expect(queryByTestId('lastName').value).toStrictEqual(lastNameValue);
  });

  it('should call custom step handler after submitting', async () => {
    const { container } = render(<MultiStepForm {...requiredProps} />);

    typeIntoInput(container, 'firstName', faker.name.firstName());
    typeIntoInput(container, 'lastName', faker.name.lastName());
    await submitForm(container);

    expect(nameFormSubmitHandler).toHaveBeenCalledTimes(1);
  });

  it('should handle error if custom handler throws after submitting', async () => {
    const mockedSubmitHandler = jest
      .fn()
      .mockRejectedValueOnce(new Error(networkErrorMessages.serverDown));

    const steps = [makeNameForm(mockedSubmitHandler), requiredProps.steps[1]];

    const { container, queryByRole } = render(<MultiStepForm {...requiredProps} steps={steps} />);

    typeIntoInput(container, 'firstName', faker.name.firstName());
    typeIntoInput(container, 'lastName', faker.name.lastName());
    await submitForm(container);

    expect(nameFormSubmitHandler).toHaveBeenCalledTimes(0);
    expect(mockedSubmitHandler).toHaveBeenCalledTimes(1);
    expect(queryByRole('alert').textContent).toStrictEqual(networkErrorMessages.serverDown);
  });

  it('should handle server error on custom handler submit', async () => {
    const errorMessage = 'Error just give up.';
    const mockedSubmitHandler = jest
      .fn()
      .mockRejectedValue({ response: { data: { error: errorMessage } } });

    const steps = [makeNameForm(mockedSubmitHandler), requiredProps.steps[1]];

    const { container, queryByRole } = render(<MultiStepForm {...requiredProps} steps={steps} />);

    typeIntoInput(container, 'firstName', faker.name.firstName());
    typeIntoInput(container, 'lastName', faker.name.lastName());
    await submitForm(container);

    expect(nameFormSubmitHandler).toHaveBeenCalledTimes(0);
    expect(mockedSubmitHandler).toHaveBeenCalledTimes(1);
    expect(queryByRole('alert').textContent).toStrictEqual(errorMessage);
  });
});
