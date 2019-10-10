import React from 'react';
import { number } from 'prop-types';
import styles from './ProgressIndicator.css';

export const developmentErrors = {
  currentStepTooLow: '"currentStep" cannot be negative',
  currentStepTooHigh: '"currentStep" cannot be greater than "totalSteps"',
  totalStepsTooLow: '"totalSteps" cannot be negative',
};

ProgressIndicator.propTypes = {
  stepNumber: number,
  totalSteps: number,
};

ProgressIndicator.defaultProps = {
  stepNumber: 0,
  totalSteps: 0,
};

export default function ProgressIndicator({ stepNumber, totalSteps }) {
  if (totalSteps === 0) return null;
  if (totalSteps < 1) throw new Error(developmentErrors.totalStepsTooLow);
  if (stepNumber < 0) throw new Error(developmentErrors.currentStepTooLow);
  if (stepNumber > totalSteps) throw new Error(developmentErrors.currentStepTooHigh);

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
