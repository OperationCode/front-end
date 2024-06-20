import { useState } from 'react';
import { string, func, shape } from 'prop-types';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { CHANGE_PASSWORD_FORM_ERROR } from 'common/constants/testIDs';
import { Button } from 'components/Buttons/Button/Button';
import { Form } from 'components/Form/Form';
import { Input } from 'components/Form/Input/Input';
import { Alert } from 'components/Alert/Alert';
import { validationErrorMessages } from 'common/constants/messages';
import { getServerErrorMessage } from 'common/utils/api-utils';
import { minimumPasswordLength } from 'common/constants/validations';
import { hasRequiredCharacters } from 'common/utils/validator-utils';

const defaultValues = {
  newPassword1: '',
  newPassword2: '',
};

const passwordResetSubmitSchema = Yup.object().shape({
  newPassword1: Yup.string()
    .required(validationErrorMessages.required)
    .min(minimumPasswordLength, validationErrorMessages.password)
    .test('password-strength', validationErrorMessages.password, hasRequiredCharacters),
  newPassword2: Yup.string()
    .required(validationErrorMessages.required)
    .oneOf([Yup.ref('newPassword1')], validationErrorMessages.passwordsMatch),
});

ChangePasswordForm.propTypes = {
  onSubmit: func.isRequired,
  onSuccess: func.isRequired,
  initialValues: shape({
    email: string,
  }),
};

ChangePasswordForm.defaultProps = {
  initialValues: defaultValues,
};

/**
 * Form component used for changing a password either during a password reset
 * or standard change password request.
 */
export function ChangePasswordForm({ onSubmit, onSuccess, initialValues }) {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (values, actions) => {
    try {
      await onSubmit(values);
      actions.setSubmitting(false);
      actions.resetForm({ values: defaultValues });

      await onSuccess();
    } catch (error) {
      actions.setSubmitting(false);
      setErrorMessage(getServerErrorMessage(error));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={passwordResetSubmitSchema}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <div className="flex flex-col items-center">
            <Field
              type="password"
              name="newPassword1"
              label="Password*"
              component={Input}
              disabled={isSubmitting}
              autoComplete="new-password"
            />

            <Field
              type="password"
              name="newPassword2"
              label="Confirm Password*"
              component={Input}
              disabled={isSubmitting}
              autoComplete="new-password"
            />

            {errorMessage && (
              <Alert data-testid={CHANGE_PASSWORD_FORM_ERROR} type="error">
                {errorMessage}
              </Alert>
            )}

            <Button className="mt-4" type="submit" theme="secondary" disabled={isSubmitting}>
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
