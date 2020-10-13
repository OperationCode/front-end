import React, { useState } from 'react';
import { func, number, oneOfType, shape, string, boolean } from 'prop-types';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { createUser } from 'common/constants/api';
import { getServerErrorMessage } from 'common/utils/api-utils';
import { validationErrorMessages } from 'common/constants/messages';
import { capitalizeFirstLetter } from 'common/utils/string-utils';
import { minimumPasswordLength } from 'common/constants/validations';
import { hasRequiredCharacters } from 'common/utils/validator-utils';
import Button from 'components/Buttons/Button/Button';
import Form from 'components/Form/Form';
import Input from 'components/Form/Input/Input';
import Checkbox from 'components/Form/Checkbox/Checkbox';
import Alert from 'components/Alert/Alert';
import styles from './RegistrationForm.module.css';

/**
 * Zipcode issues solved via a trim check from Yup.
 *
 * This may seem counter-intuitive, but it's difficult to get a zipcode regex correctly.
 * See https://stackoverflow.com/questions/578406/what-is-the-ultimate-postal-code-and-zip-regex
 * for more info
 *
 */
const registrationSchema = Yup.object().shape({
  email: Yup.string()
    .required(validationErrorMessages.required)
    .email(validationErrorMessages.email),
  'confirm-email': Yup.string()
    .required(validationErrorMessages.required)
    .oneOf([Yup.ref('email')], validationErrorMessages.emailsMatch),
  password: Yup.string()
    .required(validationErrorMessages.required)
    .min(minimumPasswordLength, validationErrorMessages.password)
    .test('password-strength', validationErrorMessages.password, hasRequiredCharacters),
  'confirm-password': Yup.string()
    .required(validationErrorMessages.required)
    .oneOf([Yup.ref('password')], validationErrorMessages.passwordsMatch),
  firstName: Yup.string().trim().required(validationErrorMessages.required),
  lastName: Yup.string().trim().required(validationErrorMessages.required),
  zipcode: Yup.string().trim().required(validationErrorMessages.required),
  codeOfConduct: Yup.boolean().oneOf([true], validationErrorMessages.required),
  communityGuidelines: Yup.boolean().oneOf([true], validationErrorMessages.required),
});

RegistrationForm.propTypes = {
  onSuccess: func.isRequired,
  initialValues: shape({
    email: string,
    'confirm-email': string,
    password: string,
    'confirm-password': string,
    firstName: string,
    lastName: string,
    zipcode: oneOfType([string, number]),
    codeOfConduct: boolean,
    communityGuidelines: boolean,
  }),
};

RegistrationForm.defaultProps = {
  initialValues: {
    email: '',
    'confirm-email': '',
    password: '',
    'confirm-password': '',
    firstName: '',
    lastName: '',
    zipcode: '',
    codeOfConduct: false,
    communityGuidelines: false,
  },
};

function RegistrationForm({ initialValues, onSuccess }) {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (values, actions) => {
    try {
      const { token } = await createUser(values);
      await onSuccess({ user: values, token });
      actions.setSubmitting(false);
      actions.resetForm();
    } catch (error) {
      actions.setSubmitting(false);

      const { data } = error.response;
      if (data) {
        // TODO: Create back-end ticket for checking if email has been taken for a debounced,
        // client-side validation of emails instead of waiting for submission.
        const newErrorMessage = Object.keys(data)
          .map(key => {
            const fieldName = capitalizeFirstLetter(key);

            // example: Email has already been taken.
            return `${fieldName}: ${data[key][0]}.`;
          })
          .join('\n');

        setErrorMessage(newErrorMessage);
      } else {
        setErrorMessage(getServerErrorMessage(error));
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registrationSchema}
    >
      {({ isSubmitting }) => (
        <Form className={styles.RegistrationForm}>
          <p>
            We work closely with military veterans, service members, and spouses who are passionate
            about transitioning into the tech industry. We work with over 7,000 members who are all
            working towards relevant goals on Slack and in-person meet-ups. Membership is free!
          </p>

          <div>
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

            <Field
              type="text"
              name="zipcode"
              label="Zipcode*"
              component={Input}
              disabled={isSubmitting}
              autoComplete="postal-code"
            />

            <Field
              name="codeOfConduct"
              label="I have read the Code of Conduct"
              component={Checkbox}
              disabled={isSubmitting}
            />

            <Field
              name="communityGuidelines"
              label="I have read the Community Guideliens"
              component={Checkbox}
              disabled={isSubmitting}
            />
          </div>

          {errorMessage && <Alert type="error">{errorMessage}</Alert>}

          <p>
            The information we collect is to help us personalize your experience on our Slack
            community. We do not sell your information to anyone.
          </p>
          <Button
            className={styles.topMargin}
            type="submit"
            theme="secondary"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
