import React from 'react';
import App, { Container } from 'next/app';
import Nav from 'components/nav';
import 'common/styles/globalStyles.css';

// eslint-disable-next-line react/prefer-stateless-function
class Layout extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;

    return (
      <>
        <Nav />
        {children}
        {/* FOOTER EVENTUALLY GOES HERE */}
      </>
    );
  }
}

export default class OperationCodeApp extends App {
  // eslint-disable-next-line no-unused-vars
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    // if page hits an API, make it async
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
