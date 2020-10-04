import React, { useState } from 'react';
import { func, shape, string } from 'prop-types';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { getServerErrorMessage } from 'common/utils/api-utils';
import { validationErrorMessages } from 'common/constants/messages';
import Button from 'components/Buttons/Button/Button';
import Form from 'components/Form/Form';
import Input from 'components/Form/Input/Input';
import Alert from 'components/Alert/Alert';
import styles from './LoginForm.module.css';

/*
 * NOTE: We're repeating hardcode between the registration schema and passing an asterisk
 * to the label of required fields. This seems to an unfortunate negative aspect of an otherwise
 * awesome library. More importantly, it looks like the lib's author has plans to remedy the
 * situation. For now, our forms wont change much, so we should be okay.
 */
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required(validationErrorMessages.required)
    .email(validationErrorMessages.email),
  password: Yup.string().required(validationErrorMessages.required),
});

LoginForm.propTypes = {
  login: func.isRequired, // essentially onSubmit
  onSuccess: func.isRequired,
  initialValues: shape({
    email: string,
    password: string,
  }),
  redirectFunc: func,
};

LoginForm.defaultProps = {
  initialValues: {
    email: '',
    password: '',
  },
  redirectFunc: undefined,
};

function LoginForm({ initialValues, login, onSuccess, redirectFunc }) {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (values, actions) => {
    try {
      const { token } = await login(values);

      await onSuccess({ token });
      actions.setSubmitting(false);
      actions.resetForm();
      if (redirectFunc) {
        redirectFunc();
      }
    } catch (error) {
      actions.setSubmitting(false);

      setErrorMessage(getServerErrorMessage(error));
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginSchema}>
      {({ isSubmitting }) => (
        <Form className={styles.LoginForm}>
          <div className={styles.row}>
            <Field
              type="email"
              name="email"
              label={redirectFunc ? '' : 'Email*'}
              component={Input}
              placeholder={redirectFunc ? 'Enter Your Username' : ''}
              disabled={isSubmitting}
              autoComplete="username email"
            />

            <Field
              type="password"
              name="password"
              label={redirectFunc ? '' : 'Password*'}
              placeholder={redirectFunc ? 'Enter Your Password' : ''}
              component={Input}
              disabled={isSubmitting}
              autoComplete="new-password"
            />

            {errorMessage && <Alert type="error">{errorMessage}</Alert>}

            <Button
              className={styles.topMargin}
              type="submit"
              theme={redirectFunc ? 'primary' : 'secondary'}
              disabled={isSubmitting}
            >
              {redirectFunc ? 'Login' : 'Submit'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
