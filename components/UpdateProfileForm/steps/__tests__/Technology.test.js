import React from 'react';
import { Formik } from 'formik';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Technology from '../Technology';

describe('UpdateProfileForm/Steps/Technology', () => {
  it('should render in context of Formik', () => {
    createSnapshotTest(
      <Formik
        initialValues={Technology.initialValues}
        validationSchema={Technology.validationSchema}
      >
        <Technology />
      </Formik>,
    );
  });
});
