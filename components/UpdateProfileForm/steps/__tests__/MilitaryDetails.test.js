import React from 'react';
import { Formik } from 'formik';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import MilitaryDetails from '../MilitaryDetails';

describe('UpdateProfileForm/Steps/MilitaryDetails', () => {
  it('should render in context of Formik', () => {
    createSnapshotTest(
      <Formik
        initialValues={MilitaryDetails.initialValues}
        validationSchema={MilitaryDetails.validationSchema}
      >
        <MilitaryDetails />
      </Formik>,
    );
  });
});
