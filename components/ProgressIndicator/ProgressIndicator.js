import React from 'react';
import { number } from 'prop-types';
import styles from './ProgressIndicator.css';

ProgressIndicator.propTypes = {
  stepNumber: number,
  totalSteps: number,
};

ProgressIndicator.defaultProps = {
  stepNumber: 0,
  totalSteps: 0,
};

export default function ProgressIndicator({ stepNumber, totalSteps }) {
  if (totalSteps < 1) return null;

  let currentStep = stepNumber;

  if (currentStep < 0) currentStep = 0;
  if (currentStep > totalSteps) currentStep = totalSteps;

  const percentageCompleted = (currentStep / totalSteps) * 100;

  return (
    <div className={styles.ProgressIndicator}>
      <label htmlFor="steps-indicator">
        {currentStep}/{totalSteps} Complete
      </label>
      <progress id="steps-indicator" max={totalSteps} value={currentStep}>
        {percentageCompleted}%
      </progress>
    </div>
  );
}
