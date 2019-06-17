/* eslint-disable jest/expect-expect */
import { render, fireEvent, cleanup } from '@testing-library/react';

import Login from '../login';
import OperationCodeAPIMock from '../../test-utils/mocks/apiMock';

afterEach(cleanup);

const mockRouter = {
  push: jest.fn(),
};

describe('login', () => {
  it('should display logged out if loggedOut query param is present', async () => {
    const { findByText } = render(<Login loggedOut router={mockRouter} />);

    await findByText(/Logged out successfully/);
  });

  it('should should not display logged out alert after re-render', async () => {
    const { findByText, queryByText, rerender } = render(<Login loggedOut router={mockRouter} />);

    await findByText(/Logged out successfully/);
    await rerender();

    expect(queryByText(/Logged out successfully/)).toBeNull();
  });

  it('should not display logged out alert after invalid login attempt', async () => {
    const invalidError = 'Invalid Email or password.';
    const email = 'test@test.test';
    const password = 'test';

    OperationCodeAPIMock.onPost('auth/login/', { email, password }).reply(401, {
      error: invalidError,
    });

    const { findByText, findByLabelText, queryByText } = render(
      <Login loggedOut router={mockRouter} />,
    );

    // displays alert
    await findByText(/Logged out successfully/);

    const emailInput = await findByLabelText('Email*');
    const passwordInput = await findByLabelText('Password*');
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });

    const submitButton = await findByText('Submit');
    fireEvent.click(submitButton);

    // wait for login error alert
    await findByText(invalidError);

    expect(queryByText(/Logged out successfully/)).toBeNull();
  });
});
