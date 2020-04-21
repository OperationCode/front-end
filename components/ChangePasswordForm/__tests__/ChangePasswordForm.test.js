import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import { passwordResetSubmit } from 'common/constants/api';
import { validationErrorMessages } from 'common/constants/messages';
import { BUTTON, INPUT_ERROR, CHANGE_PASSWORD_FORM_ERROR } from 'common/constants/testIDs';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import mockUser from 'test-utils/mockGenerators/mockUser';
import ChangePasswordForm from '../ChangePasswordForm';

beforeEach(() => {
  OperationCodeAPIMock.reset();
});

describe('ChangePasswordForm', () => {
  const requiredProps = {
    onSuccess: jest.fn(),
    onSubmit: jest.fn(),
  };

  it('should render with required props', () => {
    createSnapshotTest(<ChangePasswordForm {...requiredProps} />);
  });

  it('should display required error message when blurring past password input', async () => {
    const component = render(<ChangePasswordForm {...requiredProps} />);

    fireEvent.blur(component.queryByLabelText(/^Password/));

    const InputError = await component.findByTestId(INPUT_ERROR);

    expect(InputError.textContent).toStrictEqual(validationErrorMessages.required);
  });

  it('should show "invalid password" message when given invalid password', async () => {
    const stringWithNoCapital = 'sillypassword1';

    const component = render(
      <ChangePasswordForm
        {...requiredProps}
        initialValues={{ newPassword1: stringWithNoCapital }}
      />,
    );

    fireEvent.click(component.queryByTestId(BUTTON));

    const InputError = await component.findByTestId(INPUT_ERROR);

    expect(InputError.textContent).toStrictEqual(validationErrorMessages.password);
  });

  it('should submit with valid data in form', async () => {
    const user = mockUser();

    const successSpy = jest.fn();
    const passwordResetSubmitSpy = jest.fn();

    const component = render(
      <ChangePasswordForm
        onSuccess={successSpy}
        onSubmit={passwordResetSubmitSpy}
        initialValues={{
          newPassword1: user.password,
          newPassword2: user.password,
        }}
      />,
    );

    expect(passwordResetSubmitSpy).not.toHaveBeenCalled();
    expect(successSpy).not.toHaveBeenCalled();

    fireEvent.click(component.queryByTestId(BUTTON));

    await wait(() => {
      expect(passwordResetSubmitSpy).toHaveBeenCalledTimes(1);
      expect(successSpy).toHaveBeenCalledTimes(1);
    });
  });

  it('should NOT submit to server with invalid data in form', async () => {
    const successSpy = jest.fn();
    const passwordResetSubmitSpy = jest.fn();

    const component = render(
      <ChangePasswordForm
        onSuccess={successSpy}
        onSubmit={passwordResetSubmitSpy}
        initialValues={{
          newPassword1: '1',
          newPassword2: '1',
        }}
      />,
    );

    fireEvent.click(component.queryByTestId(BUTTON));

    await wait(() => {
      expect(passwordResetSubmitSpy).not.toHaveBeenCalled();
      expect(successSpy).not.toHaveBeenCalled();
      expect(OperationCodeAPIMock.history.post.length).not.toBeGreaterThan(0);
    });
  });

  it('should display error message when request fails', async () => {
    const error = 'test error';
    const user = mockUser();

    OperationCodeAPIMock.onPost('auth/password/reset/confirm/', {
      newPassword1: user.password,
      newPassword2: user.password,
    }).reply(400, { error });

    const successSpy = jest.fn();

    const component = render(
      <ChangePasswordForm
        onSuccess={successSpy}
        onSubmit={passwordResetSubmit}
        initialValues={{
          newPassword1: user.password,
          newPassword2: user.password,
        }}
      />,
    );

    fireEvent.click(component.queryByTestId(BUTTON));

    await wait(() => {
      expect(OperationCodeAPIMock.history.post.length).toBeGreaterThan(0);
    });

    const FormError = await component.findByTestId(CHANGE_PASSWORD_FORM_ERROR);

    expect(FormError.textContent).toStrictEqual(error);
  });
});
