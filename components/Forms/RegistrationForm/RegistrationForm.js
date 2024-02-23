import { useState } from 'react';
import { func, number, oneOfType, shape, string, boolean } from 'prop-types';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import noop from 'lodash/noop';
import { createUser } from 'common/constants/api';
import { getServerErrorMessage } from 'common/utils/api-utils';
import { validationErrorMessages } from 'common/constants/messages';
import { capitalizeFirstLetter } from 'common/utils/string-utils';
import { codeOfConduct, slackGuidelines } from 'common/constants/urls';
import Button from 'components/Buttons/Button/Button';
import Checkbox from 'components/Form/Checkbox/Checkbox';
import Form from 'components/Form/Form';
import Input from 'components/Form/Input/Input';
import Alert from 'components/Alert/Alert';
import Link from 'next/link';
import OutboundLink from 'components/OutboundLink/OutboundLink';

export const PASSWORD_FOR_EVERYBODY = 'nOnEeDfOrP@ssw0rd!';

const defaultValues = {
  email: '',
  'confirm-email': '',
  password: PASSWORD_FOR_EVERYBODY,
  'confirm-password': PASSWORD_FOR_EVERYBODY,
  firstName: '',
  lastName: '',
  zipcode: '',
  codeOfConduct: false,
  slackGuidelines: false,
};

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
  password: Yup.string().required(validationErrorMessages.required),
  'confirm-password': Yup.string()
    .required(validationErrorMessages.required)
    .oneOf([Yup.ref('password')], validationErrorMessages.passwordsMatch),
  firstName: Yup.string().trim().required(validationErrorMessages.required),
  lastName: Yup.string().trim().required(validationErrorMessages.required),
  zipcode: Yup.string().trim().required(validationErrorMessages.required),
  codeOfConduct: Yup.boolean().oneOf([true], validationErrorMessages.codeOfConduct),
  slackGuidelines: Yup.boolean().oneOf([true], validationErrorMessages.slackGuidelines),
});

RegistrationForm.propTypes = {
  onSubmit: func,
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
    slackGuidelines: boolean,
  }),
};

RegistrationForm.defaultProps = {
  onSubmit: noop,
  initialValues: defaultValues,
};

function RegistrationForm({ initialValues, onSubmit, onSuccess }) {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (values, actions) => {
    try {
      onSubmit();
      const { token } = await createUser(values);
      await onSuccess({ user: values, token });
      actions.setSubmitting(false);
      actions.resetForm({ values: defaultValues });
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
        <Form className="flex flex-col items-center w-full">
          <div className="max-w-xl px-4">
            <p className="pb-4">
              We work closely with military veterans, service members, and spouses who are
              passionate about transitioning into the tech industry. We work with over 7,000 members
              who are all working towards relevant goals on Slack and in-person meet-ups. Membership
              is free! Unfamiliar with Slack?{` `}
              <Link href="/slack_guide">
                <a>Learn how to use it!</a>
              </Link>
            </p>
          </div>

          <div className="flex flex-col justify-between max-w-md">
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
              className="hidden"
              type="password"
              name="password"
              label="Password*"
              component={Input}
              disabled={isSubmitting}
              autoComplete="new-password"
            />

            <Field
              className="hidden"
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
              type="checkbox"
              name="codeOfConduct"
              label={
                <span>
                  I have read and agree to&nbsp;
                  <OutboundLink
                    hasIcon
                    href={codeOfConduct}
                    analyticsEventLabel="Registration CoC Checkbox Link"
                  >
                    Operation Code&apos;s Code of Conduct.
                  </OutboundLink>
                  *
                </span>
              }
              component={Checkbox}
              disabled={isSubmitting}
            />

            <Field
              type="checkbox"
              name="slackGuidelines"
              label={
                <span>
                  I have read and agree to&nbsp;
                  <OutboundLink
                    hasIcon
                    href={slackGuidelines}
                    analyticsEventLabel="Registration Slack Guidelines Checkbox Link"
                  >
                    Operation Code&apos;s Slack Guidelines.
                  </OutboundLink>
                  *
                </span>
              }
              component={Checkbox}
              disabled={isSubmitting}
            />
          </div>

          {errorMessage && <Alert type="error">{errorMessage}</Alert>}

          <div className="max-w-md px-3 pt-1">
            <Button type="submit" theme="secondary" disabled={isSubmitting}>
              Submit
            </Button>
            <p className="pt-5 text-xs">
              The demographic information you provide, helps us understand our community needs,
              ensure diversity, and provide specific resources to reach our mission. Thank you in
              advance for providing honest answers.&nbsp;
              <span className="font-bold">We do not sell your information to anyone.</span>
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
