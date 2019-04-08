import React from 'react';
import { mount } from 'enzyme';
import { createUser } from 'common/constants/api';
import { validationErrorMessages } from 'common/constants/validations';
import asyncWrapperRender from 'test-utils/asyncRenderUpdate';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import wait from 'test-utils/wait';
import RegistrationForm from '../RegistrationForm';

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

    await asyncWrapperRender(wrapper);

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

    await asyncWrapperRender(wrapper);

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

    await asyncWrapperRender(wrapper);

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

    await asyncWrapperRender(wrapper);

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

    await asyncWrapperRender(wrapper);

    expect(
      wrapper
        .find('input#confirm-password')
        .closest('Input')
        .find('Alert')
        .text(),
    ).toStrictEqual(validationErrorMessages.passwordMatch);
  });

  it('should submit with valid data in form', async () => {
    const initialValues = {
      email: 'email@email.com',
      'confirm-email': 'email@email.com',
      password: 'abc123ABC',
      'confirm-password': 'abc123ABC',
      firstName: 'Test',
      lastName: 'User',
      zipcode: 90630,
    };

    OperationCodeAPIMock.onPost('users', { user: initialValues }).reply(200, {
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
    });

    const successSpy = jest.fn();
    const wrapper = mount(
      <RegistrationForm onSuccess={successSpy} register={jest.fn()} {...initialValues} />,
    );

    wrapper.find('Button').simulate('submit');
    await asyncWrapperRender(wrapper);

    await wait(() => {
      expect(successSpy).toHaveBeenCalled();
      expect(OperationCodeAPIMock.history.post.length).toBeGreaterThan(0);
    });
  });

  it('should NOT submit with invalid data in form', async () => {
    const successSpy = jest.fn();

    const initialValues = {
      email: 'email@email.com',
      'confirm-email': 'ffdsdsfsadf@fdsafdsafsd.com',
      password: 'abc1231111',
      'confirm-password': '111111',
      firstName: '',
      lastName: '',
      zipcode: '',
    };

    const wrapper = mount(
      <RegistrationForm onSuccess={successSpy} register={jest.fn()} {...initialValues} />,
    );

    wrapper.find('Button').simulate('submit');
    await asyncWrapperRender(wrapper);

    await wait(() => {
      expect(successSpy).not.toHaveBeenCalled();
      expect(OperationCodeAPIMock.history.post.length).not.toBeGreaterThan(0);
    });

    // + 1 because of always-present form Alert (conditionally rendered text)
    expect(wrapper.find('Alert').children()).toHaveLength(Object.keys(initialValues).length + 1);
  });

  it('should show "email already registered" message for dupe email registration', async () => {
    const testUser = {
      email: 'kylemh.email12@gmail.com',
      password: 'Testing123!',
      firstName: 'Test',
      lastName: 'User',
      zipcode: 90630,
    };

    OperationCodeAPIMock.onPost('users', {
      user: {
        email: testUser.email,
        password: testUser.password,
        first_name: testUser.firstName,
        last_name: testUser.lastName,
        zip: testUser.zipcode,
      },
    }).reply(422, { email: ['has been taken'] });

    const successSpy = jest.fn();
    const wrapper = mount(
      <RegistrationForm
        register={createUser}
        onSuccess={successSpy}
        initialValues={{
          ...testUser,
          'confirm-email': testUser.email,
          'confirm-password': testUser.password,
        }}
      />,
    );

    wrapper.find('Button').simulate('submit');
    await asyncWrapperRender(wrapper);

    expect(successSpy).not.toHaveBeenCalled();
    expect(
      wrapper
        .find('Alert')
        .last()
        .text(),
    ).toStrictEqual('Email has been taken.');
  });
});
