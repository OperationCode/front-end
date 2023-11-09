import { number } from 'prop-types';
import Head from 'components/head';

ErrorDisplay.propTypes = { statusCode: number };

ErrorDisplay.defaultProps = { statusCode: undefined };

function ErrorDisplay({ statusCode }) {
  return (
    <>
      <Head title={statusCode ? `${statusCode}` : 'Error'}>
        <meta name="robots" content="noindex, nofollow" key={statusCode} />
      </Head>

      <div
        className={
          'h-screen text-white bg-[url("/static/images/TankFlip.gif")] flex flex-col justify-center w-full  bg-cover items-center'
        }
      >
        <div className="text-center my-4 mx-auto">
          <h1 className="text-6xl text-white">{statusCode || 'Oh no'}!</h1>
          <p className="text-2xl text-white">
            We&apos;re so ashamed. You definitely weren&apos;t supposed to see this...
          </p>
        </div>
      </div>
    </>
  );
}

export default ErrorDisplay;
