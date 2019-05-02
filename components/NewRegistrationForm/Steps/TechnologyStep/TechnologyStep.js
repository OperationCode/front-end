import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import * as Yup from 'yup';
import { validationErrorMessages } from 'common/constants/messages';
import Input from 'components/Form/Input/Input';
import styles from './TechnologyStep.css';

class TechnologyStep extends React.Component {
  static propTypes = {
    isSubmitting: PropTypes.bool,
  };

  static defaultProps = {
    isSubmitting: false,
  };

  static validationSchema = Yup.object().shape({
    language: Yup.string().required(validationErrorMessages.required),
  });

  static initialValues = {
    language: '',
  };

  static submitHandler = values => {
    console.log('Submit personal details step!');
    console.log('values so far:', values);
    // await updateUser(values);
  };

  render() {
    const { isSubmitting } = this.props;

    return (
      <>
        <h2 className={styles.row}>Technology Interests</h2>

        <div className={styles.row}>
          <Field
            type="text"
            name="language"
            label="Language Of Choice*"
            component={Input}
            disabled={isSubmitting}
          />
        </div>
      </>
    );
  }
}

export default TechnologyStep;
