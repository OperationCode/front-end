import React from 'react';
import ErrorDisplay from 'components/ErrorDisplay/ErrorDisplay';

// This acts as an override necessary to use a custom ErrorDisplay handler
class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return <ErrorDisplay statusCode={this.props.statusCode} />;
  }
}

export default Error;
