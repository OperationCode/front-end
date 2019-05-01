import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import * as Yup from 'yup';
import { validationErrorMessages } from 'common/constants/messages';
import Input from 'components/Form/Input/Input';
import styles from './PersonalDetailsStep.css';

class PersonalDetailsSteps extends React.Component {
  static propTypes = {
    isSubmitting: PropTypes.bool,
  };

  static defaultProps = {
    isSubmitting: false,
  };

  static validationSchema = Yup.object().shape({
    firstName: Yup.string().required(validationErrorMessages.required),
    lastName: Yup.string().required(validationErrorMessages.required),
  });

  static initialValues = {
    firstName: '',
    lastName: '',
  };

  static submitHandler = values => {
    console.log('Submit personal details step!');
    console.log('values so far:', values);
    // await updateUser(values);
  };

  static getNumberOfStepSkips = () => 0;

  render() {
    const { isSubmitting } = this.props;

    return (
      <>
        <h2 className={styles.row}>Personal Details</h2>

        <div className={styles.row}>
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
        </div>
      </>
    );
  }
}

export default PersonalDetailsSteps;
