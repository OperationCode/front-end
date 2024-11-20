export const developmentErrors = {
  currentStepTooLow: '"currentStep" cannot be negative',
  currentStepTooHigh: '"currentStep" cannot be greater than "totalSteps"',
  totalStepsTooLow: '"totalSteps" must be greater than zero',
};

const throwDevelopmentException = (expression: boolean, message: string) => {
  if (process.env.NODE_ENV !== 'production' && expression) {
    throw new Error(message);
  }
};

export interface ProgressIndicatorPropsType {
  /**
   * Sets the current step number.
   */
  stepNumber: number;
  /**
   * Sets the total number of steps.
   */
  totalSteps: number;
}

export function ProgressIndicator({ stepNumber = 0, totalSteps = 1 }: ProgressIndicatorPropsType) {
  throwDevelopmentException(totalSteps < 1, developmentErrors.totalStepsTooLow);
  throwDevelopmentException(stepNumber < 0, developmentErrors.currentStepTooLow);
  throwDevelopmentException(stepNumber > totalSteps, developmentErrors.currentStepTooHigh);

  const percentageCompleted = (stepNumber / totalSteps) * 100;

  return (
    <div className="flex flex-col items-center mx-0 my-6">
      <label htmlFor="steps-indicator">
        {stepNumber}/{totalSteps} Complete
      </label>
      <progress id="steps-indicator" max={totalSteps} value={stepNumber}>
        {percentageCompleted}%
      </progress>
    </div>
  );
}
