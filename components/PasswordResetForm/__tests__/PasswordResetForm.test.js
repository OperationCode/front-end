import React from 'react';
import { mount } from 'enzyme';
import { wait } from '@testing-library/react';
import { passwordReset } from 'common/constants/api';
import { validationErrorMessages } from 'common/constants/messages';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import mockUser from 'test-utils/mockGenerators/mockUser';
import asyncRenderDiff from 'test-utils/asyncRenderDiff';
import PasswordResetForm from '../PasswordResetForm';

afterEach(() => {
  OperationCodeAPIMock.reset();
});

describe('PasswordResetForm', () => {
  it('should render with required props', () => {
    createSnapshotTest(<PasswordResetForm onSuccess={jest.fn()} passwordReset={jest.fn()} />);
  });

  it('should display required error message when blurring past email input', async () => {
    const wrapper = mount(<PasswordResetForm onSuccess={jest.fn()} passwordReset={jest.fn()} />);

    wrapper.find('input#email').simulate('blur');

    await asyncRenderDiff(wrapper);

    expect(
      wrapper
        .find('Input[type="email"]')
        .find('Alert')
        .text(),
    ).toStrictEqual(validationErrorMessages.required);
  });

  it('should show error when providing non-email to email input', async () => {
    const wrapper = mount(<PasswordResetForm onSuccess={jest.fn()} passwordReset={jest.fn()} />);
    wrapper
      .find('input#email')
      .simulate('change', { target: { id: 'email', value: 'email' } })
      .simulate('blur');

    await asyncRenderDiff(wrapper);

    expect(
      wrapper
        .find('Input[type="email"]')
        .find('Alert')
        .text(),
    ).toStrictEqual(validationErrorMessages.email);
  });

  it('should submit with valid data in form', async () => {
    const user = mockUser();

    OperationCodeAPIMock.onPost('auth/password/reset/', { email: user.email }).reply(200, {
      detail: 'success',
    });

    const successSpy = jest.fn();

    const wrapper = mount(
      <PasswordResetForm onSuccess={successSpy} passwordReset={passwordReset} />,
    );

    wrapper
      .find('input#email')
      .simulate('change', { target: { id: 'email', value: user.email } })
      .simulate('blur');

    wrapper.find('Button').simulate('submit');

    await asyncRenderDiff(wrapper);

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

    const wrapper = mount(
      <PasswordResetForm onSuccess={successSpy} passwordReset={passwordReset} />,
    );

    wrapper
      .find('input#email')
      .simulate('change', { target: { id: 'email', value: user.email } })
      .simulate('blur');

    wrapper.find('Button').simulate('submit');
    await asyncRenderDiff(wrapper);

    expect(wrapper.find('Alert').text()).toStrictEqual('test error');
  });

  it('should NOT submit with invalid data in form', async () => {
    const initialValues = {
      email: 'email',
    };

    const successSpy = jest.fn();
    const passwordResetSpy = jest.fn();

    const wrapper = mount(
      <PasswordResetForm
        onSuccess={successSpy}
        passwordReset={passwordResetSpy}
        {...initialValues}
      />,
    );

    wrapper.find('Button').simulate('submit');
    await asyncRenderDiff(wrapper);

    await wait(() => {
      expect(passwordResetSpy).not.toHaveBeenCalled();
      expect(successSpy).not.toHaveBeenCalled();
      expect(OperationCodeAPIMock.history.post.length).not.toBeGreaterThan(0);
    });
  });
});
