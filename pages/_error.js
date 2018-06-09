import React from 'react';
import ErrorDisplay from 'components/ErrorDisplay/ErrorDisplay';

// This acts as an override necessary to use a custom ErrorDisplay handler
class Error extends React.Component {
  static getInitialProps({
    res, err,
  }) {
    const currentError = err ? err.statusCode : null;
    const statusCode = res ? res.statusCode : currentError;
    return {
      statusCode,
    };
  }

  render() {
    // eslint-disable-next-line react/prop-types
    return <ErrorDisplay statusCode={this.props.statusCode} />;
  }
}

export default Error;
