import { connect } from 'formik';

const FormikConnectedForm = connect(({ formik: { handleReset, handleSubmit }, ...props }) => (
  <form onReset={handleReset} onSubmit={handleSubmit} noValidate {...props} />
));

FormikConnectedForm.displayName = 'FormikConnectedForm';

export default FormikConnectedForm;
