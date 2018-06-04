import React from 'react';
import PropTypes from 'prop-types';
import styles from './FourOhFour.css';

FourOhFour.propTypes = {
  statusCode: PropTypes.number.isRequired,
};

function FourOhFour({ statusCode }) {
  return (
    <div className={styles.FourOhFour}>
      <div className={styles.bg}>
        <h1 className={styles.title}>{statusCode}!</h1>
        <p className={styles.paragraph}>You definitely weren&apos;t supposed to see this...</p>
      </div>
    </div>
  );
}

export default FourOhFour;
