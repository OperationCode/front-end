'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import * as Sentry from '@sentry/nextjs';
import { gtag } from '@/lib/utils/thirdParty/gtag';

const isProduction = process.env.NODE_ENV === 'production';

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

  setupLogRocketReact();

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

export function AnalyticsProvider() {
  const pathname = usePathname();
  const previousPathnameRef = useRef(pathname);

  useEffect(() => {
    if (previousPathnameRef.current !== pathname) {
      gtag.pageView(pathname);
      previousPathnameRef.current = pathname;
    }
  }, [pathname]);

  useEffect(() => {
    if (isProduction) {
      initLogRocket();
    }
  }, []);

  return null;
}
