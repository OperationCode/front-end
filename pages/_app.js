/* eslint-disable max-classes-per-file */
import App from 'next/app';
import Router from 'next/router';
import PropTypes from 'prop-types';
import FontFaceObserver from 'fontfaceobserver';
import LogRocket from 'logrocket';
import ReactGA from 'react-ga';
import ScrollUpButton from 'react-scroll-up-button';
import setupLogRocketReact from 'logrocket-react';
import * as Sentry from '@sentry/node';
import { clientTokens } from 'common/config/environment';
import { logAndCaptureError } from 'common/utils/error-utils';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import Modal from 'components/Modal/Modal';

import Fingerprint2 from 'fingerprintjs2';
import hash from 'object-hash';
import { version } from '../package.json';
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <ScrollUpButton />
    </>
  );
}

// Same test used by EFF for identifying users
// https://panopticlick.eff.org/
const setLogRocketFingerprint = () => {
  Fingerprint2.get(components => {
    const fingerprint = hash(components);
    LogRocket.identify(fingerprint);
  });
};

class OperationCodeApp extends App {
  componentDidMount() {
    // Temporary method until we do dynamic now configs
    const hasRealUsers = isProduction && window.location.host.includes('operationcode.org');

    // Use something from https://zeit.co/docs/v2/build-step#system-environment-variables to
    // dynamically change release version.
    Sentry.init({ dsn: clientTokens.SENTRY_DSN, release: `${version}`, enabled: hasRealUsers });

    if (hasRealUsers) {
      LogRocket.init(`${clientTokens.LOGROCKET}/operation-code`);
      ReactGA.initialize(clientTokens.GOOGLE_ANALYTICS);

      // Every crash report will have a LogRocket session URL.
      LogRocket.getSessionURL(sessionURL => {
        Sentry.configureScope(scope => {
          scope.setExtra('sessionURL', sessionURL);
        });
      });

      setupLogRocketReact(LogRocket);

      // Per library docs, Fingerprint2 should not run immediately
      if (window.requestIdleCallback) {
        requestIdleCallback(setLogRocketFingerprint);
      } else {
        setTimeout(setLogRocketFingerprint, 500);
      }

      ReactGA.set({ page: window.location.pathname });
    }

    /* Non-render blocking font load */
    const observers = fonts.map(font => {
      if (font.url) {
        const link = document.createElement('link');
        link.href = font.url;
        link.rel = 'stylesheet'; // eslint-disable-line unicorn/prevent-abbreviations
        document.head.append(link);
      }

      const observer = new FontFaceObserver(font.fontFamily);
      return observer.load(null, 10000); // increase the max timeout from default 3s to 10s
    });

    Promise.all(observers)
      .then(() => {
        document.documentElement.classList.add('fonts-loaded');
      })
      .catch(() => {
        logAndCaptureError('FontFaceObserver took too long to resolve. Ignore this.');
      });

    /* Modal anchor set */
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

      logAndCaptureError(error);
    });

    super.componentDidCatch(error, errorInfo);
  }

  render() {
    // eslint-disable-next-line unicorn/prevent-abbreviations
    const { Component, err, pageProps } = this.props;

    // Workaround for https://github.com/zeit/next.js/issues/8592
    // eslint-disable-next-line unicorn/prevent-abbreviations
    const modifiedPageProps = { ...pageProps, err };

    return (
      <Layout>
        <Component {...modifiedPageProps} />
      </Layout>
    );
  }
}

if (isProduction) {
  Router.events.on('routeChangeComplete', url => ReactGA.pageview(url));
}

// Fixes Next CSS route change bug: https://github.com/zeit/next-plugins/issues/282
if (!isProduction) {
  Router.events.on('routeChangeComplete', () => {
    const path = '/_next/static/chunks/styles.chunk.module.css';
    const chunksSelector = `link[href*="${path}"]:not([rel=preload])`;
    const chunksNodes = document.querySelectorAll(chunksSelector);
    if (chunksNodes.length) {
      const timestamp = new Date().valueOf();
      chunksNodes[0].href = `${path}?ts=${timestamp}`;
    }
  });
}

export default OperationCodeApp;
