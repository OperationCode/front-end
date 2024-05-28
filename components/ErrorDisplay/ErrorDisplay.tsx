import Head from 'components/head';

export interface ErrorDisplayPropsType {
  /**
   * Displasy a status code instead of 'Error'.
   */
  statusCode?: number;
}

function ErrorDisplay({ statusCode }: ErrorDisplayPropsType) {
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
        <div className="mx-auto my-4 text-center">
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
