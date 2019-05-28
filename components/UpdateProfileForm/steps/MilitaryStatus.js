import React from 'react';
import { bool } from 'prop-types';
import { Field } from 'formik';
import * as Yup from 'yup';
import { updateUser } from 'common/constants/api';
import { validationErrorMessages } from 'common/constants/messages';
import Select from 'components/Form/Select/Select';
import styles from './_steps.css';

class MilitaryStatus extends React.Component {
  static propTypes = {
    isSubmitting: bool,
  };

  static defaultProps = {
    isSubmitting: false,
  };

  static validationSchema = Yup.object().shape({
    militaryStatus: Yup.string().required(validationErrorMessages.required),
  });

  static initialValues = {
    militaryStatus: '',
  };

  static submitHandler = async values => {
    await updateUser(values);
  };

  render() {
    const { isSubmitting } = this.props;

    return (
      <>
        <h2 className={styles.row}>Military Status</h2>

        <p>How do you classify yourself in regards to being part of the military?</p>

        <div className={styles.row}>
          <Field
            className={styles.fullWidth}
            name="militaryStatus"
            label="Military Status*"
            component={Select}
            instanceId="militaryStatus"
            options={[
              {
                value: 'civilian',
                label: 'Not Applicable',
              },
              {
                value: 'current',
                label: 'Currently Serving',
              },
              {
                value: 'veteran',
                label: 'Veteran',
              },
              {
                value: 'spouse',
                label: 'Spouse / Dependent',
              },
            ]}
            disabled={isSubmitting}
          />
        </div>
      </>
    );
  }
}

export default MilitaryStatus;
