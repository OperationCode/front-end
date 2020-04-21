import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
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
    const { findByLabelText, findByText } = render(
      <PasswordResetForm onSuccess={jest.fn()} passwordReset={jest.fn()} />,
    );

    fireEvent.blur(await findByLabelText(/Email/));

    expect(await findByText(validationErrorMessages.required)).not.toBeNull();
  });

  it('should show error when providing non-email to email input', async () => {
    const { findByLabelText, findByText } = render(
      <PasswordResetForm onSuccess={jest.fn()} passwordReset={jest.fn()} />,
    );

    fireEvent.change(await findByLabelText(/Email/), { target: { value: 'email' } });
    fireEvent.blur(await findByLabelText(/Email/));

    expect(await findByText(validationErrorMessages.email)).not.toBeNull();
  });

  it('should submit with valid data in form', async () => {
    const user = mockUser();

    OperationCodeAPIMock.onPost('auth/password/reset/', { email: user.email }).reply(200, {
      detail: 'success',
    });

    const successSpy = jest.fn();

    const { findByLabelText, findByText } = render(
      <PasswordResetForm onSuccess={successSpy} passwordReset={passwordReset} />,
    );

    fireEvent.change(await findByLabelText(/Email/), { target: { value: user.email } });
    fireEvent.blur(await findByLabelText(/Email/));
    fireEvent.click(await findByText('Submit'));

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

    const { findByLabelText, findByText } = render(
      <PasswordResetForm onSuccess={successSpy} passwordReset={passwordReset} />,
    );

    fireEvent.change(await findByLabelText(/Email/), { target: { value: user.email } });
    fireEvent.blur(await findByLabelText(/Email/));
    fireEvent.click(await findByText('Submit'));

    expect(await findByText('test error')).not.toBeNull();
  });

  it('should NOT submit with invalid data in form', async () => {
    const initialValues = {
      email: 'email',
    };

    const successSpy = jest.fn();
    const passwordResetSpy = jest.fn();

    const { findByText } = render(
      <PasswordResetForm
        onSuccess={successSpy}
        passwordReset={passwordResetSpy}
        {...initialValues}
      />,
    );

    fireEvent.click(await findByText('Submit'));

    await wait(() => {
      expect(passwordResetSpy).not.toHaveBeenCalled();
      expect(successSpy).not.toHaveBeenCalled();
      expect(OperationCodeAPIMock.history.post.length).not.toBeGreaterThan(0);
    });
  });
});
