import React from 'react';
import { number } from 'prop-types';
import styles from './ProgressIndicator.css';

const ProgressIndicator = ({ stepNumber, totalSteps }) => {
  if (totalSteps < 1) return null;

  const percentageCompleted = (stepNumber / totalSteps) * 100;

  return (
    <div className={styles.ProgressIndicator}>
      <div>
        {stepNumber}/{totalSteps} Complete
      </div>
      <div className={styles.bar}>
        <div className={styles.progress} style={{ width: `${percentageCompleted}%` }} />
      </div>
    </div>
  );
};

ProgressIndicator.propTypes = {
  stepNumber: number,
  totalSteps: number,
};

ProgressIndicator.defaultProps = {
  stepNumber: 0,
  totalSteps: 0,
};

export default ProgressIndicator;
