import React from 'react';
import { mount } from 'enzyme';
import { wait } from '@testing-library/react';
import { passwordResetSubmit } from 'common/constants/api';
import { validationErrorMessages } from 'common/constants/messages';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import mockUser from 'test-utils/mockGenerators/mockUser';
import asyncRenderDiff from 'test-utils/asyncRenderDiff';
import ChangePasswordForm from '../ChangePasswordForm';

beforeEach(() => {
  OperationCodeAPIMock.reset();
});

describe('ChangePasswordForm', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <ChangePasswordForm
        onSuccess={jest.fn()}
        onSubmit={jest.fn()}
        token="testToken"
        uid="testUID"
      />,
    );
  });

  it('should display required error message when blurring past password input', async () => {
    const wrapper = mount(
      <ChangePasswordForm
        onSuccess={jest.fn()}
        onSubmit={jest.fn()}
        token="testToken"
        uid="testUID"
      />,
    );

    wrapper.find('input#newPassword1').simulate('blur');

    await asyncRenderDiff(wrapper);

    expect(
      wrapper
        .find('Input[type="password"]')
        .find('Alert')
        .text(),
    ).toStrictEqual(validationErrorMessages.required);
  });

  it('should show "invalid password" message when given invalid password', async () => {
    const stringWithNoCapital = 'sillypassword1';
    const wrapper = mount(
      <ChangePasswordForm
        onSuccess={jest.fn()}
        onSubmit={jest.fn()}
        token="testToken"
        uid="testUID"
        initialValues={{ newPassword1: stringWithNoCapital }}
      />,
    );

    wrapper.find('Button').simulate('submit');
    await asyncRenderDiff(wrapper);

    expect(
      wrapper
        .find('Input[type="password"]')
        .find('Alert')
        .text(),
    ).toStrictEqual(validationErrorMessages.password);
  });

  it('should submit with valid data in form', async () => {
    const user = mockUser();

    const initialValues = {
      newPassword1: user.password,
      newPassword2: user.password,
    };

    const successSpy = jest.fn();
    const passwordResetSubmitSpy = jest.fn();

    const wrapper = mount(
      <ChangePasswordForm
        onSuccess={successSpy}
        onSubmit={passwordResetSubmitSpy}
        token="testToken"
        uid="testUID"
        initialValues={initialValues}
      />,
    );

    wrapper.find('Button').simulate('submit');
    await asyncRenderDiff(wrapper);

    await wait(() => {
      expect(passwordResetSubmitSpy).toHaveBeenCalledTimes(1);
      expect(successSpy).toHaveBeenCalledTimes(1);
    });
  });

  it('should NOT submit to server with invalid data in form', async () => {
    const initialValues = {
      newPassword1: '1',
      newPassword2: '1',
    };

    const successSpy = jest.fn();
    const passwordResetSubmitSpy = jest.fn();

    const wrapper = mount(
      <ChangePasswordForm
        onSuccess={successSpy}
        onSubmit={passwordResetSubmitSpy}
        initialValues={initialValues}
      />,
    );

    wrapper.find('Button').simulate('submit');
    await asyncRenderDiff(wrapper);

    await wait(() => {
      expect(passwordResetSubmitSpy).not.toHaveBeenCalled();
      expect(successSpy).not.toHaveBeenCalled();
      expect(OperationCodeAPIMock.history.post.length).not.toBeGreaterThan(0);
    });
  });

  it('should display error message when request fails', async () => {
    const user = mockUser();
    const initialValues = {
      newPassword1: user.password,
      newPassword2: user.password,
    };

    OperationCodeAPIMock.onPost('auth/password/reset/confirm/', {
      newPassword1: user.password,
      newPassword2: user.password,
      token: 'testToken',
      uid: 'testUID',
    }).reply(400, { error: 'test error' });

    const successSpy = jest.fn();

    const wrapper = mount(
      <ChangePasswordForm
        onSuccess={successSpy}
        onSubmit={passwordResetSubmit}
        token="testToken"
        uid="testUID"
        initialValues={initialValues}
      />,
    );

    wrapper.find('Button').simulate('submit');
    await asyncRenderDiff(wrapper);

    await wait(() => {
      expect(OperationCodeAPIMock.history.post.length).toBeGreaterThan(0);
    });

    expect(wrapper.find('Alert').text()).toStrictEqual('test error');
  });
});
