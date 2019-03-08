import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { minPasswordCharNum, validationErrorMessages } from 'common/constants/validations';
import { isMinPasswordStrength } from 'common/utils/validator-utils';
import Button from 'components/_common_/Button/Button';
import Form from 'components/_common_/Form/Form';
import Input from 'components/_common_/Form/Input/Input';
import Alert from 'components/Alert/Alert';

const registrationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Required')
    .email(validationErrorMessages.email),
  'confirm-email': Yup.string()
    .required('Required')
    .oneOf([Yup.ref('email')], validationErrorMessages.emailMatch),
  password: Yup.string()
    .required('Required')
    .min(minPasswordCharNum, validationErrorMessages.length(minPasswordCharNum))
    .test('password-strength', validationErrorMessages.password, isMinPasswordStrength),
  'confirm-password': Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password')], validationErrorMessages.passwordMatch),
});

// TODO: Define links for terms of service / privacy policy and place on this page

class RegistrationForm extends Component {
  static propTypes = {
    register: PropTypes.func.isRequired,
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
    alertMsg: '',
    alertType: '',
  };

  handleSubmit = async (values, actions) => {
    const { register, onSuccess } = this.props;

    try {
      await register({ ...values });
      actions.setSubmitting(false);
      actions.resetForm();

      onSuccess();
    } catch (error) {
      actions.setSubmitting(false);

      const { data } = error.response;

      if (data.email && data.email[0] === 'has already been taken') {
        actions.setFieldError('email', 'This email is tied to an account already.');
      } else {
        const alertMsg = Object.keys(data)
          .map(key => `${key}: ${data[key][0]}`)
          .join('\n');

        this.setState({ alertMsg, alertType: 'error' });
      }
    }
  };

  closeAlert = () => this.setState({ alertMsg: '', alertType: '' });

  render() {
    const { props, state } = this;

    return (
      <Formik
        initialValues={props.initialValues}
        onSubmit={props.onSubmit}
        validationSchema={registrationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <Alert
              isOpen={Boolean(state.alertMsg)}
              type={state.alertType}
              onToggle={this.closeAlert}
            >
              {state.alertMsg}
            </Alert>

            <Field
              type="email"
              name="email"
              label="Email"
              component={Input}
              disabled={isSubmitting}
              autoComplete="username email"
            />

            <Field
              type="email"
              name="confirm-email"
              label="Confirm Email"
              component={Input}
              disabled={isSubmitting}
              autoComplete="username email"
            />

            <Field
              type="password"
              name="password"
              label="Password"
              component={Input}
              disabled={isSubmitting}
              autoComplete="new-password"
            />

            <Field
              type="password"
              name="confirm-password"
              label="Confirm Password"
              component={Input}
              disabled={isSubmitting}
              autoComplete="new-password"
            />

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default RegistrationForm;
