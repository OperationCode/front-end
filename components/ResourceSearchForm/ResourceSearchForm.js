import React from 'react';
import { Field, Formik, Form } from 'formik';
import Button from 'components/Buttons/Button/Button';
import Input from 'components/Form/Input/Input';
import Select from 'components/Form/Select/Select';
import omit from 'lodash/omit';
import {
  RESOURCE_SEARCH,
  RESOURCE_SEARCH_BUTTON,
  RESOURCE_RESET_BUTTON,
} from 'common/constants/testIDs';
import styles from 'styles/resources.module.css';
import { string, func, shape, array } from 'prop-types';

ResourceSearchForm.propTypes = {
  setIsLoading: func.isRequired,
  updateQuery: func.isRequired,
  setErrorMessage: func.isRequired,
  allLanguages: array.isRequired,
  allCategories: array.isRequired,
  fields: shape({
    languages: string,
    category: string,
    paid: string,
    q: string,
  }).isRequired,
};

function ResourceSearchForm({
  fields,
  setIsLoading,
  updateQuery,
  setErrorMessage,
  allCategories,
  allLanguages,
}) {
  const initialValues = {
    category: fields.category || '',
    q: fields.q || '',
    languages: Array.isArray(fields.languages)
      ? fields.languages
      : [fields.languages].filter(Boolean),
    paid: fields.paid || '',
  };

  const costOptions = [
    { value: 'true', label: 'Paid' },
    { value: 'false', label: 'Free' },
  ];

  const handleSubmit = (values, actions) => {
    setIsLoading(true);
    const emptyQueryParameters = Object.entries(values).filter(
      item => item[1] === null || !item[1].length,
    );
    const activeParameters = omit(
      values,
      emptyQueryParameters.map(parameter => parameter[0]),
    );

    updateQuery(activeParameters);
    setTimeout(() => {
      actions.setSubmitting(false);
    }, 500);
  };

  const handleReset = () => {
    setErrorMessage(null);
    updateQuery('');
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
        actions.setSubmitting(true);
      }}
    >
      {({ isSubmitting }) => (
        <Form role="search" onReset={handleReset}>
          <Field
            hasValidationStyling={false}
            data-testid={RESOURCE_SEARCH}
            disabled={isSubmitting}
            type="search"
            name="q"
            label="Search Keywords"
            component={Input}
          />

          <div className={styles.formContainer}>
            <div className={styles.selectColumn}>
              <Field
                hasValidationStyling={false}
                isDisabled={isSubmitting}
                placeholder="Start typing a category..."
                label="By Category"
                name="category"
                options={allCategories}
                component={Select}
              />
            </div>

            <div className={styles.selectColumn}>
              <Field
                hasValidationStyling={false}
                isDisabled={isSubmitting}
                placeholder="Resource cost..."
                label="By Cost"
                name="paid"
                options={costOptions}
                component={Select}
              />
            </div>

            <div className={styles.selectColumn}>
              <Field
                hasValidationStyling={false}
                isDisabled={isSubmitting}
                placeholder="Start typing a language..."
                isMulti
                label="By Language(s)"
                name="languages"
                options={allLanguages}
                component={Select}
              />
            </div>
          </div>

          <div className={styles.buttonGroup}>
            <Button
              className={styles.buttonSingle}
              data-testid={RESOURCE_SEARCH_BUTTON}
              disabled={isSubmitting}
              theme="secondary"
              type="submit"
            >
              Search
            </Button>

            <Button
              className={styles.buttonSingle}
              data-testid={RESOURCE_RESET_BUTTON}
              disabled={isSubmitting}
              theme="secondary"
              type="reset"
            >
              Reset
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ResourceSearchForm;
