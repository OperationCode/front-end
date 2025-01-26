import { Formik } from 'formik';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import Form from 'components/Form/Form';
import noop from 'lodash/noop';
import { MilitaryStatus } from '../MilitaryStatus';

describe('UpdateProfileForm/Steps/MilitaryStatus', () => {
  it('should render in context of Formik', () => {
    createSnapshotTest(
      <Formik
        initialValues={MilitaryStatus.initialValues}
        validationSchema={MilitaryStatus.validationSchema}
        onSubmit={noop}
      >
        <Form>
          <MilitaryStatus isSubmitting={false} />
        </Form>
      </Formik>,
    );
  });
});
