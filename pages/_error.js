import ErrorDisplay from 'components/ErrorDisplay/ErrorDisplay';

// This acts as an override necessary to use a custom ErrorDisplay handler
class Error extends React.Component {
  // eslint-disable-next-line unicorn/prevent-abbreviations
  static getInitialProps({ res, error }) {
    const currentError = error ? error.statusCode : null;
    const statusCode = res ? res.statusCode : currentError;
    return { statusCode };
  }

  render() {
    const { props } = this;

    // eslint-disable-next-line react/prop-types
    return <ErrorDisplay statusCode={props.statusCode} />;
  }
}

export default Error;
