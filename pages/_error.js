import Error from 'next/error';
import * as Sentry from '@sentry/node';
import { bool, number, object } from 'prop-types';
import ErrorDisplay from 'components/ErrorDisplay/ErrorDisplay';

// NOTE: We have a custom 404 page.
// This will pretty much only render if we get issues on getInitialProps calls.
const CustomErrorPage = ({ statusCode, didGetInitialPropsRun, err }) => {
  if (!didGetInitialPropsRun && err) {
    // getInitialProps is not called in case of https://github.com/zeit/next.js/issues/8592.
    // As a workaround, we pass err via _app.js so it can be captured
    Sentry.captureException(err);
  }

  return <ErrorDisplay statusCode={statusCode} />;
};

CustomErrorPage.getInitialProps = async ({ res, err, asPath }) => {
  const errorPageProperties = await Error.getInitialProps({ res, err });

  // Workaround for https://github.com/zeit/next.js/issues/8592, mark when
  // getInitialProps has run
  errorPageProperties.didGetInitialPropsRun = true;

  if (res && err) {
    // Running on the server, the response object is available.
    //
    // Next.js will pass an err on the server if a page's `getInitialProps`
    // threw or returned a Promise that rejected
    Sentry.captureException(err);

    return errorPageProperties;
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

    return errorPageProperties;
  }

  // If this point is reached, getInitialProps was called without any
  // information about what the error might be. This is unexpected and may
  // indicate a bug introduced in Next.js, so record it in Sentry
  Sentry.captureException(new Error(`_error.js getInitialProps missing data at path: ${asPath}`));

  return errorPageProperties;
};

CustomErrorPage.propTypes = {
  statusCode: number,
  didGetInitialPropsRun: bool,
  err: object,
};

CustomErrorPage.defaultProps = {
  statusCode: undefined,
  didGetInitialPropsRun: false,
  err: {},
};

export default CustomErrorPage;
