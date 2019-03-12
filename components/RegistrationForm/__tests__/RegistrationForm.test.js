import React from 'react';
import { mount } from 'enzyme';
import { createUser } from 'common/constants/api';
import { validationErrorMessages } from 'common/constants/validations';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import wait from 'test-utils/wait';
import RegistrationForm from '../RegistrationForm';

const asyncRenderDiff = async enzymeWrapper => {
  await wait();
  enzymeWrapper.update();
};

afterEach(() => {
  OperationCodeAPIMock.reset();
});

describe('RegistrationForm', () => {
  it('should render with required props', () => {
    createSnapshotTest(<RegistrationForm register={jest.fn()} onSuccess={jest.fn()} />);
  });

  it('should display required error message when blurring past email input', async () => {
    const wrapper = mount(<RegistrationForm register={jest.fn()} onSuccess={jest.fn()} />);

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
    const wrapper = mount(<RegistrationForm register={jest.fn()} onSuccess={jest.fn()} />);

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
    const wrapper = mount(<RegistrationForm register={jest.fn()} onSuccess={jest.fn()} />);

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
    const wrapper = mount(<RegistrationForm register={jest.fn()} onSuccess={jest.fn()} />);

    const stringWithoutNumber = 'SillyPassword';

    wrapper
      .find('input#password')
      .simulate('change', { target: { id: 'password', value: stringWithoutNumber } })
      .simulate('blur');

    await asyncRenderDiff(wrapper);

    expect(
      wrapper
        .find('Input[type="password"]')
        .find('Alert')
        .text(),
    ).toStrictEqual(validationErrorMessages.password);
  });

  it('should display password match message when both password inputs do not match', async () => {
    const wrapper = mount(<RegistrationForm register={jest.fn()} onSuccess={jest.fn()} />);

    wrapper
      .find('input#password')
      .simulate('change', {
        target: { id: 'password', value: 'ValidPassword1' },
      })
      .simulate('blur');

    wrapper
      .find('input#confirm-password')
      .simulate('change', {
        target: { id: 'confirm-password', value: 'something' },
      })
      .simulate('blur');

    await asyncRenderDiff(wrapper);

    expect(
      wrapper
        .find('input#confirm-password')
        .closest('Input')
        .find('Alert')
        .text(),
    ).toStrictEqual(validationErrorMessages.passwordMatch);
  });

  it('should submit with valid data in form', async () => {
    const successSpy = jest.fn();
    const wrapper = mount(
      <RegistrationForm
        onSuccess={successSpy}
        register={jest.fn()}
        initialValues={{
          email: 'email@email.com',
          'confirm-email': 'email@email.com',
          password: 'abc123ABC',
          'confirm-password': 'abc123ABC',
          firstName: 'Test',
          lastName: 'User',
          zipcode: 90630,
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
      <RegistrationForm
        onSuccess={successSpy}
        register={jest.fn()}
        initialValues={{
          email: 'email@email.com',
          'confirm-email': 'ffdsdsfsadf@fdsafdsafsd.com',
          password: 'abc1231111',
          'confirm-password': '111111',
          firstName: '',
          lastName: '',
          zipcode: '',
        }}
      />,
    );

    wrapper.find('Button').simulate('submit');
    await asyncRenderDiff(wrapper);

    expect(successSpy).not.toHaveBeenCalled();
  });

  it('should show "email already registered" message for dupe email registration', async () => {
    const user = {
      email: 'kylemh.email12@gmail.com',
      password: 'Testing123!',
      firstName: 'Test',
      lastName: 'User',
      zipcode: 90630,
    };

    OperationCodeAPIMock.onAny().reply(422, { email: ['has been taken'] });

    const successSpy = jest.fn();
    const wrapper = mount(
      <RegistrationForm
        register={createUser}
        onSuccess={successSpy}
        initialValues={{
          ...user,
          'confirm-email': user.email,
          'confirm-password': user.password,
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
    ).toStrictEqual('Email has been taken.');
  });
});
