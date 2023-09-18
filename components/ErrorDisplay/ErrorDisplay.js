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

      <div className={`${styles.ErrorDisplay} bg-[#121212] w-[100% h-[100%]`}>
        <div
          className={`${styles.bg} bg-[url("/static/images/TankFlip.gif")] md:h[100vh] flex flex-col justify-center w-[100%] text-white bg-cover items-center`}
        >
          <div className="text-center m-[1rem]">
            <h1 className="text-[4rem]">{statusCode || 'Oh no'}!</h1>
            <p className="text-[1.4rem]">
              We&apos;re so ashamed. You definitely weren&apos;t supposed to see this...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorDisplay;
