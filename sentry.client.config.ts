// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://90edfb8d1d9640cf86d8aefd57218d71@o68895.ingest.sentry.io/1443656',
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,
  release: 'client_2.0.0',
  enabled: !!process.env.SENTRY_AUTH_TOKEN,

  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
