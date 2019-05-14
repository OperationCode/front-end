import React from 'react';
import { bool } from 'prop-types';
import { Field } from 'formik';
import * as Yup from 'yup';
import { updateUser } from 'common/constants/api';
import { validationErrorMessages } from 'common/constants/messages';
import Input from 'components/Form/Input/Input';
import Select from 'components/Form/Select/Select';
import styles from './_steps.css';

class MilitaryDetails extends React.Component {
  static propTypes = {
    isSubmitting: bool,
  };

  static defaultProps = {
    isSubmitting: false,
  };

  static validationSchema = Yup.object().shape({
    // TODO: use when() on these
    branchOfService: Yup.string().required(validationErrorMessages.required),
    yearsOfService: Yup.number().required(validationErrorMessages.required),
    payGrade: Yup.string().required(validationErrorMessages.required),
  });

  static initialValues = {
    branchOfService: '',
    yearsOfService: '',
    payGrade: '',
  };

  static submitHandler = async values => {
    await updateUser(values);
  };

  render() {
    const { isSubmitting } = this.props;

    return (
      <>
        <h2 className={styles.row}>Military Details</h2>

        <div className={styles.row}>
          <Field
            className={styles.fullWidth}
            name="branchOfService"
            label="Branch Of Service*"
            component={Select}
            options={[
              {
                value: '',
                label: '-- Select One --',
              },
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
        </div>

        <div className={styles.row}>
          <Field
            type="number"
            name="yearsOfService"
            label="Years Of Service*"
            component={Input}
            disabled={isSubmitting}
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
}

export default MilitaryDetails;
