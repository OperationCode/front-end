import React from 'react';
import { string, func, shape } from 'prop-types';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import Button from 'components/Button/Button';
import Form from 'components/Form/Form';
import Input from 'components/Form/Input/Input';
import Alert from 'components/Alert/Alert';
import { validationErrorMessages } from 'common/constants/messages';
import { getServerErrorMessage } from 'common/utils/api-utils';
import { minimumPasswordLength } from 'common/constants/validations';
import { isMinPasswordStrength } from 'common/utils/validator-utils';
import styles from './ChangePasswordForm.css';

const passwordResetSubmitSchema = Yup.object().shape({
  newPassword1: Yup.string()
    .required(validationErrorMessages.required)
    .min(minimumPasswordLength, validationErrorMessages.length(minimumPasswordLength))
    .test('password-strength', validationErrorMessages.password, isMinPasswordStrength),
  newPassword2: Yup.string()
    .required(validationErrorMessages.required)
    .oneOf([Yup.ref('newPassword1')], validationErrorMessages.passwordMatch),
});

/**
 * Form component used for changing a password either during a password reset
 * or standard change password request.
 */
export default class ChangePasswordForm extends React.Component {
  static propTypes = {
    onSubmit: func.isRequired,
    onSuccess: func.isRequired,
    initialValues: shape({
      email: string,
    }),
  };

  static defaultProps = {
    initialValues: {
      newPassword1: '',
      newPassword2: '',
    },
  };

  state = {
    errorMessage: '',
  };

  handleSubmit = async (values, actions) => {
    const { onSubmit, onSuccess } = this.props;
    try {
      await onSubmit(values);
      actions.setSubmitting(false);
      actions.resetForm();

      await onSuccess();
    } catch (error) {
      actions.setSubmitting(false);
      this.setState({ errorMessage: getServerErrorMessage(error) });
    }
  };

  render() {
    const { props, state } = this;

    return (
      <Formik
        initialValues={props.initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={passwordResetSubmitSchema}
      >
        {({ isSubmitting }) => (
          <Form className={styles.PasswordResetSubmitForm}>
            <div className={styles.row}>
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

              {state.errorMessage && <Alert type="error">{state.errorMessage}</Alert>}

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
