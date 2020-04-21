import React from 'react';
import { bool } from 'prop-types';
import { Field } from 'formik';
import * as Yup from 'yup';
import { updateUser } from 'common/constants/api';
import { validationErrorMessages } from 'common/constants/messages';
import Input from 'components/Form/Input/Input';
import Select from 'components/Form/Select/Select';
import styles from './_steps.module.css';

MilitaryDetails.propTypes = {
  isSubmitting: bool,
};

MilitaryDetails.defaultProps = {
  isSubmitting: false,
};

MilitaryDetails.title = 'Military Details';

MilitaryDetails.validationSchema = Yup.object().shape({
  // TODO: use when() on these
  branchOfService: Yup.string().nullable().required(validationErrorMessages.required),
  yearsOfService: Yup.number()
    .nullable()
    .positive('Enter a number between 1 and 40.')
    .lessThan(41, 'Enter a number between 1 and 40.')
    .required(validationErrorMessages.required),
  payGrade: Yup.string().nullable().required(validationErrorMessages.required),
});

MilitaryDetails.initialValues = {
  branchOfService: '',
  yearsOfService: '',
  payGrade: '',
};

MilitaryDetails.submitHandler = async values => {
  await updateUser(values);
};

function MilitaryDetails({ isSubmitting }) {
  return (
    <>
      <div className={styles.row}>
        <Field
          className={styles.fullWidth}
          name="branchOfService"
          label="Branch Of Service*"
          component={Select}
          options={[
            {
              value: 'army',
              label: 'Army / Army Reserves / Army National Guard',
            },
            {
              value: 'navy',
              label: 'Navy / Navy Reserves',
            },
            {
              value: 'marine',
              label: 'Marine Corps / Marine Corps Reserves',
            },
            {
              value: 'airforce',
              label: 'Air Force / Air Force Reserves / Air National Guard',
            },
            {
              value: 'coastguard',
              label: 'Coast Guard / Coast Guard Reserves',
            },
          ]}
          disabled={isSubmitting}
        />

        <Field
          type="number"
          name="yearsOfService"
          label="Years Of Service*"
          component={Input}
          disabled={isSubmitting}
          min="1"
          max="40"
        />

        <Field
          type="text"
          name="payGrade"
          label="Pay Grade*"
          component={Input}
          disabled={isSubmitting}
        />
      </div>
    </>
  );
}

export default MilitaryDetails;
