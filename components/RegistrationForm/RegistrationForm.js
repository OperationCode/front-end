import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { minPasswordCharNum, validationErrorMessages } from 'common/constants/validations';
import { isMinPasswordStrength } from 'common/utils/validator-utils';
import Button from 'components/_common_/Button/Button';
import Form from 'components/_common_/Form/Form';
import Input from 'components/_common_/Form/Input/Input';

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

export default class RegistrationForm extends Component {
  state = {
    // firstName: '',
    // lastName: '',
    email: '',
    // zip: '',
    password: '',
    // isMentor: '',
  };

  render() {
    const { state } = this;

    return (
      <Formik
        initialValues={{ ...state }}
        onSubmit={(values, { setSubmitting }) => {
          // Probably HTTP request right here...
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        validationSchema={registrationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
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
