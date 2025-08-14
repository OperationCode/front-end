import { useState } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { getServerErrorMessage } from 'common/utils/api-utils';
import { validationErrorMessages } from 'common/constants/messages';
import { codeOfConduct, slackGuidelines } from 'common/constants/urls';
import Button from 'components/Buttons/Button/Button';
import Checkbox from 'components/Form/Checkbox/Checkbox';
import Form from 'components/Form/Form';
import Input from 'components/Form/Input/Input';
import Alert from 'components/Alert/Alert';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import type { AxiosError } from 'axios';
import axios from 'axios';
import { InlineLoadingSpinner } from 'components/InlineLoadingSpinner';
import { REGISTRATION_FORM_INITIAL_SUBMIT_BUTTON } from 'common/constants/testIDs';

export interface RegistrationFormValues {
  email: string;
  'confirm-email': string;
  firstName: string;
  lastName: string;
  zipcode: string | number;
  codeOfConduct: boolean;
  slackGuidelines: boolean;
}

const defaultValues: RegistrationFormValues = {
  email: '',
  'confirm-email': '',
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
  firstName: Yup.string().trim().required(validationErrorMessages.required),
  lastName: Yup.string().trim().required(validationErrorMessages.required),
  zipcode: Yup.string().trim().required(validationErrorMessages.required),
  codeOfConduct: Yup.boolean().oneOf([true], validationErrorMessages.codeOfConduct),
  slackGuidelines: Yup.boolean().oneOf([true], validationErrorMessages.slackGuidelines),
});

interface RegistrationFormProps {
  initialValues?: RegistrationFormValues;
  onSubmit?: () => void;
  onSuccess: () => void;
}

export function RegistrationForm({
  initialValues = defaultValues,
  onSubmit,
  onSuccess,
}: RegistrationFormProps) {
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, actions) => {
        try {
          onSubmit?.();
          await axios.post('/api/registration/new', values);
          onSuccess();
        } catch (_error: unknown) {
          const axiosError = (_error as AxiosError).response?.data as
            | Record<string, string>
            | undefined;

          const axiosErrorMessage = axiosError?.message as string | undefined;

          if (axiosErrorMessage) {
            setErrorMessage(axiosErrorMessage);
          } else {
            setErrorMessage(getServerErrorMessage(_error));
          }
        } finally {
          actions.setSubmitting(false);
        }
      }}
      validationSchema={registrationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4 max-w-prose w-full px-4 !m-0">
          <Field
            type="email"
            name="email"
            label="Email*"
            component={Input}
            isDisabled={isSubmitting}
            autoComplete="username email"
          />

          <Field
            type="email"
            name="confirm-email"
            label="Confirm Email*"
            component={Input}
            isDisabled={isSubmitting}
            autoComplete="username email"
          />

          <Field
            className="hidden"
            type="password"
            name="password"
            label="Password*"
            component={Input}
            isDisabled={isSubmitting}
            autoComplete="new-password"
          />

          <Field
            className="hidden"
            type="password"
            name="confirm-password"
            label="Confirm Password*"
            component={Input}
            isDisabled={isSubmitting}
            autoComplete="new-password"
          />

          <Field
            type="text"
            name="firstName"
            label="First Name*"
            component={Input}
            isDisabled={isSubmitting}
            autoComplete="given-name"
          />

          <Field
            type="text"
            name="lastName"
            label="Last Name*"
            component={Input}
            isDisabled={isSubmitting}
            autoComplete="family-name"
          />

          <Field
            type="text"
            name="zipcode"
            label="Zipcode*"
            component={Input}
            isDisabled={isSubmitting}
            autoComplete="postal-code"
          />

          <Field
            type="checkbox"
            name="codeOfConduct"
            label={
              <>
                I have read and agree to{' '}
                <OutboundLink
                  hasIcon
                  href={codeOfConduct}
                  analyticsEventLabel="Registration CoC Checkbox Link"
                >
                  Operation Code&apos;s Code of Conduct.
                </OutboundLink>{' '}
                *
              </>
            }
            component={Checkbox}
            isDisabled={isSubmitting}
          />

          <Field
            type="checkbox"
            name="slackGuidelines"
            label={
              <>
                I have read and agree to{' '}
                <OutboundLink
                  hasIcon
                  href={slackGuidelines}
                  analyticsEventLabel="Registration Slack Guidelines Checkbox Link"
                >
                  Operation Code&apos;s Slack Community Guidelines.
                </OutboundLink>{' '}
                *
              </>
            }
            component={Checkbox}
            isDisabled={isSubmitting}
          />

          {errorMessage && <Alert type="error">{errorMessage}</Alert>}

          <Button
            type="submit"
            theme="secondary"
            className="w-full"
            disabled={isSubmitting}
            data-testid={REGISTRATION_FORM_INITIAL_SUBMIT_BUTTON}
          >
            <span className="flex items-center justify-center gap-x-2">
              {isSubmitting && <InlineLoadingSpinner />}
              <span className="mt-[0.325rem]">Submit ✓</span>
            </span>
          </Button>

          <aside className="text-xs mx-auto p-3 border border-dashed border-warning-deep bg-warning rounded-md">
            <p>
              The demographic information you provide, helps us understand our community needs,
              ensure diversity, and provide specific resources to reach our mission. Thank you in
              advance for providing honest answers.&nbsp;
              <span className="font-bold">We do not sell your information to anyone.</span>
            </p>
          </aside>
        </Form>
      )}
    </Formik>
  );
}
