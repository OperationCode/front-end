import { connect } from 'formik';

export const Form = connect(({ formik: { handleReset, handleSubmit }, ...props }) => (
  <form onReset={handleReset} onSubmit={handleSubmit} noValidate {...props} />
));

Form.displayName = 'Form';
