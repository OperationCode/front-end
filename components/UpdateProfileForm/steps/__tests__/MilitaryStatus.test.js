import React from 'react';
import { Formik } from 'formik';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import MilitaryStatus from '../MilitaryStatus';

describe('UpdateProfileForm/Steps/MilitaryStatus', () => {
  it('should render in context of Formik', () => {
    createSnapshotTest(
      <Formik
        initialValues={MilitaryStatus.initialValues}
        validationSchema={MilitaryStatus.validationSchema}
      >
        <MilitaryStatus />
      </Formik>,
    );
  });
});
