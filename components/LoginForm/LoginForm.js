import React, { useState } from 'react';
import { func, shape, string } from 'prop-types';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import noop from 'lodash/noop';
import { getServerErrorMessage } from 'common/utils/api-utils';
import { validationErrorMessages } from 'common/constants/messages';
import { LOGIN_BUTTON } from 'common/constants/testIDs';
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
  redirectFunction: func,
  buttonTheme: string,
};

LoginForm.defaultProps = {
  initialValues: {
    email: '',
    password: '',
  },
  redirectFunction: noop,
  buttonTheme: 'secondary',
};

function LoginForm({ initialValues, login, onSuccess, redirectFunction, buttonTheme }) {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (values, actions) => {
    try {
      const { token } = await login(values);

      await onSuccess({ token });
      actions.setSubmitting(false);
      actions.resetForm();
      redirectFunction();
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
              label="Email*"
              component={Input}
              disabled={isSubmitting}
              autoComplete="username email"
            />

            <Field
              type="password"
              name="password"
              label="Password*"
              component={Input}
              disabled={isSubmitting}
              autoComplete="new-password"
            />

            {errorMessage && <Alert type="error">{errorMessage}</Alert>}

            <Button
              className={styles.topMargin}
              type="submit"
              theme={buttonTheme}
              disabled={isSubmitting}
              data-testid={LOGIN_BUTTON}
            >
              Login
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
