import { useEffect } from 'react';
import { number } from 'prop-types';
import Head from 'components/head';

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

      <div className="bg-themeGray w-full h-full">
        <div
          className={
            'h-[45vh] text-white bg-[url("/static/images/TankFlip.gif")] md:h[100vh] flex flex-col justify-center w-[100%]  bg-cover items-center'
          }
        >
          <div className="text-center m-[1rem]">
            <h1 className="text-6xl">{statusCode || 'Oh no'}!</h1>
            <p className="text-2xl">
              We&apos;re so ashamed. You definitely weren&apos;t supposed to see this...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorDisplay;
