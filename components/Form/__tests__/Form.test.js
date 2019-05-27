import React from 'react';
import { Formik, Field } from 'formik';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Form from '../Form';

describe('Form', () => {
  it('should render within the context of Formik', () => {
    createSnapshotTest(
      <Formik>
        <Form>
          <Field id="test" name="test" label="label" component="input" />,
        </Form>
      </Formik>,
    );
  });
});
