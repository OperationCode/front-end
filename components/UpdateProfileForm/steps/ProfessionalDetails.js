import React from 'react';
import { bool } from 'prop-types';
import { Field } from 'formik';
import * as Yup from 'yup';
import { updateUser } from 'common/constants/api';
import { validationErrorMessages } from 'common/constants/messages';
import Input from 'components/Form/Input/Input';
import Select from 'components/Form/Select/Select';
import styles from './_steps.css';

class ProfessionalDetails extends React.Component {
  static propTypes = {
    isSubmitting: bool,
  };

  static defaultProps = {
    isSubmitting: false,
  };

  static title = 'Professional Details';

  static validationSchema = Yup.object().shape({
    employmentStatus: Yup.string()
      .nullable()
      .required(validationErrorMessages.required),
    companyName: Yup.string().nullable(),
    companyRole: Yup.string().nullable(),
  });

  static initialValues = {
    employmentStatus: '',
    companyName: '',
    companyRole: '',
  };

  static submitHandler = async values => {
    await updateUser(values);
  };

  render() {
    const { isSubmitting } = this.props;

    return (
      <>
        <div className={styles.row}>
          <Field
            className={styles.fullWidth}
            name="employmentStatus"
            label="Employment Status*"
            component={Select}
            options={[
              {
                value: 'fulltime',
                label: 'Employed Full-Time',
              },
              {
                value: 'parttime',
                label: 'Employed Part-Time',
              },
              {
                value: 'unemployed',
                label: 'Currently Unemployed',
              },
            ]}
            disabled={isSubmitting}
          />

          <Field
            type="text"
            name="companyName"
            label="Company Name"
            component={Input}
            disabled={isSubmitting}
          />

          <Field
            type="text"
            name="companyRole"
            label="Company Role"
            component={Input}
            disabled={isSubmitting}
          />
        </div>
      </>
    );
  }
}

export default ProfessionalDetails;
