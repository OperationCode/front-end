'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import * as Sentry from '@sentry/nextjs';
import { gtag } from 'common/utils/thirdParty/gtag';

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

async function initLogRocket() {
  const [
    { default: LogRocket },
    { default: setupLogRocketReact },
    { default: Fingerprint2 },
    { default: hash },
  ] = await Promise.all([
    import('logrocket'),
    import('logrocket-react'),
    import('fingerprintjs2'),
    import('object-hash'),
  ]);

  LogRocket.init('uquzri/operation-code');

  LogRocket.getSessionURL((sessionURL) => {
    // eslint-disable-next-line no-console
    console.log('LogRocket session URL: ', sessionURL);
    Sentry.getCurrentScope().setExtra('sessionURL', sessionURL);
  });

  setupLogRocketReact(LogRocket);

  const setFingerprint = () => {
    Fingerprint2.get((components) => {
      const fingerprint = hash(components);
      LogRocket.identify(fingerprint);
    });
  };

  if ('requestIdleCallback' in window) {
    requestIdleCallback(setFingerprint);
  } else {
    setTimeout(setFingerprint, 500);
  }
}

async function loadFonts() {
  const { default: FontFaceObserver } = await import('fontfaceobserver');

  const observers = fonts.map((font) => {
    if (font.url) {
      const link = document.createElement('link');
      link.href = font.url;
      link.rel = 'stylesheet';
      document.head.append(link);
    }

    const observer = new FontFaceObserver(font.fontFamily);
    return observer.load(null, 10000);
  });

  Promise.all(observers)
    .then(() => {
      document.documentElement.classList.add('fonts-loaded');
    })
    .catch(() =>
      Sentry.captureException('FontFaceObserver took too long to resolve. Ignore this.'),
    );
}

export function AnalyticsProvider() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      gtag.pageView(pathname);
      previousPathname.current = pathname;
    }
  }, [pathname]);

  useEffect(() => {
    if (isProduction) {
      initLogRocket();
    }

    loadFonts();
  }, []);

  return null;
}
