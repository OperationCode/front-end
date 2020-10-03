import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import mockUser from 'test-utils/mockGenerators/mockUser';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import SurveyForm from '../SurveyForm';

beforeEach(() => {
  OperationCodeAPIMock.reset();
});

describe('SurveyForm', () => {
  const { email, firstName, lastName, zipcode } = mockUser();
  const initialValues = { email, firstName, lastName, zipcode };
  it('should render with required props', () => {
    createSnapshotTest(<SurveyForm />);
  });

  it('should submit with valid data in form', async () => {
    const successSpy = jest.fn();
    const { getByText } = render(
      <SurveyForm onSuccess={successSpy} initialValues={initialValues} />,
    );

    fireEvent.click(getByText('Submit'));
    await waitFor(() => {
      // TODO: Once this component is connected an api, change this assertion to 1 call.
      expect(OperationCodeAPIMock.history.post.length).toStrictEqual(0);
      expect(successSpy).toHaveBeenCalledTimes(1);
    });
  });

  it('should reset form and set form as "not submitting" after successful submission', async () => {
    const successSpy = jest.fn(() => Promise.resolve(true));
    const { container, getByText, findByText } = render(
      <SurveyForm onSuccess={successSpy} initialValues={initialValues} />,
    );

    fireEvent.click(getByText('Submit'));

    const submit = await findByText('Submit');
    expect(submit).not.toBeDisabled();

    container.querySelectorAll('input').forEach(input => {
      expect(input.textContent).toBeFalsy();
    });
  });

  it('should show an error error if the api call was rejected', async () => {
    const successSpy = jest.fn().mockRejectedValue({
      response: {
        data: {
          error: 'TODO: Once implemented, mock api and throw an error there instead of this fn.',
        },
      },
    });
    const { getByText } = render(
      <SurveyForm onSuccess={successSpy} initialValues={initialValues} />,
    );
    fireEvent.click(getByText('Submit'));
    await waitFor(() => {
      expect(alert).not.toBeNull();
    });
  });
});
