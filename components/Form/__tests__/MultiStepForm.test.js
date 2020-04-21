/* eslint-disable react/no-multi-comp */
/* eslint-disable max-classes-per-file */
import React from 'react';
import faker from 'faker';
import get from 'lodash/get';
import { fireEvent, render, wait, waitForElement, getByTestId } from '@testing-library/react';
import { Field } from 'formik';
import * as Yup from 'yup';
import { networkErrorMessages } from 'common/constants/messages';
import { MULTI_STEP_SUBMIT_BUTTON, MULTI_STEP_STEP_BUTTON } from 'common/constants/testIDs';
import { MultiStepForm } from '../MultiStepForm';

const submitForm = async ({ container, isFinalStep = false }) => {
  const button = await waitForElement(
    () =>
      isFinalStep
        ? getByTestId(container, MULTI_STEP_SUBMIT_BUTTON)
        : getByTestId(container, MULTI_STEP_STEP_BUTTON),
    { container },
  );

  fireEvent.click(button);
};

const typeIntoInput = (input, inputName, value) => {
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
          <label htmlFor="firstName">First Name*</label>
          <Field
            type="text"
            name="firstName"
            id="firstName"
            data-testid="firstName"
            component="input"
            {...props}
          />
          <label htmlFor="lastName">Last Name*</label>
          <Field
            type="text"
            name="lastName"
            id="lastName"
            data-testid="lastName"
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
      ultimateAnswer: Yup.string().matches(/42/, ultimateAnswerIncorrectMessage).required(),
    });

    static initialValues = {
      ultimateAnswer: '',
    };

    static submitHandler = ultimateAnswerFormSubmitHandler;

    render() {
      const { props } = this;
      return (
        <>
          <label htmlFor="ultimateAnswer">
            What is the answer to the Ultimate Question of Life?*
          </label>
          <Field
            type="text"
            name="ultimateAnswer"
            id="ultimateAnswer"
            data-testid="ultimateAnswer"
            component="input"
            {...props}
          />
        </>
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
          <label htmlFor="favoriteNumber">Favorite Number*</label>
          <Field
            type="text"
            name="favoriteNumber"
            id="favoriteNumber"
            data-testid="favoriteNumber"
            component="input"
            {...props}
          />
          <label htmlFor="favoritePerson">Favorite Person*</label>
          <Field
            type="text"
            name="favoritePerson"
            id="favoritePerson"
            data-testid="favoritePerson"
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
    const { container, findByLabelText, findByTestId } = render(
      <MultiStepForm {...requiredProps} />,
    );

    typeIntoInput(await findByLabelText(/first name/gim), 'firstName', faker.name.firstName());
    typeIntoInput(await findByLabelText(/last name/gim), 'lastName', faker.name.lastName());
    await submitForm({ container });

    expect(await findByTestId('ultimateAnswer')).not.toBeNull();
  });

  it('should call final handlers after last step submission in happy-path', async () => {
    const onFinalSubmitMock = jest.fn();
    const { container, findByLabelText } = render(
      <MultiStepForm {...requiredProps} onFinalSubmit={onFinalSubmitMock} />,
    );

    typeIntoInput(await findByLabelText(/first name/gim), 'firstName', faker.name.firstName());
    typeIntoInput(await findByLabelText(/last name/gim), 'lastName', faker.name.lastName());
    await submitForm({ container });

    typeIntoInput(await findByLabelText(/ultimate/gim), 'ultimateAnswer', '42');
    await submitForm({ container });

    typeIntoInput(await findByLabelText(/number/gim), 'favoriteNumber', faker.random.number());
    typeIntoInput(await findByLabelText(/person/gim), 'favoritePerson', faker.name.firstName());
    await submitForm({ container, isFinalStep: true });

    await wait(() => {
      expect(onFinalSubmitMock).toHaveBeenCalledTimes(1);
    });
  });

  it('should call onEachStepSubmit handler after each step submission in happy-path', async () => {
    const onEachStepSubmit = jest.fn();
    const { container, findByLabelText } = render(
      <MultiStepForm {...requiredProps} onEachStepSubmit={onEachStepSubmit} />,
    );

    typeIntoInput(await findByLabelText(/first name/gim), 'firstName', faker.name.firstName());
    typeIntoInput(await findByLabelText(/last name/gim), 'lastName', faker.name.lastName());
    await submitForm({ container });

    await wait(() => {
      expect(onEachStepSubmit).toHaveBeenCalledTimes(1);
    });

    typeIntoInput(await findByLabelText(/ultimate/gim), 'ultimateAnswer', '42');
    await submitForm({ container });

    await wait(() => {
      expect(onEachStepSubmit).toHaveBeenCalledTimes(2);
    });

    typeIntoInput(await findByLabelText(/number/gim), 'favoriteNumber', faker.random.number());
    typeIntoInput(await findByLabelText(/person/gim), 'favoritePerson', faker.name.firstName());
    await submitForm({ container, isFinalStep: true });

    await wait(() => {
      expect(onEachStepSubmit).toHaveBeenCalledTimes(3);
    });
  });

  it('should handle error on final submit if success handler throws', async () => {
    const onFinalSubmitMock = jest
      .fn()
      .mockRejectedValue(new Error(networkErrorMessages.serverDown));

    const { container, findByLabelText, findByRole } = render(
      <MultiStepForm {...requiredProps} onFinalSubmit={onFinalSubmitMock} />,
    );

    typeIntoInput(await findByLabelText(/first name/gim), 'firstName', faker.name.firstName());
    typeIntoInput(await findByLabelText(/last name/gim), 'lastName', faker.name.lastName());
    await submitForm({ container });

    typeIntoInput(await findByLabelText(/ultimate/gim), 'ultimateAnswer', '42');
    await submitForm({ container });

    // expect(queryByTestId(MULTI_STEP_SUBMIT_BUTTON).textContent).toContain('Submit');
    typeIntoInput(await findByLabelText(/number/gim), 'favoriteNumber', faker.random.number());
    typeIntoInput(await findByLabelText(/person/gim), 'favoritePerson', faker.name.firstName());
    await submitForm({ container, isFinalStep: true });

    const { textContent: alertText } = await findByRole('alert');
    expect(alertText).toStrictEqual(networkErrorMessages.serverDown);
  });

  it('should handle server error on final submit', async () => {
    const errorMessage = 'Unauthorized request';

    const onFinalSubmitMock = jest
      .fn()
      .mockRejectedValue({ response: { data: { error: errorMessage } } });

    const { container, findByLabelText, findByRole } = render(
      <MultiStepForm {...requiredProps} onFinalSubmit={onFinalSubmitMock} />,
    );

    typeIntoInput(await findByLabelText(/first name/gim), 'firstName', faker.name.firstName());
    typeIntoInput(await findByLabelText(/last name/gim), 'lastName', faker.name.lastName());
    await submitForm({ container });

    typeIntoInput(await findByLabelText(/ultimate/gim), 'ultimateAnswer', '42');
    await submitForm({ container });

    typeIntoInput(await findByLabelText(/number/gim), 'favoriteNumber', faker.random.number());
    typeIntoInput(await findByLabelText(/person/gim), 'favoritePerson', faker.name.firstName());
    await submitForm({ container, isFinalStep: true });

    const { textContent: alertText } = await findByRole('alert');
    expect(alertText).toStrictEqual(errorMessage);
  });

  it('should wipe error message between an invalid and valid submit', async () => {
    const onFinalSubmitMock = jest
      .fn()
      .mockRejectedValueOnce(new Error(networkErrorMessages.serverDown))
      .mockResolvedValueOnce();

    const { container, findByLabelText, findByRole, queryByRole } = render(
      <MultiStepForm {...requiredProps} onFinalSubmit={onFinalSubmitMock} />,
    );

    // Ensure no alert exists at the start
    expect(queryByRole('alert')).toBeNull();

    typeIntoInput(await findByLabelText(/first name/i), 'firstName', faker.name.firstName());
    typeIntoInput(await findByLabelText(/last name/i), 'lastName', faker.name.lastName());
    await submitForm({ container });

    typeIntoInput(await findByLabelText(/ultimate/i), 'ultimateAnswer', '42');
    await submitForm({ container });

    typeIntoInput(await findByLabelText(/number/i), 'favoriteNumber', faker.random.number());
    typeIntoInput(await findByLabelText(/person/i), 'favoritePerson', faker.name.firstName());
    await submitForm({ container, isFinalStep: true });

    const alert = await findByRole('alert');
    expect(alert.textContent).toStrictEqual(networkErrorMessages.serverDown);

    await submitForm({ container, isFinalStep: true });

    await wait(() => {
      expect(onFinalSubmitMock).toHaveBeenCalledTimes(2);
      expect(queryByRole('alert')).toBeNull();
    });
  });

  it('should be able to go back and forth between steps, maintaining form state', async () => {
    const { container, findByLabelText, queryByTestId } = render(
      <MultiStepForm {...requiredProps} />,
    );

    const firstNameValue = faker.name.firstName();
    const lastNameValue = faker.name.lastName();

    typeIntoInput(await findByLabelText(/first name/gim), 'firstName', firstNameValue);
    typeIntoInput(await findByLabelText(/last name/gim), 'lastName', lastNameValue);
    await submitForm({ container });

    await wait(() => {
      expect(queryByTestId('ultimateAnswer')).not.toBeNull();
    });

    const goToPreviousStepButton = queryByTestId('Previous Step Button');

    await wait(() => {
      expect(goToPreviousStepButton).not.toBeNull();
      expect(goToPreviousStepButton.textContent).toContain('Previous');
    });

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
    const { container, findByLabelText, queryByTestId } = render(
      <MultiStepForm {...requiredProps} />,
    );

    const firstNameValue = faker.name.firstName();
    const lastNameValue = faker.name.lastName();

    typeIntoInput(await findByLabelText(/first name/gim), 'firstName', firstNameValue);
    typeIntoInput(await findByLabelText(/last name/gim), 'lastName', lastNameValue);
    await submitForm({ container });

    // make sure that step 2's input has initialValue & visible after step 1 submission
    await wait(() => {
      expect(container.querySelectorAll('input')).toHaveLength(1);
      expect(queryByTestId('ultimateAnswer')).not.toBeNull();
      expect(queryByTestId('ultimateAnswer').value).toStrictEqual(
        UltimateAnswerForm.initialValues.ultimateAnswer,
      );
    });

    // click on "Previous" button
    const goToPreviousStepButton = queryByTestId('Previous Step Button');
    expect(goToPreviousStepButton).not.toBeNull();
    expect(goToPreviousStepButton.textContent).toContain('Previous');
    fireEvent.click(goToPreviousStepButton);

    // make sure that step 1's inputs have persisted & visible after clicking "Previous" from step 1
    await wait(() => {
      expect(container.querySelectorAll('input')).toHaveLength(2);
      expect(queryByTestId('firstName')).not.toBeNull();
      expect(queryByTestId('lastName')).not.toBeNull();
      expect(queryByTestId('firstName').value).toStrictEqual(firstNameValue);
      expect(queryByTestId('lastName').value).toStrictEqual(lastNameValue);
    });
  });

  it('should call custom step handler after submitting', async () => {
    const { container, findByLabelText } = render(<MultiStepForm {...requiredProps} />);

    typeIntoInput(await findByLabelText(/first name/gim), 'firstName', faker.name.firstName());
    typeIntoInput(await findByLabelText(/last name/gim), 'lastName', faker.name.lastName());
    await submitForm({ container });

    await wait(() => {
      expect(nameFormSubmitHandler).toHaveBeenCalledTimes(1);
    });
  });

  it('should handle error if custom handler throws after submitting', async () => {
    const mockedSubmitHandler = jest
      .fn()
      .mockRejectedValueOnce(new Error(networkErrorMessages.serverDown));

    const steps = [makeNameForm(mockedSubmitHandler), requiredProps.steps[1]];

    const { container, findByLabelText, findByRole } = render(
      <MultiStepForm {...requiredProps} steps={steps} />,
    );

    typeIntoInput(await findByLabelText(/first name/gim), 'firstName', faker.name.firstName());
    typeIntoInput(await findByLabelText(/last name/gim), 'lastName', faker.name.lastName());
    await submitForm({ container });

    await wait(() => {
      expect(nameFormSubmitHandler).toHaveBeenCalledTimes(0);
      expect(mockedSubmitHandler).toHaveBeenCalledTimes(1);
    });

    const { textContent: alertText } = await findByRole('alert');
    expect(alertText).toStrictEqual(networkErrorMessages.serverDown);
  });

  it('should handle server error on custom handler submit', async () => {
    const errorMessage = 'Error just give up.';
    const mockedSubmitHandler = jest
      .fn()
      .mockRejectedValue({ response: { data: { error: errorMessage } } });

    const steps = [makeNameForm(mockedSubmitHandler), requiredProps.steps[1]];

    const { container, findByLabelText, findByRole } = render(
      <MultiStepForm {...requiredProps} steps={steps} />,
    );

    typeIntoInput(await findByLabelText(/first name/gim), 'firstName', faker.name.firstName());
    typeIntoInput(await findByLabelText(/last name/gim), 'lastName', faker.name.lastName());
    await submitForm({ container });

    await wait(() => {
      expect(nameFormSubmitHandler).toHaveBeenCalledTimes(0);
      expect(mockedSubmitHandler).toHaveBeenCalledTimes(1);
    });

    const { textContent: alertText } = await findByRole('alert');
    expect(alertText).toStrictEqual(errorMessage);
  });
});
