import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import { networkErrorMessages, validationErrorMessages } from 'common/constants/messages';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import mockUser from 'test-utils/mockGenerators/mockUser';
import mockPassword from 'test-utils/mockGenerators/mockPassword';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import RegistrationForm from '../RegistrationForm';

beforeEach(() => {
  OperationCodeAPIMock.reset();
});

describe('RegistrationForm', () => {
  it('should render with required props', () => {
    createSnapshotTest(<RegistrationForm onSuccess={jest.fn()} />);
  });

  it('should display required error message when blurring past email input', async () => {
    const { getByLabelText, findByText } = render(<RegistrationForm onSuccess={jest.fn()} />);

    fireEvent.blur(getByLabelText('Email*'));

    const errorMessage = await findByText(validationErrorMessages.required);
    expect(errorMessage).not.toBeNull();
  });

  it('should show error when providing non-email to email input', async () => {
    const { getByLabelText, findByText } = render(<RegistrationForm onSuccess={jest.fn()} />);

    fireEvent.change(getByLabelText('Email*'), { target: { value: 'email' } });
    fireEvent.blur(getByLabelText('Email*'));

    const errorMessage = await findByText(validationErrorMessages.email);
    expect(errorMessage).not.toBeNull();
  });

  it('should show "password required" message when blurring past input', async () => {
    const { getByLabelText, findByText } = render(<RegistrationForm onSuccess={jest.fn()} />);

    fireEvent.blur(getByLabelText('Password*'));

    const errorMessage = await findByText(validationErrorMessages.required);
    expect(errorMessage).not.toBeNull();
  });

  it('should show "invalid password" message when focusing off an invalid password', async () => {
    const { getByLabelText, findByText } = render(<RegistrationForm onSuccess={jest.fn()} />);

    const stringWithoutNumber = 'SillyPassword';

    fireEvent.change(getByLabelText('Password*'), { target: { value: stringWithoutNumber } });
    fireEvent.blur(getByLabelText('Password*'));

    const errorMessage = await findByText(validationErrorMessages.password);
    expect(errorMessage).not.toBeNull();
  });

  it('should display password match message when both password inputs do not match', async () => {
    const { getByLabelText, findByText } = render(<RegistrationForm onSuccess={jest.fn()} />);

    fireEvent.change(getByLabelText('Password*'), { target: { value: mockPassword() } });
    fireEvent.blur(getByLabelText('Password*'));

    fireEvent.change(getByLabelText('Confirm Password*'), {
      target: { value: 'something-else' },
    });
    fireEvent.blur(getByLabelText('Confirm Password*'));

    const errorMessage = await findByText(validationErrorMessages.passwordMatch);
    expect(errorMessage).not.toBeNull();
  });

  it('should submit with valid data in form', async () => {
    const user = mockUser();

    OperationCodeAPIMock.onPost('auth/registration/', {
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      zipcode: user.zipcode,
    }).reply(200, { token: 'fake-token' });

    const successSpy = jest.fn();
    const { getByText } = render(<RegistrationForm onSuccess={successSpy} initialValues={user} />);

    fireEvent.click(getByText('Submit'));

    await wait(() => {
      expect(OperationCodeAPIMock.history.post.length).toStrictEqual(1);
      expect(successSpy).toHaveBeenCalledTimes(1);
    });
  });

  it('should reset form and set form as "not submitting" after successful login', async () => {
    const user = mockUser();

    const initialValues = {
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      zipcode: user.zipcode,
    };

    OperationCodeAPIMock.onPost('auth/registration/', initialValues).reply(200, {
      token: 'fake-token',
    });

    const successSpy = jest.fn(() => Promise.resolve(true));
    const { container, getByText, findByText } = render(
      <RegistrationForm onSuccess={successSpy} initialValues={initialValues} />,
    );

    fireEvent.click(getByText('Submit'));

    const submit = await findByText('Submit');
    expect(submit).not.toBeDisabled();
    container.querySelectorAll('input').forEach(input => {
      expect(input.textContent).toBeFalsy();
    });
  });

  it('should NOT submit with some invalid data in form', async () => {
    const successSpy = jest.fn();

    const invalidFormValues = {
      email: 'not-an-email',
      'confirm-email': 'not-the-same',
      password: 'notvalid',
      'confirm-password': 'notmatching',
      firstName: '',
      lastName: '',
      zipcode: '',
    };

    const { getByText, findAllByRole } = render(
      <RegistrationForm onSuccess={successSpy} initialValues={invalidFormValues} />,
    );

    fireEvent.click(getByText('Submit'));

    await wait(() => {
      expect(successSpy).not.toHaveBeenCalled();
      expect(OperationCodeAPIMock.history.post.length).not.toBeGreaterThan(0);
    });

    expect(await findAllByRole(/alert/)).toHaveLength(Object.keys(invalidFormValues).length);
  });

  it('should show "email already registered" message for dupe email registration', async () => {
    const existingUser = mockUser('kylemh.email12@gmail.com');

    OperationCodeAPIMock.onPost('auth/registration/', {
      email: existingUser.email,
      password: existingUser.password,
      firstName: existingUser.firstName,
      lastName: existingUser.lastName,
      zipcode: existingUser.zipcode,
    }).reply(400, {
      email: ['has been taken'],
    });

    const successSpy = jest.fn();
    const { getByText, findByText } = render(
      <RegistrationForm onSuccess={successSpy} initialValues={existingUser} />,
    );

    fireEvent.click(getByText('Submit'));
    expect(successSpy).not.toHaveBeenCalled();

    const alert = await findByText('Email has been taken.');
    expect(alert).not.toBeNull();
  });

  it('should show a helpful error if the server is down', async () => {
    const user = mockUser();

    OperationCodeAPIMock.onPost('auth/registration/', user).reply(503);

    const successSpy = jest.fn();
    const { findByText, getByText } = render(
      <RegistrationForm onSuccess={successSpy} initialValues={user} />,
    );

    fireEvent.click(getByText('Submit'));
    expect(successSpy).not.toHaveBeenCalled();

    const alert = await findByText(networkErrorMessages.serverDown);
    expect(alert).not.toBeNull();
  });
});
