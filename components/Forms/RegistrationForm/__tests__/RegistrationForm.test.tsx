import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import { networkErrorMessages } from 'common/constants/messages';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { mockUser } from 'test-utils/mockGenerators/mockUser';
import { describe, expect, it } from 'vitest';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { REGISTRATION_FORM_INITIAL_SUBMIT_BUTTON } from 'common/constants/testIDs';
import { RegistrationForm } from '../RegistrationForm';

const axiosMock = new MockAdapter(axios);

describe('RegistrationForm', () => {
  it('should render with required props', () => {
    createSnapshotTest(<RegistrationForm onSuccess={vi.fn()} />);
  });

  it('should submit successfully with valid data in form', async () => {
    const user = mockUser();

    axiosMock.onPost('/api/registration/new', user).reply(200);

    const successSpy = vi.fn();
    const submitSpy = vi.fn();

    const { getByTestId } = render(
      <RegistrationForm onSubmit={submitSpy} onSuccess={successSpy} initialValues={user} />,
    );

    fireEvent.click(getByTestId(REGISTRATION_FORM_INITIAL_SUBMIT_BUTTON));

    await waitFor(() => {
      expect(submitSpy).toHaveBeenCalledTimes(1);
      expect(successSpy).toHaveBeenCalledTimes(1);
    });
  });

  it('should reset form and set form as "not submitting" after successful login', async () => {
    const user = mockUser();

    axiosMock.onPost('/api/registration/new', user).reply(200);

    const successSpy = vi.fn(() => Promise.resolve(true));
    const { container, getByTestId, findByTestId } = render(
      <RegistrationForm onSuccess={successSpy} initialValues={user} />,
    );

    fireEvent.click(getByTestId(REGISTRATION_FORM_INITIAL_SUBMIT_BUTTON));

    const submit = await findByTestId(REGISTRATION_FORM_INITIAL_SUBMIT_BUTTON);
    expect(submit).not.toBeDisabled();
    container.querySelectorAll('input').forEach(input => {
      expect(input.textContent).toBeFalsy();
    });
  });

  it('should show a helpful error if the server is down', async () => {
    const user = mockUser();

    axiosMock.onPost('/api/registration/new', user).reply(500);

    const submitSpy = vi.fn();
    const successSpy = vi.fn();
    render(<RegistrationForm onSubmit={submitSpy} onSuccess={successSpy} initialValues={user} />);

    // No Alert on mount
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId(REGISTRATION_FORM_INITIAL_SUBMIT_BUTTON));

    // Alert shown after submitting
    await waitFor(() => expect(submitSpy).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(successSpy).not.toHaveBeenCalled());
    expect(screen.queryByRole('alert')).toBeInTheDocument();

    // Assert on alert content
    const alert = await screen.findByText(networkErrorMessages.serverDown);
    expect(alert).not.toBeNull();
  });
});
