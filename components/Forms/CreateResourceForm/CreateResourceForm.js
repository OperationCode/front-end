import React from 'react';
import { func, arrayOf, shape, string, number } from 'prop-types';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { createResource } from 'common/constants/api';
import { getServerErrorMessage } from 'common/utils/api-utils';
import { validationErrorMessages } from 'common/constants/messages';
import Button from 'components/Buttons/Button/Button';
import Form from 'components/Form/Form';
import Input from 'components/Form/Input/Input';
import Select from 'components/Form/Select/Select';
import styles from './CreateResourceForm.module.css';

// This exists only because we don't have a radio component and I wanna get this done quickly!
// TODO: Make radio input component
const free = { value: 'true', label: 'Free' };
const paid = { value: 'false', label: 'Paid' };

const costOptions = [free, paid];

const validationSchema = Yup.object().shape({
  name: Yup.string().required(validationErrorMessages.required).default(''),
  url: Yup.string().required(validationErrorMessages.required).default(''),
  category: Yup.string().required(validationErrorMessages.required).default(''),
  languages: Yup.array().default(['']),
  cost: Yup.string().default(free.value),
  notes: Yup.string().default(''),
});

CreateResourceForm.propTypes = {
  categories: arrayOf(shape({ name: string, id: number })).isRequired,
  languages: arrayOf(shape({ name: string, id: number })).isRequired,
  onSuccess: func.isRequired,
  onFailure: func.isRequired,
};

function CreateResourceForm({ categories, languages, onSuccess, onFailure }) {
  const initialValues = React.useMemo(() => validationSchema.cast(), []);

  const categoryOptions = categories.map(({ name }) => ({
    value: name.toLowerCase(),
    label: name,
  }));

  const languageOptions = languages.map(({ name }) => ({
    value: name.toLowerCase(),
    label: name,
  }));

  const handleSubmit = async ({ cost, ...rest }, actions) => {
    const values = { ...rest, free: cost === free.value };

    try {
      await createResource(values);

      actions.setSubmitting(false);
      actions.resetForm();

      onSuccess();
    } catch (error) {
      actions.setSubmitting(false);

      onFailure(getServerErrorMessage(error));
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form className={styles.CreateResourceForm}>
          <Field
            type="text"
            name="name"
            label="Name*"
            placeholder="What is this resource called?"
            component={Input}
            disabled={isSubmitting}
            required
          />

          <Field
            type="url"
            name="url"
            label="URL*"
            placeholder="Where can one access this resource?"
            component={Input}
            disabled={isSubmitting}
            required
          />

          <Field
            name="category"
            label="Category*"
            placeholder="What category best applies to this resource?"
            options={categoryOptions}
            component={Select}
            isDisabled={isSubmitting}
            required
          />

          <Field
            name="languages"
            label="Programming language(s)"
            placeholder="What language or languages are involved?"
            options={languageOptions}
            component={Select}
            isDisabled={isSubmitting}
            required
          />

          <Field
            name="cost"
            label="Cost*"
            placeholder="Is this resource free or paid?"
            options={costOptions}
            component={Select}
            isDisabled={isSubmitting}
            required
          />

          <Field
            type="text"
            name="notes"
            label="Notes"
            placeholder="Anything worth noting regarding this resource?"
            component={Input}
            disabled={isSubmitting}
            required
          />

          <Button
            className={styles.submitButton}
            type="submit"
            theme="secondary"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default CreateResourceForm;
