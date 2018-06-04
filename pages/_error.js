import React from 'react';
import FourOhFour from '../components/FourOhFour/FourOhFour';

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return <FourOhFour statusCode={this.props.statusCode} />;
  }
}

export default Error;
