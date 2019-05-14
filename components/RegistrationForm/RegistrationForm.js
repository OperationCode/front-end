import React, { Component } from 'react';
import { func, number, oneOfType, shape, string } from 'prop-types';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { createUser } from 'common/constants/api';
import { getErrorMessage } from 'common/utils/api-utils';
import { validationErrorMessages } from 'common/constants/messages';
import { minimumPasswordLength } from 'common/constants/validations';
import { capitalizeFirstLetter } from 'common/utils/string-utils';
import { isMinPasswordStrength, isValidZipcode } from 'common/utils/validator-utils';
import Button from 'components/Button/Button';
import Form from 'components/Form/Form';
import Input from 'components/Form/Input/Input';
import Alert from 'components/Alert/Alert';
import styles from './RegistrationForm.css';

const registrationSchema = Yup.object().shape({
  email: Yup.string()
    .required(validationErrorMessages.required)
    .email(validationErrorMessages.email),
  'confirm-email': Yup.string()
    .required(validationErrorMessages.required)
    .oneOf([Yup.ref('email')], validationErrorMessages.emailMatch),
  password: Yup.string()
    .required(validationErrorMessages.required)
    .min(minimumPasswordLength, validationErrorMessages.length(minimumPasswordLength))
    .test('password-strength', validationErrorMessages.password, isMinPasswordStrength),
  'confirm-password': Yup.string()
    .required(validationErrorMessages.required)
    .oneOf([Yup.ref('password')], validationErrorMessages.passwordMatch),
  firstName: Yup.string().required(validationErrorMessages.required),
  lastName: Yup.string().required(validationErrorMessages.required),
  zipcode: Yup.string()
    .required(validationErrorMessages.required)
    .test('zipcode', validationErrorMessages.zipcode, isValidZipcode),
});

class RegistrationForm extends Component {
  static propTypes = {
    onSuccess: func.isRequired,
    initialValues: shape({
      email: string,
      'confirm-email': string,
      password: string,
      'confirm-password': string,
      firstName: string,
      lastName: string,
      zipcode: oneOfType([string, number]),
    }),
  };

  static defaultProps = {
    initialValues: {
      email: '',
      'confirm-email': '',
      password: '',
      'confirm-password': '',
      firstName: '',
      lastName: '',
      zipcode: '',
    },
  };

  state = {
    errorMessage: '',
  };

  handleSubmit = async (values, actions) => {
    const { onSuccess } = this.props;

    try {
      const { token } = await createUser(values);
      actions.setSubmitting(false);
      actions.resetForm();

      await onSuccess({ user: { ...values, slackName: '', isMentor: false }, token });
    } catch (error) {
      actions.setSubmitting(false);

      const { data } = error.response;

      if (data) {
        // TODO: Create back-end ticket for checking if email has been taken for a debounced,
        // client-side validation of emails instead of waiting for submission.
        const errorMessage = Object.keys(data)
          .map(key => {
            const fieldName = capitalizeFirstLetter(key);

            // example: Email has already been taken.
            return `${fieldName} ${data[key][0]}.`;
          })
          .join('\n');

        this.setState({ errorMessage });
      } else {
        this.setState({ errorMessage: getErrorMessage(error) });
      }
    }
  };

  render() {
    const { props, state } = this;

    return (
      <Formik
        initialValues={props.initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={registrationSchema}
      >
        {({ isSubmitting }) => (
          <Form className={styles.RegistrationForm}>
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
                type="email"
                name="confirm-email"
                label="Confirm Email*"
                component={Input}
                disabled={isSubmitting}
                autoComplete="username email"
              />
            </div>

            <div className={styles.row}>
              <Field
                type="password"
                name="password"
                label="Password*"
                component={Input}
                disabled={isSubmitting}
                autoComplete="new-password"
              />

              <Field
                type="password"
                name="confirm-password"
                label="Confirm Password*"
                component={Input}
                disabled={isSubmitting}
                autoComplete="new-password"
              />
            </div>

            <div className={styles.row}>
              <Field
                type="text"
                name="firstName"
                label="First Name*"
                component={Input}
                disabled={isSubmitting}
                autoComplete="given-name"
              />

              <Field
                type="text"
                name="lastName"
                label="Last Name*"
                component={Input}
                disabled={isSubmitting}
                autoComplete="family-name"
              />
            </div>

            <div className={styles.row}>
              <Field
                type="text"
                name="zipcode"
                label="Zipcode*"
                component={Input}
                disabled={isSubmitting}
                autoComplete="postal-code"
              />
            </div>

            <div className={styles.row}>
              <Alert isOpen={Boolean(state.errorMessage)} type="error">
                {state.errorMessage}
              </Alert>
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
}

export default RegistrationForm;
