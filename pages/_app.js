import App, { Container } from 'next/app';
import Router from 'next/router';
import FontFaceObserver from 'fontfaceobserver';
import LogRocket from 'logrocket';
import ReactGA from 'react-ga';
import ScrollUpButton from 'react-scroll-up-button';
import setupLogRocketReact from 'logrocket-react';
import * as Sentry from '@sentry/browser';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import Modal from 'components/Modal/Modal';
import 'common/styles/globalStyles.css';

const isProduction = process.env.NODE_ENV === 'production';

const fonts = [
  {
    fontFamily: 'Encode Sans',
    url: 'https://fonts.googleapis.com/css?family=Encode+Sans:400,700',
  },
  {
    fontFamily: 'DIN Condensed Bold',
    // loading of this font is being handled by the @font-face rule on
    // the global style sheet.
    url: null,
  },
];

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
    const observers = fonts.map(font => {
      if (font.url) {
        const link = document.createElement('link');
        link.href = font.url;
        link.rel = 'stylesheet'; // eslint-disable-line unicorn/prevent-abbreviations
        document.head.append(link);
      }

      const observer = new FontFaceObserver(font.fontFamily);
      return observer.load();
    });

    Promise.all(observers).then(() => {
      document.documentElement.classList.add('fonts-loaded');
    });

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

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });

      Sentry.captureException(error);
    });

    super.componentDidCatch(error, errorInfo);
  }

  render() {
    // eslint-disable-next-line unicorn/prevent-abbreviations
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

export default OperationCodeApp;
