import ErrorDisplay from 'components/ErrorDisplay/ErrorDisplay';
import { number } from 'prop-types';

Error.getInitialProps = ({ response, error }) => {
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
