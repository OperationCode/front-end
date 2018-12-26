import React from 'react';
import PropTypes from 'prop-types';
import Head from 'components/head';
import styles from './ErrorDisplay.css';

ErrorDisplay.propTypes = { statusCode: PropTypes.number };

ErrorDisplay.defaultProps = { statusCode: undefined };

function ErrorDisplay({ statusCode }) {
  console.log(statusCode);
  return (
    <>
      <Head title={statusCode ? `${statusCode}` : 'Error'}>
        <meta name="robots" content="noindex, nofollow" key={statusCode} />
      </Head>

      <div className={styles.ErrorDisplay}>
        <div className={styles.bg}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{statusCode || 'Oh no'}!</h1>
            <p className={styles.paragraph}>You definitely weren&apos;t supposed to see this...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorDisplay;
