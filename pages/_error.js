import { useEffect } from 'react';
import { number, object } from 'prop-types';
import * as Sentry from '@sentry/browser';
import ErrorDisplay from 'components/ErrorDisplay/ErrorDisplay';

Error.getInitialProps = ({ response, error }) => {
  const currentError = error ? error.statusCode : null;
  const statusCode = response ? response.statusCode : currentError;
  return { error, statusCode };
};

Error.propTypes = { error: object, statusCode: number };
Error.defaultProps = { error: undefined, statusCode: undefined };

// This acts as an override necessary to use a custom ErrorDisplay handler
function Error({ error, statusCode }) {
  useEffect(() => {
    Sentry.withScope(scope => {
      Object.keys(error).forEach(key => {
        scope.setExtra(key, error[key]);
      });

      Sentry.captureException(error);
    });
  }, []);

  return <ErrorDisplay statusCode={statusCode} />;
}

export default Error;
