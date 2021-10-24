/* eslint-disable max-classes-per-file */
import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';
import { node } from 'prop-types';
import Router from 'next/router';
import Fingerprint2 from 'fingerprintjs2';
import FontFaceObserver from 'fontfaceobserver';
import hash from 'object-hash';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import ScrollUpButton from 'react-scroll-up-button';
import { clientTokens } from 'common/config/environment';
import { gtag } from 'common/utils/thirdParty/gtag';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import ReactModal from 'react-modal';
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
  children: node.isRequired,
};

function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
      <ScrollUpButton />
    </div>
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

// eslint-disable-next-line react/prop-types
const App = ({ Component, pageProps, err }) => {
  useEffect(() => {
    /* Analytics */
    // TODO: Leverage prod-build-time-only env vars instead of window check
    if (isProduction && window.location.host.includes('operationcode.org')) {
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
  }, []);

  return (
    <Layout>
      {/** @see // Workaround for https://github.com/vercel/next.js/issues/8592 */}
      <Component {...pageProps} err={err} />
    </Layout>
  );
};

export default App;
