import React from 'react';
import { wait, render, fireEvent } from '@testing-library/react';
import { passwordReset } from 'common/constants/api';
import { validationErrorMessages } from 'common/constants/messages';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import mockUser from 'test-utils/mockGenerators/mockUser';
import PasswordResetForm from '../PasswordResetForm';

afterEach(() => {
  OperationCodeAPIMock.reset();
});

describe('PasswordResetForm', () => {
  it('should render with required props', () => {
    createSnapshotTest(<PasswordResetForm onSuccess={jest.fn()} passwordReset={jest.fn()} />);
  });

  it('should display required error message when blurring past email input', async () => {
    const { getByLabelText, findByText } = render(
      <PasswordResetForm onSuccess={jest.fn()} passwordReset={jest.fn()} />,
    );

    fireEvent.blur(getByLabelText(/Email/));
    expect(findByText(validationErrorMessages.required)).toBeDefined();
  });

  it('should show error when providing non-email to email input', async () => {
    const { getByLabelText, findByText } = render(
      <PasswordResetForm onSuccess={jest.fn()} passwordReset={jest.fn()} />,
    );

    fireEvent.change(getByLabelText(/Email/), { target: { value: 'email' } });
    fireEvent.blur(getByLabelText(/Email/));

    expect(findByText(validationErrorMessages.email)).toBeDefined();
  });

  it('should submit with valid data in form', async () => {
    const user = mockUser();

    OperationCodeAPIMock.onPost('auth/password/reset/', { email: user.email }).reply(200, {
      detail: 'success',
    });

    const successSpy = jest.fn();

    const { getByLabelText, getByText } = render(
      <PasswordResetForm onSuccess={successSpy} passwordReset={passwordReset} />,
    );

    fireEvent.change(getByLabelText(/Email/), { target: { value: user.email } });
    fireEvent.blur(getByLabelText(/Email/));
    fireEvent.click(getByText('Submit'));

    await wait(() => {
      expect(successSpy).toHaveBeenCalledWith({ detail: 'success' });
      expect(OperationCodeAPIMock.history.post.length).toBeGreaterThan(0);
    });
  });

  it('should display an error message if request fails', async () => {
    const user = mockUser();
    OperationCodeAPIMock.onPost('auth/password/reset/', { email: user.email }).reply(400, {
      error: 'test error',
    });

    const successSpy = jest.fn();

    const { getByLabelText, getByText, findByText } = render(
      <PasswordResetForm onSuccess={successSpy} passwordReset={passwordReset} />,
    );

    fireEvent.change(getByLabelText(/Email/), { target: { value: user.email } });
    fireEvent.blur(getByLabelText(/Email/));
    fireEvent.click(getByText('Submit'));

    expect(findByText('test error')).toBeDefined();
  });

  it('should NOT submit with invalid data in form', async () => {
    const initialValues = {
      email: 'email',
    };

    const successSpy = jest.fn();
    const passwordResetSpy = jest.fn();

    const { getByText } = render(
      <PasswordResetForm
        onSuccess={successSpy}
        passwordReset={passwordResetSpy}
        {...initialValues}
      />,
    );

    fireEvent.click(getByText('Submit'));

    await wait(() => {
      expect(passwordResetSpy).not.toHaveBeenCalled();
      expect(successSpy).not.toHaveBeenCalled();
      expect(OperationCodeAPIMock.history.post.length).not.toBeGreaterThan(0);
    });
  });
});
