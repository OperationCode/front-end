import React from 'react';
import { bool, number } from 'prop-types';
import { Field } from 'formik';
import * as Yup from 'yup';
import { updateUser } from 'common/constants/api';
import { mapStringsToSelectOptions } from '@innocuous/functions';
import Select from 'components/Form/Select/Select';
import ProgressIndicator from 'components/ProgressIndicator/ProgressIndicator';
import styles from './_steps.css';

const programmingLanguages = [
  'JavaScript',
  'Python',
  'Java',
  'C# / .NET',
  'Ruby',
  'C',
  'Go',
  'Swift',
  'Kotlin',
];

const disciplines = [
  'Web Developer',
  'Front-End Developer',
  'Back-End Developer',
  'Full-Stack Developer',
  'Mobile: iOS',
  'Mobile: Android',
  'Information Technology / System Administration',
  'Cyber Security',
  'Data Science',
  'Designer',
  'Product Management',
  'Agile / Scrum Management',
];

class Technology extends React.Component {
  static propTypes = {
    isSubmitting: bool,
    stepNumber: number,
    totalSteps: number,
  };

  static defaultProps = {
    isSubmitting: false,
    stepNumber: 0,
    totalSteps: 0,
  };

  static validationSchema = Yup.object().shape({
    programmingLanguages: Yup.array().of(Yup.string()),
    disciplines: Yup.array().of(Yup.string()),
  });

  static initialValues = {
    programmingLanguages: [],
    disciplines: [],
  };

  static submitHandler = async values => {
    await updateUser(values);
  };

  render() {
    const { isSubmitting, stepNumber, totalSteps } = this.props;

    const programmingLanguageOptions = [...mapStringsToSelectOptions(programmingLanguages)];
    const disciplineOptions = [...mapStringsToSelectOptions(disciplines)];

    return (
      <>
        <h3 className={styles.row}>Technology</h3>

        <ProgressIndicator stepNumber={stepNumber} totalSteps={totalSteps} />

        <div className={styles.row}>
          <Field
            className={styles.fullWidth}
            name="programmingLanguages"
            label="Programming Languages That Interest You"
            component={Select}
            isMulti
            options={[
              ...programmingLanguageOptions,
              // TODO: investigate creatable
            ]}
            disabled={isSubmitting}
            placeholder="Select at least one..."
          />
        </div>

        <div className={styles.row}>
          <Field
            className={styles.fullWidth}
            name="disciplines"
            label="Disciplines That Interest You"
            component={Select}
            isMulti
            options={[
              ...disciplineOptions,
              // TODO: investigate creatable
            ]}
            disabled={isSubmitting}
            placeholder="Select at least one..."
          />
        </div>
      </>
    );
  }
}

export default Technology;
