import { Formik } from 'formik';
import noop from 'lodash/noop';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import Form from 'components/Form/Form';

import { MilitaryDetails } from '../MilitaryDetails';

describe('UpdateProfileForm/Steps/MilitaryDetails', () => {
  afterEach(() => {
    OperationCodeAPIMock.reset();
  });

  it('should render in context of Formik', () => {
    createSnapshotTest(
      <Formik
        onSubmit={noop}
        initialValues={MilitaryDetails.initialValues}
        validationSchema={MilitaryDetails.validationSchema}
      >
        <Form>
          <MilitaryDetails isSubmitting={false} />
        </Form>
      </Formik>,
    );
  });
});
