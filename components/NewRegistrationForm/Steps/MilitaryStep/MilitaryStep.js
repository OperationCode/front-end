import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import * as Yup from 'yup';
import { validationErrorMessages } from 'common/constants/messages';
import styles from './MilitaryStep.css';

class MilitaryStep extends React.Component {
  static propTypes = {
    isSubmitting: PropTypes.bool,
  };

  static defaultProps = {
    isSubmitting: false,
  };

  static validationSchema = Yup.object().shape({
    branch: Yup.mixed()
      .oneOf(['army', 'navy', 'coast-guard', 'marine-corps', 'air-force'])
      .required(validationErrorMessages.required),
  });

  static initialValues = {
    branch: '',
  };

  static submitHandler = async values => {
    console.log('Submit initial step!');
    console.log('values so far:', values);
    // await updateUser(values);
  };

  render() {
    const { isSubmitting } = this.props;

    return (
      <>
        <h2 className={styles.row}>Service Background</h2>

        <div className={styles.row}>
          <Field
            name="branch"
            label="Branch of Service*"
            component="select"
            disabled={isSubmitting}
          >
            <option value="" />
            <option value="army">Army</option>
            <option value="navy">Navy</option>
            <option value="air-force">Air Force</option>
            <option value="marine-corps">Marine Corps</option>
            <option value="coast-guard">Coast Guard</option>
          </Field>
        </div>
      </>
    );
  }
}

export default MilitaryStep;
