import * as Sentry from '@sentry/node';

/**
 * @description Simple abstraction to manually log and capture errors
 * @param {string | Object<string, any>} error
 */
export const logAndCaptureError = error => {
  const cleanError = error instanceof Error ? error : new Error(error);

  console.error(cleanError);
  Sentry.captureException(cleanError);
};
