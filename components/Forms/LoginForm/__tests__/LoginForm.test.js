import faker from 'faker';
import { act, render, fireEvent, waitFor, screen } from '@testing-library/react';
import { loginUser } from 'common/constants/api';
import { networkErrorMessages, validationErrorMessages } from 'common/constants/messages';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import mockUser from 'test-utils/mockGenerators/mockUser';
import LoginForm from '../LoginForm';

describe('LoginForm', () => {
  afterEach(() => {
    OperationCodeAPIMock.reset();
  });

  it('should render with required props', () => {
    createSnapshotTest(<LoginForm login={jest.fn()} onSuccess={jest.fn()} />);
  });

  it('should display required error message when blurring past email input', async () => {
    render(<LoginForm login={jest.fn()} onSuccess={jest.fn()} />);

    fireEvent.blur(screen.getByLabelText(/Email/));

    expect(await screen.findByText(validationErrorMessages.required)).toBeInTheDocument();
  });

  it('should show error when providing non-email to email input', async () => {
    render(<LoginForm login={jest.fn()} onSuccess={jest.fn()} />);

    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'email' } });
    fireEvent.blur(screen.getByLabelText(/Email/));

    expect(await screen.findByText(validationErrorMessages.email)).toBeInTheDocument();
  });

  it('should show "password required" message when blurring past input', async () => {
    render(<LoginForm login={jest.fn()} onSuccess={jest.fn()} />);

    fireEvent.blur(screen.getByLabelText(/Password/));

    expect(await screen.findByText(validationErrorMessages.required)).toBeInTheDocument();
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
    render(<LoginForm onSuccess={successSpy} login={loginUser} initialValues={initialValues} />);

    fireEvent.click(screen.getByText('Login'));

    await waitFor(() => expect(successSpy).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(OperationCodeAPIMock.history.post.length).toBeGreaterThan(0));
  });

  it('should NOT submit with invalid data in form', async () => {
    const successSpy = jest.fn();

    render(
      <LoginForm
        onSuccess={successSpy}
        login={jest.fn()}
        initialValues={{ email: 'email@email', password: '1' }}
      />,
    );

    fireEvent.click(screen.getByText('Login'));
    // flush formik updates that are scheduled in a microtask
    await act(async () => {
      await Promise.resolve();
    });

    expect(successSpy).not.toHaveBeenCalled();
    expect(OperationCodeAPIMock.history.post.length).not.toBeGreaterThan(0);
  });

  it('should show error when trying to login with incorrect email or password', async () => {
    const invalidError = 'Invalid Email or password.';

    const initialValues = {
      email: 'testing123@gmail.com',
      password: 'Testing123',
    };

    OperationCodeAPIMock.onPost('auth/login/', initialValues).reply(401, { error: invalidError });

    const successSpy = jest.fn();

    render(<LoginForm login={loginUser} onSuccess={successSpy} initialValues={initialValues} />);

    fireEvent.click(screen.getByText('Login'));

    expect(await screen.findByText(invalidError)).toBeInTheDocument();
    await waitFor(() => expect(successSpy).not.toHaveBeenCalled());
  });

  it('should show a helpful error if the server is down', async () => {
    const user = mockUser();

    const initialValues = {
      email: user.email,
      password: user.password,
    };

    OperationCodeAPIMock.onPost('auth/login/', initialValues).reply(503);

    const successSpy = jest.fn();
    render(<LoginForm onSuccess={successSpy} login={loginUser} initialValues={initialValues} />);

    fireEvent.click(screen.getByText('Login'));

    await waitFor(() =>
      expect(screen.getByText(networkErrorMessages.serverDown)).toBeInTheDocument(),
    );
    await waitFor(() => expect(successSpy).not.toHaveBeenCalled());
    await waitFor(() => expect(OperationCodeAPIMock.history.post.length).toBeGreaterThan(0));
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
    render(<LoginForm onSuccess={successSpy} login={loginUser} initialValues={initialValues} />);

    expect(successSpy).toHaveBeenCalledTimes(0);

    fireEvent.click(screen.getByText('Login'));

    await waitFor(() => expect(successSpy).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(screen.getByText('Login')).not.toBeDisabled());

    await waitFor(() => expect(screen.getByLabelText('Email*')).toHaveValue(''));
    await waitFor(() => expect(screen.getByLabelText('Password*')).toHaveValue(''));
  });
});
