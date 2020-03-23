import React from 'react';
import { bool } from 'prop-types';
import { Field } from 'formik';
import * as Yup from 'yup';
import { updateUser } from 'common/constants/api';
import { validationErrorMessages } from 'common/constants/messages';
import Select from 'components/Form/Select/Select';
import styles from './_steps.module.css';

MilitaryStatus.propTypes = {
  isSubmitting: bool,
};

MilitaryStatus.defaultProps = {
  isSubmitting: false,
};

MilitaryStatus.title = 'Military Status';

MilitaryStatus.validationSchema = Yup.object().shape({
  militaryStatus: Yup.string().nullable().required(validationErrorMessages.required),
});

MilitaryStatus.initialValues = {
  militaryStatus: '',
};

MilitaryStatus.submitHandler = async values => {
  await updateUser(values);
};

function MilitaryStatus({ isSubmitting }) {
  return (
    <>
      <p>
        We welcome anyone to join Operation Code! Please note that many of our services are only for
        veterans or spouses.
      </p>
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

export default MilitaryStatus;
