import App, { Container } from 'next/app';
import Router from 'next/router';
import { Provider } from 'react-redux';
import { compose } from 'redux';
import nextCookie from 'next-cookies';
import ScrollUpButton from 'react-scroll-up-button';
import withRedux from 'next-redux-wrapper';
import ReactGA from 'react-ga';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import * as Sentry from '@sentry/browser';
import { initStore } from 'store/store';
import { setLoggedIn } from 'store/loggedIn/actions';
import { isTokenValid } from 'common/utils/cookie-utils';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import Modal from 'components/Modal/Modal';
import withFonts from 'decorators/withFonts/withFonts';
import 'common/styles/globalStyles.css';

const isProduction = process.env.NODE_ENV === 'production';

// eslint-disable-next-line react/prefer-stateless-function
class Layout extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;

    return (
      <>
        <Nav />
        <main>{children}</main>
        <Footer />
        <ScrollUpButton />
      </>
    );
  }
}

class OperationCodeApp extends App {
  componentDidMount() {
    // get initial logged-in state on load
    if (this.props.isLoggedIn) {
      this.dispatchLogin();
    }

    if (isProduction) {
      Sentry.init({ dsn: process.env.SENTRY_DSN });
      LogRocket.init(`${process.env.LOGROCKET_KEY}/operation-code`);
      ReactGA.initialize(process.env.GOOGLE_ANALYTICS_TRACKING_ID);

      // Every crash report will have a LogRocket session URL.
      LogRocket.getSessionURL(sessionURL => {
        Sentry.configureScope(scope => {
          scope.setExtra('sessionURL', sessionURL);
        });
      });

      setupLogRocketReact(LogRocket);

      ReactGA.set({ page: window.location.pathname });
    }

    if (Modal.setAppElement) {
      Modal.setAppElement('body');
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedHandleScreenResize);
  }

  // eslint-disable-next-line unicorn/prevent-abbreviations
  static async getInitialProps({ Component, ctx }) {
    // eslint-disable-next-line unicorn/prevent-abbreviations
    let pageProps = {};
    const { token } = nextCookie(ctx);
    const isLoggedIn = isTokenValid(token);

    // if page hits an API, make it async
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ...ctx, isLoggedIn });
    }

    return { pageProps, isLoggedIn };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });

      Sentry.captureException(error);
    });

    super.componentDidCatch(error, errorInfo);
  }

  dispatchLogin = () => {
    const { store } = this.props;
    store.dispatch(setLoggedIn());
  };

  render() {
    // eslint-disable-next-line unicorn/prevent-abbreviations
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

if (isProduction) {
  Router.events.on('routeChangeComplete', url => ReactGA.pageview(url));
}

// Fixes Next CSS route change bug: https://github.com/zeit/next-plugins/issues/282
if (!isProduction) {
  Router.events.on('routeChangeComplete', () => {
    const chunksSelector = 'link[href*="/_next/static/css/styles.chunk.css"]';
    const chunksNodes = document.querySelectorAll(chunksSelector);
    const timestamp = new Date().valueOf();
    chunksNodes[0].href = `/_next/static/css/styles.chunk.css?v=${timestamp}`;
  });
}

export default compose(
  withFonts,
  withRedux(initStore),
)(OperationCodeApp);
