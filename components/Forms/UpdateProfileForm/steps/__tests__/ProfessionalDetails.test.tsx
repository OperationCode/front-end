import { Formik } from 'formik';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import Form from 'components/Form/Form';

import noop from 'lodash/noop';
import { ProfessionalDetails } from '../ProfessionalDetails';

describe('UpdateProfileForm/Steps/ProfessionalDetails', () => {
  it('should render in context of Formik', () => {
    createSnapshotTest(
      <Formik
        initialValues={ProfessionalDetails.initialValues}
        validationSchema={ProfessionalDetails.validationSchema}
        onSubmit={noop}
      >
        <Form>
          <ProfessionalDetails isSubmitting={false} />
        </Form>
      </Formik>,
    );
  });
});
