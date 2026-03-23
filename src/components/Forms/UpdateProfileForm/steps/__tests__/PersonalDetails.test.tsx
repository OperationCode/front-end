import { Formik } from 'formik';
import noop from 'lodash/noop';
import createSnapshotTest from '@/test-utils/createSnapshotTest';
import Form from '@/components/Form/Form';

import { PersonalDetails } from '../PersonalDetails';

describe('UpdateProfileForm/Steps/PersonalDetails', () => {
  it('should render in context of Formik', () => {
    createSnapshotTest(
      <Formik
        onSubmit={noop}
        initialValues={PersonalDetails.initialValues}
        validationSchema={PersonalDetails.validationSchema}
      >
        <Form>
          <PersonalDetails isSubmitting={false} />
        </Form>
      </Formik>,
    );
  });
});
