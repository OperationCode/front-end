// Polyfills
import 'intersection-observer';
import 'common/styles/globals.css';

import { gtag } from 'common/utils/thirdParty/gtag';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import { ScrollToTopButton } from 'components/ScrollToTopButton/ScrollToTopButton';
import Fingerprint2 from 'fingerprintjs2';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import Router from 'next/router';
import hash from 'object-hash';
import { useEffect } from 'react';

import * as Sentry from '@sentry/nextjs';

import type { PropsWithChildren } from 'react';
import type { AppProps } from 'next/app';
import type NextErrorComponent from 'next/error';
import FontFaceObserver from 'fontfaceobserver';

const isProduction = process.env.NODE_ENV === 'production';

const fonts = [
  {
    fontFamily: 'Encode Sans',
    url: 'https://fonts.googleapis.com/css?family=Encode+Sans:400,700',
  },
  {
    fontFamily: 'Bebas Neue',
    url: 'https://fonts.googleapis.com/css?family=Bebas+Neue:400,700',
  },
];

function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
      <ScrollToTopButton />
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
    const chunksNodes: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(chunksSelector);
    if (chunksNodes.length) {
      const timestamp = new Date().valueOf();
      chunksNodes[0].href = `${path}?ts=${timestamp}`;
    }
  });
}

const App = ({ Component, pageProps, err }: AppProps & { err: NextErrorComponent }) => {
  useEffect(() => {
    /* Analytics */
    if (isProduction) {
      LogRocket.init('uquzri/operation-code');

      // Every crash report will have a LogRocket session URL.
      LogRocket.getSessionURL(sessionURL => {
        // eslint-disable-next-line no-console
        console.log('LogRocket session URL: ', sessionURL);
        Sentry.configureScope(scope => {
          scope.setExtra('sessionURL', sessionURL);
        });
      });

      setupLogRocketReact(LogRocket);

      // Per library docs, Fingerprint2 should not run immediately
      if ('requestIdleCallback' in window) {
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
        link.rel = 'stylesheet';
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
  }, []);

  return (
    <Layout>
      {/** @see // Workaround for https://github.com/vercel/next.js/issues/8592 */}
      <Component {...pageProps} err={err} />
    </Layout>
  );
};

export default App;
