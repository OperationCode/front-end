import React, { useState } from 'react';
import { string, func, shape } from 'prop-types';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import Button from 'components/Button/Button';
import Form from 'components/Form/Form';
import Input from 'components/Form/Input/Input';
import Alert from 'components/Alert/Alert';
import { validationErrorMessages } from 'common/constants/messages';
import { getServerErrorMessage } from 'common/utils/api-utils';
import { minimumPasswordLength } from 'common/constants/validations';
import { isMinPasswordStrength } from 'common/utils/validator-utils';
import styles from './ChangePasswordForm.css';

const passwordResetSubmitSchema = Yup.object().shape({
  newPassword1: Yup.string()
    .required(validationErrorMessages.required)
    .min(minimumPasswordLength, validationErrorMessages.length(minimumPasswordLength))
    .test('password-strength', validationErrorMessages.password, isMinPasswordStrength),
  newPassword2: Yup.string()
    .required(validationErrorMessages.required)
    .oneOf([Yup.ref('newPassword1')], validationErrorMessages.passwordMatch),
});

ChangePasswordForm.propTypes = {
  onSubmit: func.isRequired,
  onSuccess: func.isRequired,
  initialValues: shape({
    email: string,
  }),
};

ChangePasswordForm.defaultProps = {
  initialValues: {
    newPassword1: '',
    newPassword2: '',
  },
};

/**
 * Form component used for changing a password either during a password reset
 * or standard change password request.
 */

function ChangePasswordForm({ onSubmit, onSuccess, initialValues }) {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (values, actions) => {
    try {
      await onSubmit(values);
      actions.setSubmitting(false);
      actions.resetForm();

      await onSuccess();
    } catch (error) {
      actions.setSubmitting(false);
      setErrorMessage(getServerErrorMessage(error));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={passwordResetSubmitSchema}
    >
      {({ isSubmitting }) => (
        <Form className={styles.PasswordResetSubmitForm}>
          <div className={styles.row}>
            <Field
              type="password"
              name="newPassword1"
              label="Password*"
              component={Input}
              disabled={isSubmitting}
              autoComplete="new-password"
            />

            <Field
              type="password"
              name="newPassword2"
              label="Confirm Password*"
              component={Input}
              disabled={isSubmitting}
              autoComplete="new-password"
            />

            {errorMessage && <Alert type="error">{errorMessage}</Alert>}

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

export default ChangePasswordForm;
