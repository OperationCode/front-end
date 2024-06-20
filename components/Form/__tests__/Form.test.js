import { Formik, Field } from 'formik';
import { Form } from '../Form';
import createSnapshotTest from '@/test-utils/createSnapshotTest';

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
