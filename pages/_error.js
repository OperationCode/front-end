<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
import ErrorDisplay from 'components/ErrorDisplay/ErrorDisplay';

// This acts as an override necessary to use a custom ErrorDisplay handler
class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const currentError = err ? err.statusCode : null;
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
