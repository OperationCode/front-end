import React from 'react';
import { bool } from 'prop-types';
import { Field } from 'formik';
import * as Yup from 'yup';
import { updateUser } from 'common/constants/api';
import { mapStringsToSelectOptions } from '@innocuous/functions';
import Select from 'components/Form/Select/Select';
import styles from './_steps.module.css';

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

Technology.propTypes = {
  isSubmitting: bool,
};

Technology.defaultProps = {
  isSubmitting: false,
};

Technology.title = 'Technology';

Technology.validationSchema = Yup.object().shape({
  programmingLanguages: Yup.array().of(Yup.string()),
  disciplines: Yup.array().of(Yup.string()),
});

Technology.initialValues = {
  programmingLanguages: [],
  disciplines: [],
};

Technology.submitHandler = async values => {
  await updateUser(values);
};

function Technology({ isSubmitting }) {
  const programmingLanguageOptions = [...mapStringsToSelectOptions(programmingLanguages)];
  const disciplineOptions = [...mapStringsToSelectOptions(disciplines)];

  return (
    <>
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

export default Technology;
