/* eslint-disable unicorn/prevent-abbreviations */
import type { FunctionComponent } from 'react';
import { useState } from 'react';
import type { FormikHelpers, FormikProps } from 'formik';
import { Formik } from 'formik';
import type { AxiosError } from 'axios';
import type { ObjectSchema } from 'yup';
import {
  MULTI_STEP_STEP_BUTTON,
  MULTI_STEP_SUBMIT_BUTTON,
  MULTI_STEP_PREVIOUS_BUTTON,
} from 'common/constants/testIDs';
import Button from 'components/Buttons/Button/Button';
import Form from 'components/Form/Form';
import Alert from 'components/Alert/Alert';
import ProgressIndicator from 'components/ProgressIndicator/ProgressIndicator';

const InlineLoadingSpinner = () => (
  <span
    aria-hidden
    className="border-solid border-white border-4 !border-b-themePrimary rounded-[50%] h-5 w-5 box-border animate-spin group-hover:border-themeSecondary transition-colors"
  />
);

interface MultiStepFormProps<T> {
  initialValues: T;
  getErrorMessage: (error: AxiosError) => string;
  onEachStepSubmit?: (values: T) => Promise<void>;
  onFinalSubmit: (values: T) => Promise<void>;
  steps: (FunctionComponent<FormikProps<T>> & {
    title: string;
    initialValues: Partial<T>;
    submitHandler?: (values: Partial<T>) => Promise<void>;
    // eslint-disable-next-line @typescript-eslint/ban-types
    validationSchema: ObjectSchema<{}>;
  })[];
}

export function MultiStepForm<T extends Record<string, string | string[] | number | number[]>>({
  steps,
  initialValues,
  onEachStepSubmit,
  onFinalSubmit,
  getErrorMessage,
}: MultiStepFormProps<T>) {
  const [state, setState] = useState({
    errorMessage: '',
    stepNumber: 0,
  });

  const { errorMessage, stepNumber } = state;

  const isLastStep = () => {
    return stepNumber === steps.length - 1;
  };

  // We assume this method cannot be called on the last step
  const showNextStep = ({ setFieldTouched }: Pick<FormikHelpers<unknown>, 'setFieldTouched'>) => {
    // TODO: Only untouch if value is '' or []
    const nextStepFieldNames = Object.keys(steps[stepNumber + 1].initialValues);
    nextStepFieldNames.forEach(fieldName => setFieldTouched(fieldName, false));
    setState(prevState => ({ ...prevState, stepNumber: prevState.stepNumber + 1 }));
  };

  // We assume this method cannot be called on the first step
  const showPreviousStep = ({
    setFieldTouched,
  }: Pick<FormikHelpers<unknown>, 'setFieldTouched'>) => {
    // TODO: Only untouch if value is '' or []
    const previousStepFieldNames = Object.keys(steps[stepNumber - 1].initialValues);
    previousStepFieldNames.forEach(fieldName => setFieldTouched(fieldName, false));

    setState(prevState => ({ ...prevState, stepNumber: prevState.stepNumber - 1 }));
  };

  const handleError = (error: AxiosError) => {
    setState(prevState => ({ ...prevState, errorMessage: getErrorMessage(error) }));
  };

  const handleSubmit = async (values: T, helpers: FormikHelpers<T>) => {
    if (errorMessage) {
      // reset error message each submit
      setState(prevState => ({ ...prevState, errorMessage: '' }));
    }

    try {
      await onEachStepSubmit?.(values);

      const currentStepSubmitHandler = steps[stepNumber].submitHandler;
      await currentStepSubmitHandler?.(values);

      if (isLastStep()) {
        await onFinalSubmit(values);
        helpers.setSubmitting(false);
        helpers.resetForm();
      } else {
        helpers.setSubmitting(false);
        showNextStep(helpers);
      }
    } catch (error) {
      helpers.setSubmitting(false);
      handleError(error as AxiosError);
    }
  };

  const CurrentStep = steps[stepNumber];
  const isFirstStep = stepNumber === 0;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CurrentStep.validationSchema}
      onSubmit={handleSubmit}
    >
      {formikBag => (
        <Form className="w-full max-w-prose-sm !m-0" onSubmit={formikBag.handleSubmit}>
          <h3 className="text-center">{CurrentStep.title}</h3>

          <ProgressIndicator stepNumber={stepNumber} totalSteps={steps.length} />

          <CurrentStep {...formikBag} />

          <div className="mt-8">{errorMessage && <Alert type="error">{errorMessage}</Alert>}</div>

          <div className="flex flex-nowrap justify-around items-center mx-auto mt-8 w-full gap-x-4 min-w-[7rem]">
            {!isFirstStep && (
              <Button
                theme="secondary"
                disabled={formikBag.isSubmitting}
                onClick={() => showPreviousStep(formikBag)}
                data-testid={MULTI_STEP_PREVIOUS_BUTTON}
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
                className="group"
              >
                <span className="flex items-center justify-center gap-x-2">
                  {formikBag.isSubmitting && <InlineLoadingSpinner />}
                  <span className="mt-[0.325rem]">Submit ✓</span>
                </span>
              </Button>
            ) : (
              <Button
                type="submit"
                theme="secondary"
                disabled={formikBag.isSubmitting}
                fullWidth={isFirstStep}
                data-testid={MULTI_STEP_STEP_BUTTON}
                className="group"
              >
                <span className="flex items-center justify-center gap-x-2">
                  {formikBag.isSubmitting && <InlineLoadingSpinner />}
                  <span className="mt-[0.325rem]">Next →</span>
                </span>
              </Button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default MultiStepForm;
