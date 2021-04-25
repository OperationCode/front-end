import { number } from 'prop-types';
import styles from './ProgressIndicator.module.css';

export const developmentErrors = {
  currentStepTooLow: '"currentStep" cannot be negative',
  currentStepTooHigh: '"currentStep" cannot be greater than "totalSteps"',
  totalStepsTooLow: '"totalSteps" must be greater than zero',
};

const throwDevelopmentException = (expression, message) => {
  if (process.env.NODE_ENV !== 'production' && expression) {
    throw new Error(message);
  }
};

ProgressIndicator.propTypes = {
  stepNumber: number,
  totalSteps: number,
};

ProgressIndicator.defaultProps = {
  stepNumber: 0,
  totalSteps: 1,
};

export default function ProgressIndicator({ stepNumber, totalSteps }) {
  throwDevelopmentException(totalSteps < 1, developmentErrors.totalStepsTooLow);
  throwDevelopmentException(stepNumber < 0, developmentErrors.currentStepTooLow);
  throwDevelopmentException(stepNumber > totalSteps, developmentErrors.currentStepTooHigh);

  const percentageCompleted = (stepNumber / totalSteps) * 100;

  return (
    <div className={styles.ProgressIndicator}>
      <label htmlFor="steps-indicator">
        {stepNumber}/{totalSteps} Complete
      </label>
      <progress id="steps-indicator" max={totalSteps} value={stepNumber}>
        {percentageCompleted}%
      </progress>
    </div>
  );
}
