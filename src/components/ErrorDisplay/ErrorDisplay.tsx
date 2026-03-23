export interface ErrorDisplayPropsType {
  /**
   * Displasy a status code instead of 'Error'.
   */
  statusCode?: number;
}

function ErrorDisplay({ statusCode }: ErrorDisplayPropsType) {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center bg-[url("/static/images/TankFlip.gif")] bg-cover text-white'>
      <div className="mx-auto my-4 text-center">
        <h1 className="text-6xl text-white">{statusCode || 'Oh no'}!</h1>
        <p className="text-2xl text-white">
          We're so ashamed. You definitely weren't supposed to see this...
        </p>
      </div>
    </div>
  );
}

export default ErrorDisplay;
