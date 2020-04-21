/* eslint-disable unicorn/prevent-abbreviations */
import React, { useState } from 'react';
import { arrayOf, func, object } from 'prop-types';
import noop from 'lodash/noop';
import { Formik } from 'formik';
import { validStep } from 'common/constants/custom-props';
import { MULTI_STEP_STEP_BUTTON, MULTI_STEP_SUBMIT_BUTTON } from 'common/constants/testIDs';
import Button from 'components/Button/Button';
import Form from 'components/Form/Form';
import Alert from 'components/Alert/Alert';
import ProgressIndicator from 'components/ProgressIndicator/ProgressIndicator';
import styles from './MultiStepForm.module.css';

MultiStepForm.propTypes = {
  // initialValues must be object where entire form's shape is described
  initialValues: object.isRequired,

  getErrorMessage: func.isRequired,
  onEachStepSubmit: func,
  onFinalSubmit: func.isRequired, // to be considered onSuccess
  steps: arrayOf(validStep).isRequired,
};

MultiStepForm.defaultProps = {
  onEachStepSubmit: noop,
};

export function MultiStepForm({
  steps,
  initialValues,
  onEachStepSubmit,
  onFinalSubmit,
  getErrorMessage,
}) {
  const [state, setState] = useState({
    errorMessage: '',
    stepNumber: 0,
  });

  const { errorMessage, stepNumber } = state;

  const isLastStep = () => {
    return stepNumber === steps.length - 1;
  };

  // We assume this method cannot be called on the last step
  const showNextStep = ({ setFieldTouched }) => {
    // TODO: Only untouch if value is '' or []
    const nextStepFieldNames = Object.keys(steps[stepNumber + 1].initialValues);
    nextStepFieldNames.forEach(fieldName => setFieldTouched(fieldName, false));
    setState(prevState => ({ ...prevState, stepNumber: prevState.stepNumber + 1 }));
  };

  // We assume this method cannot be called on the first step
  const showPreviousStep = ({ setFieldTouched }) => {
    // TODO: Only untouch if value is '' or []
    const previousStepFieldNames = Object.keys(steps[stepNumber - 1].initialValues);
    previousStepFieldNames.forEach(fieldName => setFieldTouched(fieldName, false));

    setState(prevState => ({ ...prevState, stepNumber: prevState.stepNumber - 1 }));
  };

  const handleError = error => {
    setState(prevState => ({ ...prevState, errorMessage: getErrorMessage(error) }));
  };

  const handleSubmit = async (values, formikBag) => {
    if (errorMessage) {
      // reset error message each submit
      setState(prevState => ({ ...prevState, errorMessage: '' }));
    }

    try {
      await onEachStepSubmit(values);

      const currentStepSubmitHandler = steps[stepNumber].submitHandler;
      await currentStepSubmitHandler(values);

      if (isLastStep()) {
        await onFinalSubmit(values);
        formikBag.setSubmitting(false);
        formikBag.resetForm();
      } else {
        formikBag.setSubmitting(false);
        showNextStep(formikBag);
      }
    } catch (error) {
      formikBag.setSubmitting(false);
      handleError(error);
    }
  };

  const CurrentStep = steps[stepNumber];
  const isFirstStep = stepNumber === 0;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CurrentStep.validationSchema}
      onSubmit={handleSubmit}
      render={formikBag => (
        <Form className={styles.MultiStepForm} onSubmit={formikBag.handleSubmit}>
          <h3 className={styles.centerAligned}>{CurrentStep.title}</h3>

          <ProgressIndicator stepNumber={stepNumber} totalSteps={steps.length} />

          <CurrentStep {...formikBag} />

          <div className={styles.errorMessage}>
            {errorMessage && <Alert type="error">{errorMessage}</Alert>}
          </div>

          <div className={styles.buttonGrouping}>
            {!isFirstStep && (
              <Button
                theme="secondary"
                disabled={formikBag.isSubmitting}
                onClick={() => showPreviousStep(formikBag)}
                data-testid="Previous Step Button"
              >
                ← Previous
              </Button>
            )}

            {isLastStep() ? (
              <Button
                type="submit"
                theme="secondary"
                disabled={formikBag.isSubmitting}
                data-testid={MULTI_STEP_SUBMIT_BUTTON}
              >
                Submit ✓
              </Button>
            ) : (
              <Button
                type="submit"
                theme="secondary"
                disabled={formikBag.isSubmitting}
                fullWidth={isFirstStep}
                data-testid={MULTI_STEP_STEP_BUTTON}
              >
                Next →
              </Button>
            )}
          </div>
        </Form>
      )}
    />
  );
}

export default MultiStepForm;
