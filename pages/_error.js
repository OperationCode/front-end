import ErrorDisplay from 'components/ErrorDisplay/ErrorDisplay';
import { number } from 'prop-types';
import * as Sentry from '@sentry/node';

Error.getInitialProps = async ({ response, error }) => {
  if (error) {
    Sentry.captureException(error);

    await Sentry.flush(2000);
  }

  const currentError = error ? error.statusCode : null;
  const statusCode = response ? response.statusCode : currentError;
  return { statusCode };
};

Error.propTypes = { statusCode: number };
Error.defaultProps = { statusCode: undefined };

// This acts as an override necessary to use a custom ErrorDisplay handler
function Error({ statusCode }) {
  return <ErrorDisplay statusCode={statusCode} />;
}

export default Error;
