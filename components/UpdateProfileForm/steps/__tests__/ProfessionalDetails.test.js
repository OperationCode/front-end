import React from 'react';
import { Formik } from 'formik';
import { fireEvent, render, wait } from '@testing-library/react';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { KEY_CODES } from 'test-utils/identifiers';
import Form from 'components/Form/Form';

import ProfessionalDetails from '../ProfessionalDetails';

describe('UpdateProfileForm/Steps/ProfessionalDetails', () => {
  afterEach(() => {
    OperationCodeAPIMock.reset();
  });

  it('should render in context of Formik', () => {
    createSnapshotTest(
      <Formik
        initialValues={ProfessionalDetails.initialValues}
        validationSchema={ProfessionalDetails.validationSchema}
      >
        <Form>
          <ProfessionalDetails />
        </Form>
      </Formik>,
    );
  });

  it('should update user on submit', async () => {
    OperationCodeAPIMock.onPatch('auth/profile/').reply(200);

    const { container } = render(
      <Formik
        initialValues={ProfessionalDetails.initialValues}
        validationSchema={ProfessionalDetails.validationSchema}
        onSubmit={ProfessionalDetails.submitHandler}
      >
        <Form>
          <ProfessionalDetails />
        </Form>
      </Formik>,
    );
    const ReactSelect = container.querySelector('#react-select-employmentStatus-input');

    fireEvent.blur(ReactSelect);
    fireEvent.keyDown(ReactSelect, KEY_CODES.DOWN_ARROW);
    fireEvent.keyDown(ReactSelect, KEY_CODES.ENTER);
    fireEvent.change(container.querySelector('input#companyName'), {
      target: { id: 'companyName', value: 'Fake Company' },
    });
    fireEvent.change(container.querySelector('input#companyRole'), {
      target: { id: 'companyRole', value: 'QA Engineer' },
    });
    fireEvent.submit(container.querySelector('form'));

    await wait(() => {
      expect(OperationCodeAPIMock.history.patch.length).toStrictEqual(1);
    });
  });
});
