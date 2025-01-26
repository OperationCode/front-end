import { Formik, Field } from 'formik';
import noop from 'lodash/noop';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import Form from '../Form';

describe('Form', () => {
  it('should render within the context of Formik', () => {
    createSnapshotTest(
      <Formik initialValues={{}} onSubmit={noop}>
        <Form>
          <Field id="test" name="test" label="label" component="input" />,
        </Form>
      </Formik>,
    );
  });
});
