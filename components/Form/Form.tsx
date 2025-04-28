import { connect } from 'formik';
import type { DetailedHTMLProps, FormHTMLAttributes, FunctionComponent } from 'react';

const FormikConnectedForm = connect(({ formik: { handleReset, handleSubmit }, ...props }) => (
  <form onReset={handleReset} onSubmit={handleSubmit} noValidate {...props} />
)) as FunctionComponent<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>>;

FormikConnectedForm.displayName = 'FormikConnectedForm';

export default FormikConnectedForm;
