'use client';

import type { FunctionComponent } from 'react';
import { useRef, useState } from 'react';
import type { DefaultValues, Resolver } from 'react-hook-form';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { AxiosError } from 'axios';
import type { ZodType } from 'zod';
import {
  MULTI_STEP_STEP_BUTTON,
  MULTI_STEP_SUBMIT_BUTTON,
  MULTI_STEP_PREVIOUS_BUTTON,
} from '@/lib/constants/testIDs';
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/ui/alert';
import ProgressIndicator from '@/components/ProgressIndicator/ProgressIndicator';
import { InlineLoadingSpinner } from '@/components/InlineLoadingSpinner';
import { cn } from '@/lib/utils';

export interface StepComponent<T extends Record<string, unknown>> extends FunctionComponent<{
  isSubmitting: boolean;
}> {
  title: string;
  initialValues: Partial<T>;
  submitHandler?: (values: Partial<T>) => Promise<void>;
  validationSchema: ZodType;
}

interface MultiStepFormProps<T extends Record<string, unknown>> {
  initialValues: T;
  getErrorMessage: (error: AxiosError) => string;
  onEachStepSubmit?: (
    values: T,
    helpers: { setFieldTouched: (name: string, touched: boolean) => void },
  ) => Promise<void>;
  onFinalSubmit: (values: T) => Promise<void>;
  steps: StepComponent<T>[];
  getTotalSteps?: () => number;
}

interface StepFormInnerProps<T extends Record<string, unknown>> {
  step: StepComponent<T>;
  defaultValues: DefaultValues<T>;
  isFirstStep: boolean;
  isLastStep: boolean;
  stepNumber: number;
  totalSteps: number;
  errorMessage: string;
  onSubmit: (values: T) => Promise<void>;
  onPrevious: (currentValues: T) => void;
}

function StepFormInner<T extends Record<string, unknown>>({
  step: CurrentStep,
  defaultValues,
  isFirstStep,
  isLastStep,
  stepNumber,
  totalSteps,
  errorMessage,
  onSubmit,
  onPrevious,
}: StepFormInnerProps<T>) {
  const methods = useForm<T>({
    defaultValues,
    resolver: zodResolver(CurrentStep.validationSchema as ZodType<T, T>) as unknown as Resolver<T>,
    mode: 'onTouched',
  });

  const { handleSubmit, formState } = methods;

  const handleFormSubmit = handleSubmit(() => onSubmit(methods.getValues() as T));

  return (
    <FormProvider {...methods}>
      <form
        className="m-0! flex w-full max-w-prose flex-col gap-4 px-4"
        onSubmit={handleFormSubmit}
        noValidate
      >
        <h3 className="text-center">{CurrentStep.title}</h3>

        <ProgressIndicator stepNumber={stepNumber} totalSteps={totalSteps} />

        <CurrentStep isSubmitting={formState.isSubmitting} />

        <div>{errorMessage && <Alert variant="destructive">{errorMessage}</Alert>}</div>

        <div className="flex flex-wrap items-center justify-center gap-3 [&>button]:flex-1">
          {!isFirstStep && (
            <Button
              variant="secondary"
              disabled={formState.isSubmitting}
              onClick={() => onPrevious(methods.getValues())}
              data-testid={MULTI_STEP_PREVIOUS_BUTTON}
              type="button"
            >
              ← Previous
            </Button>
          )}

          {isLastStep ? (
            <Button
              type="submit"
              variant="secondary"
              disabled={formState.isSubmitting}
              data-testid={MULTI_STEP_SUBMIT_BUTTON}
              className="group"
            >
              <span className="flex items-center justify-center gap-x-2">
                {formState.isSubmitting && <InlineLoadingSpinner />}
                <span className="mt-[0.325rem]">Submit ✓</span>
              </span>
            </Button>
          ) : (
            <Button
              type="submit"
              variant="secondary"
              disabled={formState.isSubmitting}
              data-loading={formState.isSubmitting}
              data-testid={MULTI_STEP_STEP_BUTTON}
              className={cn('group', isFirstStep && 'w-full')}
            >
              <span className="flex items-center justify-center gap-x-2">
                {formState.isSubmitting && <InlineLoadingSpinner className="-mt-[0.325rem]" />}
                <span>Next →</span>
              </span>
            </Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}

export function MultiStepForm<T extends Record<string, unknown>>({
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

  const valuesRef = useRef<T>(initialValues);
  const stepsRef = useRef(steps);
  stepsRef.current = steps;

  const { errorMessage, stepNumber } = state;
  const CurrentStep = steps[stepNumber];
  const isFirstStep = stepNumber === 0;
  const isLastStep = stepNumber === steps.length - 1;

  const handleSubmit = async (values: T) => {
    valuesRef.current = values;

    if (errorMessage) {
      setState((prev) => ({ ...prev, errorMessage: '' }));
    }

    try {
      const helpers = {
        setFieldTouched: (name: string, touched: boolean) => {
          // In RHF context, "untouching" is handled by step remount
          void name;
          void touched;
        },
      };

      await onEachStepSubmit?.(values, helpers);
      await CurrentStep.submitHandler?.(values);

      if (isLastStep) {
        await onFinalSubmit(values);
        valuesRef.current = initialValues;
        setState({ errorMessage: '', stepNumber: 0 });
      } else {
        setState((prev) => ({ ...prev, stepNumber: prev.stepNumber + 1 }));
      }
    } catch (error) {
      setState((prev) => ({ ...prev, errorMessage: getErrorMessage(error as AxiosError) }));
    }
  };

  const handlePrevious = (currentValues: T) => {
    valuesRef.current = currentValues;
    setState((prev) => ({ ...prev, stepNumber: prev.stepNumber - 1 }));
  };

  return (
    <StepFormInner<T>
      key={stepNumber}
      step={CurrentStep}
      defaultValues={valuesRef.current as DefaultValues<T>}
      isFirstStep={isFirstStep}
      isLastStep={isLastStep}
      stepNumber={stepNumber}
      totalSteps={steps.length}
      errorMessage={errorMessage}
      onSubmit={handleSubmit}
      onPrevious={handlePrevious}
    />
  );
}

export default MultiStepForm;
