import React from 'react';
import { mount } from 'enzyme';
import { loginUser } from 'common/constants/api';
import { validationErrorMessages } from 'common/constants/validations';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import wait from 'test-utils/wait';
import LoginForm from '../LoginForm';

const asyncRenderDiff = async enzymeWrapper => {
  await wait();
  enzymeWrapper.update();
};

afterEach(() => {
  OperationCodeAPIMock.reset();
});

describe('LoginForm', () => {
  it('should render with required props', () => {
    createSnapshotTest(<LoginForm login={jest.fn()} onSuccess={jest.fn()} />);
  });

  it('should display required error message when blurring past email input', async () => {
    const wrapper = mount(<LoginForm login={jest.fn()} onSuccess={jest.fn()} />);

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
    const wrapper = mount(<LoginForm login={jest.fn()} onSuccess={jest.fn()} />);

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

  it('should show "password required" message when blurring past input', async () => {
    const wrapper = mount(<LoginForm login={jest.fn()} onSuccess={jest.fn()} />);

    wrapper.find('input#password').simulate('blur');

    await asyncRenderDiff(wrapper);

    expect(
      wrapper
        .find('Input[type="password"]')
        .find('Alert')
        .text(),
    ).toStrictEqual(validationErrorMessages.required);
  });

  it('should show "invalid password" message when focusing off an invalid password', async () => {
    const wrapper = mount(<LoginForm login={jest.fn()} onSuccess={jest.fn()} />);

    const stringWithNoCapital = 'sillypassword1';

    wrapper
      .find('input#password')
      .simulate('change', { target: { id: 'password', value: stringWithNoCapital } })
      .simulate('blur');

    await asyncRenderDiff(wrapper);

    expect(
      wrapper
        .find('Input[type="password"]')
        .find('Alert')
        .text(),
    ).toStrictEqual(validationErrorMessages.password);
  });

  it('should submit with valid data in form', async () => {
    const successSpy = jest.fn();
    const wrapper = mount(
      <LoginForm
        onSuccess={successSpy}
        login={jest.fn()}
        initialValues={{
          email: 'email@email.com',
          password: 'abc123ABC',
        }}
      />,
    );

    wrapper.find('Button').simulate('submit');
    await asyncRenderDiff(wrapper);

    expect(successSpy).toHaveBeenCalled();
  });

  it('should NOT submit with invalid data in form', async () => {
    const successSpy = jest.fn();

    const wrapper = mount(
      <LoginForm
        onSuccess={successSpy}
        login={jest.fn()}
        initialValues={{
          email: 'email@email',
          password: '1',
        }}
      />,
    );

    wrapper.find('Button').simulate('submit');
    await asyncRenderDiff(wrapper);

    expect(successSpy).not.toHaveBeenCalled();
  });

  it('should show error when trying to login with incorrect email or password', async () => {
    const invalidError = 'Invalid Email or password.';

    const user = {
      email: 'testing123@gmail.com',
      password: 'Testing123',
    };

    OperationCodeAPIMock.onPost('sessions', { user }).reply(401, { error: invalidError });

    const successSpy = jest.fn();

    const wrapper = mount(
      <LoginForm
        login={loginUser}
        onSuccess={successSpy}
        initialValues={{
          ...user,
        }}
      />,
    );

    wrapper.find('Button').simulate('submit');
    await asyncRenderDiff(wrapper);

    expect(successSpy).not.toHaveBeenCalled();
    expect(
      wrapper
        .find('Alert')
        .last()
        .text(),
    ).toStrictEqual(invalidError);
  });
});
