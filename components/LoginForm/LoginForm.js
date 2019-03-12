import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { minPasswordCharNum, validationErrorMessages } from 'common/constants/validations';
import { isMinPasswordStrength } from 'common/utils/validator-utils';
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
  password: Yup.string()
    .required(validationErrorMessages.required)
    .min(minPasswordCharNum, validationErrorMessages.length(minPasswordCharNum))
    .test('password-strength', validationErrorMessages.password, isMinPasswordStrength),
});

// TODO: Define links for terms of service / privacy policy and place on this page
class LoginForm extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired, // essentially onSubmit
    onSuccess: PropTypes.func.isRequired,
    initialValues: PropTypes.shape({
      email: PropTypes.string,
      password: PropTypes.string,
    }),
  };

  static defaultProps = {
    initialValues: {
      email: '',
      password: '',
    },
  };

  state = {
    errorMsg: '',
  };

  handleSubmit = async (values, actions) => {
    const { login, onSuccess } = this.props;

    try {
      await login(values);
      actions.setSubmitting(false);
      actions.resetForm();

      await onSuccess();
    } catch (error) {
      actions.setSubmitting(false);

      const { data } = error.response;
      this.setState({ errorMsg: data.error });
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
            </div>

            <div className={styles.row}>
              <Alert isOpen={Boolean(state.errorMsg)} type="error">
                {state.errorMsg}
              </Alert>
            </div>

            <div className={styles.row}>
              <Button type="submit" theme="secondary" disabled={isSubmitting}>
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
