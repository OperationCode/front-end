import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import styles from './ErrorDisplay.css';

ErrorDisplay.propTypes = { statusCode: PropTypes.number.isRequired };

// Formerly known as FourOhFour (404)
function ErrorDisplay({ statusCode }) {
  return (
    <div className={styles.ErrorDisplay}>
      <div className={styles.bg}>
        <h1 className={styles.title}>{statusCode}!</h1>
        <p className={styles.paragraph}>You definitely weren&apos;t supposed to see this...</p>
      </div>
    </div>
=======
import Head from 'components/head';
import styles from './ErrorDisplay.css';

ErrorDisplay.propTypes = { statusCode: PropTypes.number };

ErrorDisplay.defaultProps = { statusCode: undefined };

function ErrorDisplay({ statusCode }) {
  return (
    <>
      <Head title={statusCode ? `${statusCode}` : 'Error'}>
        <meta name="robots" content="noindex, nofollow" key={statusCode} />
      </Head>

      <div className={styles.ErrorDisplay}>
        <div className={styles.bg}>
          <h1 className={styles.title}>{statusCode}!</h1>
          <p className={styles.paragraph}>You definitely weren&apos;t supposed to see this...</p>
        </div>
      </div>
    </>
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
  );
}

export default ErrorDisplay;
