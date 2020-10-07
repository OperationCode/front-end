import React, { useState } from 'react';
import { string, func, shape } from 'prop-types';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../../Buttons/Button/Button';
import Input from '../../Form/Input/Input';
import Alert from '../../Alert/Alert';
import { validationErrorMessages } from '../../../common/constants/messages';
import { getServerErrorMessage } from '../../../common/utils/api-utils';
import styles from './PasswordResetForm.module.css';

const passwordResetSchema = Yup.object().shape({
  email: Yup.string()
    .required(validationErrorMessages.required)
    .email(validationErrorMessages.email),
});

PasswordResetForm.propTypes = {
  passwordReset: func.isRequired,
  onSuccess: func.isRequired,
  initialValues: shape({
    email: string,
  }),
};

PasswordResetForm.defaultProps = {
  initialValues: {
    email: '',
  },
};

function PasswordResetForm({ initialValues, onSuccess, passwordReset }) {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async ({ email }, actions) => {
    try {
      const { detail } = await passwordReset({ email });
      actions.setSubmitting(false);
      actions.resetForm();

      await onSuccess({ detail });
    } catch (error) {
      actions.setSubmitting(false);

      setErrorMessage(getServerErrorMessage(error));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={passwordResetSchema}
    >
      {({ isSubmitting }) => (
        <Form className={styles.PasswordResetForm}>
          <div className={styles.row}>
            <Field
              type="email"
              name="email"
              label="Email*"
              component={Input}
              disabled={isSubmitting}
              autoComplete="username email"
            />
          </div>

          <div className={styles.row}>
            {errorMessage && <Alert type="error">{errorMessage}</Alert>}
          </div>

          <div className={styles.row}>
            <Button
              className={styles.topMargin}
              type="submit"
              theme="secondary"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default PasswordResetForm;
