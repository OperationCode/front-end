import { useState } from 'react';
import { string, func, shape } from 'prop-types';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@/components/Buttons/Button/Button';
import { Form } from '@/components/Form/Form';
import { Input } from '@/components/Form/Input/Input';
import { Alert } from '@/components/Alert/Alert';
import { validationErrorMessages } from '@/common/constants/messages';
import { getServerErrorMessage } from '@/common/utils/api-utils';

const defaultValues = { email: '' };

const passwordResetSchema = Yup.object().shape({
  email: Yup.string()
    .required(validationErrorMessages.required)
    .email(validationErrorMessages.email),
});

PasswordResetForm.propTypes = {
  passwordReset: func.isRequired,
  onSuccess: func.isRequired,
  initialValues: shape({
    email: string,
  }),
};

PasswordResetForm.defaultProps = {
  initialValues: defaultValues,
};

export function PasswordResetForm({ initialValues, onSuccess, passwordReset }) {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async ({ email }, actions) => {
    try {
      const { detail } = await passwordReset({ email });
      actions.setSubmitting(false);
      actions.resetForm({ values: defaultValues });

      await onSuccess({ detail });
    } catch (error) {
      actions.setSubmitting(false);

      setErrorMessage(getServerErrorMessage(error));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={passwordResetSchema}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <div className="flex flex-wrap justify-center">
            <Field
              type="email"
              name="email"
              label="Email*"
              component={Input}
              disabled={isSubmitting}
              autoComplete="username email"
            />
          </div>

          <div className="flex flex-wrap justify-center">
            {errorMessage && <Alert type="error">{errorMessage}</Alert>}
          </div>

          <div className="flex flex-wrap justify-center">
            <Button className="mt-4" type="submit" theme="secondary" disabled={isSubmitting}>
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
