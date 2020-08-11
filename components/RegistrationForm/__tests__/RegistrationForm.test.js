import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { networkErrorMessages } from 'common/constants/messages';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import mockUser from 'test-utils/mockGenerators/mockUser';
/* import mockPassword from 'test-utils/mockGenerators/mockPassword'; */
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import RegistrationForm from '../RegistrationForm';

beforeEach(() => {
  OperationCodeAPIMock.reset();
});

describe('RegistrationForm', () => {
  it('should render with required props', () => {
    createSnapshotTest(<RegistrationForm onSuccess={jest.fn()} />);
  });

  it('should submit with valid data in form', async () => {
    const user = mockUser();

    OperationCodeAPIMock.onPost('auth/registration/', {
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      zipcode: user.zipcode,
    }).reply(200, { token: 'fake-token' });

    const successSpy = jest.fn();
    const { getByText } = render(<RegistrationForm onSuccess={successSpy} initialValues={user} />);

    fireEvent.click(getByText('Submit'));

    await waitFor(() => {
      expect(OperationCodeAPIMock.history.post.length).toStrictEqual(1);
      expect(successSpy).toHaveBeenCalledTimes(1);
    });
  });

  it('should reset form and set form as "not submitting" after successful login', async () => {
    const user = mockUser();

    const initialValues = {
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      zipcode: user.zipcode,
    };

    OperationCodeAPIMock.onPost('auth/registration/', initialValues).reply(200, {
      token: 'fake-token',
    });

    const successSpy = jest.fn(() => Promise.resolve(true));
    const { container, getByText, findByText } = render(
      <RegistrationForm onSuccess={successSpy} initialValues={initialValues} />,
    );

    fireEvent.click(getByText('Submit'));

    const submit = await findByText('Submit');
    expect(submit).not.toBeDisabled();
    container.querySelectorAll('input').forEach(input => {
      expect(input.textContent).toBeFalsy();
    });
  });

  it('should show a helpful error if the server is down', async () => {
    const user = mockUser();

    OperationCodeAPIMock.onPost('auth/registration/', user).reply(503);

    const successSpy = jest.fn();
    const { findByText, getByText } = render(
      <RegistrationForm onSuccess={successSpy} initialValues={user} />,
    );

    fireEvent.click(getByText('Submit'));
    expect(successSpy).not.toHaveBeenCalled();

    const alert = await findByText(networkErrorMessages.serverDown);
    expect(alert).not.toBeNull();
  });
});
