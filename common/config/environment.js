/*
 * This file should only contain environment variables that are non-secret.
 */
const isProduction = process.env.NODE_ENV === 'production';

// These are all exposed by the client, so there's no way to protect them anyways.
export const clientTokens = isProduction
  ? {
      GOOGLE_ANALYTICS: 'UA-75642413-1',
      LOGROCKET: 'uquzri',
      OC_FACEBOOK_KEY: '207055783236912',
      OC_GOOGLE_KEY: '448638408285-6ego1u9ic6qcbsiitr2m173pp1tbs27k.apps.googleusercontent.com',
      SENTRY_DSN: 'https://90edfb8d1d9640cf86d8aefd57218d71@sentry.io/1443656',
    }
  : {
      GOOGLE_ANALYTICS: '',
      LOGROCKET: '',
      OC_FACEBOOK_KEY: '399113557601038',
      OC_GOOGLE_KEY: '973655216990-vvl9vfp9v13lfoq7ccm36e8ouukrgdfh.apps.googleusercontent.com',
      SENTRY_DSN: '',
    };

// TODO: Use GH Actions to enable environment-based Now deploys and stop using prod on PR deploys
export const apiUrl = isProduction
  ? 'https://api.operationcode.org'
  : 'https://api.staging.operationcode.org';

export const slackMembersAPIUrl = 'https://slack.com/api/conversations.members';
export const slackGeneralChannelId = 'C03GSNF6X';
