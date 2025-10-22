/*
 * This file should only contain environment variables that are non-secret.
 */
const isProduction = process.env.PRODUCTION_DEPLOYMENT === 'true';

interface ClientTokens {
  GOOGLE_ADS_ID: string;
  GOOGLE_ANALYTICS_ID: string;
  GOOGLE_TAG_MANAGER_ID: string;
  OC_FACEBOOK_KEY: string;
  OC_GOOGLE_KEY: string;
  SENTRY_DSN: string;
}

// These are all exposed by the client, so there's no way to protect them anyways.
export const clientTokens: ClientTokens = isProduction
  ? {
      GOOGLE_ADS_ID: 'AW-868714671',
      GOOGLE_ANALYTICS_ID: 'G-5QSQ208NW6',
      // GOOGLE_ANALYTICS_ID: 'UA-75642413-1',
      GOOGLE_TAG_MANAGER_ID: 'GTM-PTPTHST', // unused
      OC_FACEBOOK_KEY: '207055783236912',
      OC_GOOGLE_KEY: '448638408285-6ego1u9ic6qcbsiitr2m173pp1tbs27k.apps.googleusercontent.com',
      SENTRY_DSN: 'https://90edfb8d1d9640cf86d8aefd57218d71@sentry.io/1443656',
    }
  : {
      GOOGLE_ADS_ID: '',
      GOOGLE_ANALYTICS_ID: '',
      GOOGLE_TAG_MANAGER_ID: '', // unused
      OC_FACEBOOK_KEY: '399113557601038',
      OC_GOOGLE_KEY: '973655216990-vvl9vfp9v13lfoq7ccm36e8ouukrgdfh.apps.googleusercontent.com',
      SENTRY_DSN: '',
    };

// TODO: Use GH Actions to enable environment-based deploys and stop using prod on PR deploys
export const apiUrl = isProduction
  ? 'https://api.operationcode.org'
  : 'https://api.staging.operationcode.org';

export const resourcesAPIURL = isProduction
  ? 'https://resources.operationcode.org'
  : 'https://resources.staging.operationcode.org';

export const slackMembersAPIUrl = 'https://slack.com/api/conversations.members';
export const slackGeneralChannelId = 'C03GSNF6X';

export const AIR_TABLE_BASE_ID = 'app9tYjofmFWMxRl8';
export const AIR_TABLE_TABLE_NAME = isProduction
  ? 'Onboarding Request PRODUCTION'
  : 'Onboarding Request STAGING';
