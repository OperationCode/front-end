import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorDisplay.css';

ErrorDisplay.propTypes = { statusCode: PropTypes.number.isRequired };

// Formerly known as FourOhFour (404)
function ErrorDisplay({ statusCode }) {
  return (
    <div className={styles.ErrorDisplay}>
      <div className={styles.bg}>
        <h1 className={styles.title}>
          {statusCode}
          !
        </h1>
        <p className={styles.paragraph}>
You definitely weren&apos;t supposed to see this...
        </p>
      </div>
    </div>
  );
}

export default ErrorDisplay;
