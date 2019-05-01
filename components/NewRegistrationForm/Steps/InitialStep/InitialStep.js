import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import * as Yup from 'yup';
import { createUser } from 'common/constants/api';
import { validationErrorMessages } from 'common/constants/messages';
import { minimumPasswordLength } from 'common/constants/validations';
import { isMinPasswordStrength, isValidZipcode } from 'common/utils/validator-utils';
import Input from 'components/Form/Input/Input';
import styles from './InitialStep.css';

class InitialStep extends React.Component {
  static propTypes = {
    isSubmitting: PropTypes.bool,
  };

  static defaultProps = {
    isSubmitting: false,
  };

  static validationSchema = Yup.object().shape({
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
    zipcode: Yup.string()
      .required(validationErrorMessages.required)
      .test('zipcode', validationErrorMessages.zipcode, isValidZipcode),
  });

  static initialValues = {
    email: '',
    'confirm-email': '',
    password: '',
    'confirm-password': '',
    zipcode: '',
  };

  static submitHandler = async values => {
    console.log('Submit initial step!');
    console.log('values so far:', values);
    await createUser(values);
  };

  render() {
    const { isSubmitting } = this.props;

    return (
      <>
        <h2 className={styles.row}>User Information</h2>

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
            name="zipcode"
            label="Zipcode*"
            component={Input}
            disabled={isSubmitting}
            autoComplete="postal-code"
          />
        </div>
      </>
    );
  }
}

export default InitialStep;
