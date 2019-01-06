<<<<<<< HEAD
import React from 'react';
import App, { Container } from 'next/app';
import ScrollUpButton from 'react-scroll-up-button';
import Nav from 'components/nav';
import Footer from 'components/Footer/Footer';
import 'common/styles/globalStyles.css';
=======
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import { compose } from 'redux';
import ScrollUpButton from 'react-scroll-up-button';
import withRedux from 'next-redux-wrapper';
import debounce from 'lodash/debounce';
import { initStore } from 'store/store';
import { screenResize } from 'store/screenSize/actions';
import breakpoints from 'common/styles/breakpoints';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import 'common/styles/globalStyles.css';
import withFonts from '../decorators/withFonts/withFonts';
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e

// eslint-disable-next-line react/prefer-stateless-function
class Layout extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;

    return (
      <>
<<<<<<< HEAD
        <ScrollUpButton />
        <Nav />
        {children}
        <Footer />
=======
        <Nav />
        <main>{children}</main>
        <Footer />
        <ScrollUpButton />
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      </>
    );
  }
}

<<<<<<< HEAD
export default class OperationCodeApp extends App {
  // eslint-disable-next-line no-unused-vars
  static async getInitialProps({ Component, router, ctx }) {
=======
class OperationCodeApp extends App {
  componentDidMount() {
    this.handleScreenResize(); // get initial size on load
    window.addEventListener('resize', this.debouncedHandleScreenResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedHandleScreenResize);
  }

  static async getInitialProps({ Component, ctx }) {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    let pageProps = {};

    // if page hits an API, make it async
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

<<<<<<< HEAD
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
=======
  handleScreenResize = () => {
    const { store } = this.props;
    store.dispatch(screenResize(window.innerWidth, window.innerHeight, breakpoints));
  };

  debouncedHandleScreenResize = debounce(this.handleScreenResize, 100, {
    leading: true,
    maxWait: 250,
  });

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      </Container>
    );
  }
}
<<<<<<< HEAD
=======

export default compose(
  withFonts,
  withRedux(initStore),
)(OperationCodeApp);
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
