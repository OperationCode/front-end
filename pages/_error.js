import * as Sentry from '@sentry/node';
import { bool, number, object } from 'prop-types';
import ErrorDisplay from 'components/ErrorDisplay/ErrorDisplay';

Error.getInitialProps = async ({ res, err, asPath }) => {
  const props = await Error.getInitialProps({ res, err });

  // Workaround for https://github.com/zeit/next.js/issues/8592, mark when
  // getInitialProps has run
  props.hasGetInitialPropsRun = true;

  if (res && err) {
    // Running on the server, the response object is available.
    //
    // Next.js will pass an err on the server if a page's `getInitialProps`
    // threw or returned a Promise that rejected
    Sentry.captureException(err);

    return props;
  }

  // Running on the client (browser).
  //
  // Next.js will provide an err if:
  //
  //  - a page's `getInitialProps` threw or returned a Promise that rejected
  //  - an exception was thrown somewhere in the React lifecycle (render,
  //    componentDidMount, etc) that was caught by Next.js's React Error
  //    Boundary. Read more about what types of exceptions are caught by Error
  //    Boundaries: https://reactjs.org/docs/error-boundaries.html
  if (err) {
    Sentry.captureException(err);

    return props;
  }

  // If this point is reached, getInitialProps was called without any
  // information about what the error might be. This is unexpected and may
  // indicate a bug introduced in Next.js, so record it in Sentry
  Sentry.captureException(new Error(`_error.js getInitialProps missing data at path: ${asPath}`));

  return props;
};

Error.propTypes = {
  statusCode: number,
  hasGetInitialPropsRun: bool,
  err: object,
};

Error.defaultProps = {
  statusCode: undefined,
  hasGetInitialPropsRun: false,
  err: {},
};

const Error = ({ statusCode, hasGetInitialPropsRun, err }) => {
  if (!hasGetInitialPropsRun && err) {
    // getInitialProps is not called in case of
    // https://github.com/zeit/next.js/issues/8592. As a workaround, we pass
    // err via _app.js so it can be captured
    Sentry.captureException(err);
  }

  return <ErrorDisplay statusCode={statusCode} />;
};

export default Error;
