/* eslint-disable prettier/prettier */
/* eslint-disable max-classes-per-file */
import * as Sentry from '@sentry/browser';
import App from 'next/app';
import Fingerprint2 from 'fingerprintjs2';
import FontFaceObserver from 'fontfaceobserver';
import hash from 'object-hash';
import LogRocket from 'logrocket';
import PropTypes from 'prop-types';
import Router from 'next/router';
import ScrollUpButton from 'react-scroll-up-button';
import setupLogRocketReact from 'logrocket-react';
import { clientTokens } from 'common/config/environment';
import { gtag } from 'common/utils/thirdParty/gtag';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import ReactModal from 'react-modal';
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
    /* Analytics */
    // TODO: Leverage prod-build-time-only env vars instead of window check
    if (isProduction && window.location.host.includes('operationcode.org')) {
      Sentry.init({ dsn: clientTokens.SENTRY_DSN, release: `front-end@${version}` });
      LogRocket.init(`${clientTokens.LOGROCKET}/operation-code`);

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
      .catch(() =>
        Sentry.captureException('FontFaceObserver took too long to resolve. Ignore this.'),
      );

    // Accessibility: Tell application which DOM node to hide during focus-locking of modal
    ReactModal.setAppElement('#__next');
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

Router.events.on('routeChangeComplete', url => gtag.pageView(url));

// Fixes Next CSS route change bug: https://github.com/vercel/next-plugins/issues/282
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
