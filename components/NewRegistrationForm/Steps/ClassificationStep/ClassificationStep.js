import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import * as Yup from 'yup';
import { validationErrorMessages } from 'common/constants/messages';
import styles from './ClassificationStep.css';

class ClassificationStep extends React.Component {
  static propTypes = {
    isSubmitting: PropTypes.bool,
  };

  static defaultProps = {
    isSubmitting: false,
  };

  static validationSchema = Yup.object().shape({
    classification: Yup.mixed()
      .oneOf(['civilian', 'spouse', 'military'])
      .required(validationErrorMessages.required),
  });

  static initialValues = {
    classification: '',
  };

  static submitHandler = async values => {
    console.log('Submit classification step!');
    console.log('values so far:', values);
    // await updateUser(values);
  };

  render() {
    const { isSubmitting } = this.props;

    return (
      <>
        <h2 className={styles.row}>How do you classify yourself?</h2>

        <div className={styles.row}>
          <Field
            name="classification"
            label="Classification*"
            component="select"
            disabled={isSubmitting}
          >
            <option value="" />
            <option value="civilian">Civilian</option>
            <option value="spouse">Spouse of Servicemember</option>
            <option value="military">Current/Prior Servicemember</option>
          </Field>
        </div>
      </>
    );
  }
}

export default ClassificationStep;
