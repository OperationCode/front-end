import { useEffect } from 'react';
import { number } from 'prop-types';
import Head from 'components/head';
import styles from './ErrorDisplay.module.css';

ErrorDisplay.propTypes = { statusCode: number };

ErrorDisplay.defaultProps = { statusCode: undefined };

function ErrorDisplay({ statusCode }) {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = '';
    };
  }, []);

  return (
    <>
      <Head title={statusCode ? `${statusCode}` : 'Error'}>
        <meta name="robots" content="noindex, nofollow" key={statusCode} />
      </Head>

      <div className={styles.ErrorDisplay}>
        <div className={styles.bg}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{statusCode || 'Oh no'}!</h1>
            <p className={styles.paragraph}>
              We&apos;re so ashamed. You definitely weren&apos;t supposed to see this...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorDisplay;
