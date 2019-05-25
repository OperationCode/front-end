/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { validationErrorMessages } from 'common/constants/messages';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import mockUser from 'test-utils/mockGenerators/mockUser';
import asyncRenderDiff from 'test-utils/asyncRenderDiff';
import wait from 'test-utils/wait';
import PasswordResetForm from '../PasswordResetForm';

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

    const initialValues = {
      email: user.email,
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
      expect(passwordResetSpy).toHaveBeenCalled();
      expect(successSpy).toHaveBeenCalled();
      expect(OperationCodeAPIMock.history.post.length).toBeGreaterThan(0);
    });
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
