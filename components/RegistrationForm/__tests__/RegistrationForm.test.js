import React from 'react';
import faker from 'faker';
import { mount } from 'enzyme';
import { createUser } from 'common/constants/api';
import { validationErrorMessages } from 'common/constants/validations';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import mockValidPassword from 'test-utils/mockValidPassword';
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

const generateValidUserObject = (desiredEmail = '') => {
  const email = desiredEmail || faker.internet.email();
  const password = mockValidPassword();

  const user = {
    email,
    'confirm-email': email,
    password,
    'confirm-password': password,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    zipcode: faker.address.zipCode(),
  };

  return user;
};

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
        target: { id: 'password', value: mockValidPassword() },
      })
      .simulate('blur');

    wrapper
      .find('input#confirm-password')
      .simulate('change', {
        target: { id: 'confirm-password', value: 'something-else' },
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
    const user = generateValidUserObject();

    OperationCodeAPIMock.onPost('users', { user }).reply(200, {
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
    });

    const successSpy = jest.fn();
    const wrapper = mount(
      <RegistrationForm onSuccess={successSpy} register={jest.fn()} initialState={user} />,
    );

    wrapper.find('Button').simulate('submit');
    await asyncRenderDiff(wrapper);

    await wait(() => {
      expect(successSpy).toHaveBeenCalled();
      expect(OperationCodeAPIMock.history.post.length).toBeGreaterThan(0);
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

    const wrapper = mount(
      <RegistrationForm
        onSuccess={successSpy}
        register={jest.fn()}
        initialValues={invalidFormValues}
      />,
    );

    wrapper.find('Button').simulate('submit');
    await asyncRenderDiff(wrapper);

    await wait(() => {
      expect(successSpy).not.toHaveBeenCalled();
      expect(OperationCodeAPIMock.history.post.length).not.toBeGreaterThan(0);
    });

    // All fields + 1 because of always-rendered form error (as opposed to all the field errors)
    expect(wrapper.find('Alert').children()).toHaveLength(
      Object.keys(invalidFormValues).length + 1,
    );
  });

  it('should show "email already registered" message for dupe email registration', async () => {
    const existingUser = await generateValidUserObject('kylemh.email12@gmail.com');

    OperationCodeAPIMock.onPost('users', {
      user: {
        email: existingUser.email,
        password: existingUser.password,
        first_name: existingUser.firstName,
        last_name: existingUser.lastName,
        zip: existingUser.zipcode,
      },
    }).reply(422, { email: ['has been taken'] });

    const successSpy = jest.fn();
    const wrapper = mount(
      <RegistrationForm
        register={createUser}
        onSuccess={successSpy}
        initialValues={existingUser}
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
