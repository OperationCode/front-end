import React, { useState } from 'react';
import { func, number, oneOfType, shape, string } from 'prop-types';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { getServerErrorMessage } from 'common/utils/api-utils';
import { validationErrorMessages } from 'common/constants/messages';
import { capitalizeFirstLetter } from 'common/utils/string-utils';
import Button from 'components/Buttons/Button/Button';
import Form from 'components/Form/Form';
import Input from 'components/Form/Input/Input';
import Alert from 'components/Alert/Alert';
import styles from './SurveyForm.module.css';

/**
 * Zipcode issues solved via a trim check from Yup.
 *
 * This may seem counter-intuitive, but it's difficult to get a zipcode regex correctly.
 * See https://stackoverflow.com/questions/578406/what-is-the-ultimate-postal-code-and-zip-regex
 * for more info
 *
 */
const surveySchema = Yup.object().shape({
  email: Yup.string()
    .required(validationErrorMessages.required)
    .email(validationErrorMessages.email),
  firstName: Yup.string().trim().required(validationErrorMessages.required),
  lastName: Yup.string().trim().required(validationErrorMessages.required),
  zipcode: Yup.string().trim().required(validationErrorMessages.required),
});

SurveyForm.propTypes = {
  onSuccess: func,
  initialValues: shape({
    email: string,
    firstName: string,
    lastName: string,
    zipcode: oneOfType([string, number]),
  }),
};

SurveyForm.defaultProps = {
  onSuccess: undefined,
  initialValues: {
    email: '',
    firstName: '',
    lastName: '',
    zipcode: '',
  },
};

function SurveyForm({ initialValues, onSuccess }) {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (values, actions) => {
    try {
      // TODO: Need backend api to accept survey values.
      // const { status } = await submitSurvey(values);
      if (typeof onSuccess === 'function') {
        await onSuccess();
      }

      actions.setSubmitting(false);
      actions.resetForm();
    } catch (error) {
      actions.setSubmitting(false);

      const { data } = error.response;
      if (data) {
        const newErrorMessage = Object.keys(data)
          .map(key => {
            const fieldName = capitalizeFirstLetter(key);
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
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={surveySchema}>
      {({ isSubmitting }) => (
        <Form className={styles.SurveyForm}>
          <p>
            Thank you for your interest in Operation Code! Please fill out the form below so we can
            stay in touch!
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
          </div>

          {errorMessage && <Alert type="error">{errorMessage}</Alert>}
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

export default SurveyForm;
