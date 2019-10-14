import React, { Component } from 'react';
import { func, shape, string } from 'prop-types';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { getServerErrorMessage } from 'common/utils/api-utils';
import { validationErrorMessages } from 'common/constants/messages';
import Button from 'components/Button/Button';
import Form from 'components/Form/Form';
import Input from 'components/Form/Input/Input';
import Alert from 'components/Alert/Alert';
import styles from './LoginForm.css';

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

class LoginForm extends Component {
  static propTypes = {
    login: func.isRequired, // essentially onSubmit
    onSuccess: func.isRequired,
    initialValues: shape({
      email: string,
      password: string,
    }),
  };

  static defaultProps = {
    initialValues: {
      email: '',
      password: '',
    },
  };

  state = {
    errorMessage: '',
  };

  handleSubmit = async (values, actions) => {
    const { login, onSuccess } = this.props;

    try {
      const { user, token } = await login(values);

      await onSuccess({ token, user });
      actions.setSubmitting(false);
      actions.resetForm();
    } catch (error) {
      actions.setSubmitting(false);

      this.setState({ errorMessage: getServerErrorMessage(error) });
    }
  };

  render() {
    const { props, state } = this;

    return (
      <Formik
        initialValues={props.initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={loginSchema}
      >
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

              {state.errorMessage && <Alert type="error">{state.errorMessage}</Alert>}

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
}

export default LoginForm;
