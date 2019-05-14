import React from 'react';
import { Formik } from 'formik';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import ProfessionalDetails from '../ProfessionalDetails';

describe('UpdateProfileForm/Steps/ProfessionalDetails', () => {
  it('should render in context of Formik', () => {
    createSnapshotTest(
      <Formik
        initialValues={ProfessionalDetails.initialValues}
        validationSchema={ProfessionalDetails.validationSchema}
      >
        <ProfessionalDetails />
      </Formik>,
    );
  });
});
