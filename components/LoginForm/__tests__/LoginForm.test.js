import React from 'react';
import faker from 'faker';
import { fireEvent, render, wait } from '@testing-library/react';
import { loginUser } from 'common/constants/api';
import { networkErrorMessages, validationErrorMessages } from 'common/constants/messages';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import mockUser from 'test-utils/mockGenerators/mockUser';
import LoginForm from '../LoginForm';

beforeEach(() => {
  OperationCodeAPIMock.reset();
});

describe('LoginForm', () => {
  it('should render with required props', () => {
    createSnapshotTest(<LoginForm login={jest.fn()} onSuccess={jest.fn()} />);
  });

  it('should display required error message when blurring past email input', async () => {
    const { getByLabelText, findByText } = render(
      <LoginForm login={jest.fn()} onSuccess={jest.fn()} />,
    );

    fireEvent.blur(getByLabelText(/Email/));

    expect(findByText(validationErrorMessages.required)).not.toBeNull();
  });

  it('should show error when providing non-email to email input', async () => {
    const { getByLabelText, findByText } = render(
      <LoginForm login={jest.fn()} onSuccess={jest.fn()} />,
    );

    fireEvent.change(getByLabelText(/Email/), { target: { value: 'email' } });
    fireEvent.blur(getByLabelText(/Email/));

    expect(findByText(validationErrorMessages.required)).not.toBeNull();
  });

  it('should show "password required" message when blurring past input', async () => {
    const { getByLabelText, findByText } = render(
      <LoginForm login={jest.fn()} onSuccess={jest.fn()} />,
    );

    fireEvent.blur(getByLabelText(/Password/));

    expect(findByText(validationErrorMessages.required)).not.toBeNull();
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
    const { getByText } = render(
      <LoginForm onSuccess={successSpy} login={loginUser} initialValues={initialValues} />,
    );

    fireEvent.click(getByText('Submit'));

    await wait(() => {
      expect(successSpy).toHaveBeenCalledTimes(1);
      expect(OperationCodeAPIMock.history.post.length).toBeGreaterThan(0);
    });
  });

  it('should NOT submit with invalid data in form', async () => {
    const successSpy = jest.fn();

    const { getByText } = render(
      <LoginForm
        onSuccess={successSpy}
        login={jest.fn()}
        initialValues={{
          email: 'email@email',
          password: '1',
        }}
      />,
    );

    fireEvent.click(getByText('Submit'));

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

    const { getByText, findByText } = render(
      <LoginForm login={loginUser} onSuccess={successSpy} initialValues={initialValues} />,
    );

    fireEvent.click(getByText('Submit'));

    wait(() => {
      expect(findByText(invalidError)).not.toBeNull();
      expect(successSpy).not.toHaveBeenCalled();
    });
  });

  it('should show a helpful error if the server is down', async () => {
    const user = mockUser();

    const initialValues = {
      email: user.email,
      password: user.password,
    };

    OperationCodeAPIMock.onPost('auth/login/', initialValues).reply(503);

    const successSpy = jest.fn();
    const { getByText, findByText } = render(
      <LoginForm onSuccess={successSpy} login={loginUser} initialValues={initialValues} />,
    );

    fireEvent.click(getByText('Submit'));

    await wait(() => {
      expect(findByText(networkErrorMessages.serverDown)).not.toBeNull();
      expect(successSpy).not.toHaveBeenCalled();
      expect(OperationCodeAPIMock.history.post.length).toBeGreaterThan(0);
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
    const { container, getByText } = render(
      <LoginForm onSuccess={successSpy} login={loginUser} initialValues={initialValues} />,
    );

    const submit = getByText('Submit');

    fireEvent.click(submit);

    await wait(() => {
      expect(submit).not.toBeDisabled();
    });

    container.querySelectorAll('input').forEach(input => {
      expect(input.textContent).toBeFalsy();
    });
  });
});
