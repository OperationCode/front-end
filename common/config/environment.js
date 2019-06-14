const isProduction = process.env.NODE_ENV === 'production';

// TODO: Use GH Actions to enable environment-based Now deploys and stop using prod on PR deploys
export const apiUrl = isProduction
  ? 'https://api.operationcode.org'
  : 'https://api.staging.operationcode.org';

export const facebookKey = process.env.OC_FACEBOOK_KEY || '399113557601038';
export const googleKey =
  process.env.OC_GOOGLE_KEY ||
  '973655216990-vvl9vfp9v13lfoq7ccm36e8ouukrgdfh.apps.googleusercontent.com';
