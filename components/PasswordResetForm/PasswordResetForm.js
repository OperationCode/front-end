import React from 'react';
import { string, func, shape } from 'prop-types';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import Button from 'components/Button/Button';
import Form from 'components/Form/Form';
import Input from 'components/Form/Input/Input';
import Alert from 'components/Alert/Alert';
import { validationErrorMessages } from 'common/constants/messages';
import { getErrorMessage } from 'common/utils/api-utils';
import styles from './PasswordResetForm.css';

const passwordResetSchema = Yup.object().shape({
  email: Yup.string()
    .required(validationErrorMessages.required)
    .email(validationErrorMessages.email),
});

export default class PasswordResetForm extends React.Component {
  static propTypes = {
    passwordReset: func.isRequired,
    onSuccess: func.isRequired,
    initialValues: shape({
      email: string,
    }),
  };

  static defaultProps = {
    initialValues: {
      email: '',
    },
  };

  state = {
    errorMessage: '',
  };

  handleSubmit = async ({ email }, actions) => {
    // debugger;
    const { passwordReset, onSuccess } = this.props;
    try {
      const { detail } = await passwordReset({ email });
      actions.setSubmitting(false);
      actions.resetForm();

      await onSuccess({ detail });
    } catch (error) {
      actions.setSubmitting(false);

      this.setState({ errorMessage: getErrorMessage(error) });
    }
  };

  render() {
    const { props, state } = this;

    return (
      <Formik
        initialValues={props.initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={passwordResetSchema}
      >
        {({ isSubmitting }) => (
          <Form className={styles.PasswordResetForm}>
            <div className={styles.row}>
              <Field
                type="email"
                name="email"
                label="Email*"
                component={Input}
                disabled={isSubmitting}
                autoComplete="username email"
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
