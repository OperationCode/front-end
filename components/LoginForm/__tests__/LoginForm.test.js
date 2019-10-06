import React from 'react';
import faker from 'faker';
import { mount } from 'enzyme'; // eslint-disable-line no-restricted-imports
import { wait } from '@testing-library/react';
import { loginUser } from 'common/constants/api';
import { networkErrorMessages, validationErrorMessages } from 'common/constants/messages';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import mockUser from 'test-utils/mockGenerators/mockUser';
import asyncRenderDiff from 'test-utils/asyncRenderDiff';
import LoginForm from '../LoginForm';

beforeEach(() => {
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

  it('should submit with valid data in form', async () => {
    const user = mockUser();

    const initialValues = {
      email: user.email,
      password: user.password,
    };

    OperationCodeAPIMock.onPost('auth/login/', initialValues).reply(200, {
      user: {
        ...user,
        slackName: faker.internet.userName(),
        mentor: false,
      },
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
    });

    const successSpy = jest.fn();
    const wrapper = mount(
      <LoginForm onSuccess={successSpy} login={loginUser} initialValues={initialValues} />,
    );

    wrapper.find('Button').simulate('submit');
    await asyncRenderDiff(wrapper);

    await wait(() => {
      expect(OperationCodeAPIMock.history.post.length).toBeGreaterThan(0);
      expect(successSpy).toHaveBeenCalledTimes(1);
    });
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

    await wait(() => {
      expect(successSpy).not.toHaveBeenCalled();
      expect(OperationCodeAPIMock.history.post.length).not.toBeGreaterThan(0);
    });
  });

  it('should show error when trying to login with incorrect email or password', async () => {
    const invalidError = 'Invalid Email or password.';

    const initialValues = {
      email: 'testing123@gmail.com',
      password: 'Testing123',
    };

    OperationCodeAPIMock.onPost('auth/login/', initialValues).reply(401, { error: invalidError });

    const successSpy = jest.fn();

    const wrapper = mount(
      <LoginForm login={loginUser} onSuccess={successSpy} initialValues={initialValues} />,
    );

    wrapper.find('Button').simulate('submit');
    await asyncRenderDiff(wrapper);

    wait(() => {
      expect(successSpy).not.toHaveBeenCalled();
    });

    expect(
      wrapper
        .find('Alert')
        .last()
        .text(),
    ).toStrictEqual(invalidError);
  });

  it('should show a helpful error if the server is down', async () => {
    const user = mockUser();

    const initialValues = {
      email: user.email,
      password: user.password,
    };

    OperationCodeAPIMock.onPost('auth/login/', initialValues).reply(503);

    const successSpy = jest.fn();
    const wrapper = mount(
      <LoginForm onSuccess={successSpy} login={loginUser} initialValues={initialValues} />,
    );

    wrapper.find('Button').simulate('submit');
    await asyncRenderDiff(wrapper);

    await wait(() => {
      expect(successSpy).not.toHaveBeenCalled();
      expect(OperationCodeAPIMock.history.post.length).toBeGreaterThan(0);
      expect(
        wrapper
          .find('Alert')
          .last()
          .text(),
      ).toStrictEqual(networkErrorMessages.serverDown);
    });
  });

  it('should reset form and set form as "not submitting" after successful login', async () => {
    const user = mockUser();

    const initialValues = {
      email: user.email,
      password: user.password,
    };

    OperationCodeAPIMock.onPost('auth/login/', initialValues).reply(200, {
      user: {
        ...user,
        slackName: faker.internet.userName(),
        mentor: false,
      },
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
    });

    const successSpy = jest.fn(() => Promise.resolve(true));
    const wrapper = mount(
      <LoginForm onSuccess={successSpy} login={loginUser} initialValues={initialValues} />,
    );

    const mockedFormikBag = {
      setSubmitting: jest.fn(),
      resetForm: jest.fn(),
    };

    await wrapper.instance().handleSubmit(initialValues, mockedFormikBag);

    expect(mockedFormikBag.setSubmitting).toHaveBeenCalledTimes(1);
    expect(mockedFormikBag.setSubmitting).toHaveBeenCalledWith(false);
    expect(mockedFormikBag.resetForm).toHaveBeenCalledTimes(1);
  });
});
