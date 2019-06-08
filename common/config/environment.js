const isProduction = process.env.NODE_ENV === 'production';

// Use staging environment locally, otherwise use environment variable to define API URL
// TODO: Use GitHub Actions to enable environment-based Now deploys
// export const apiUrl =
//   isProduction && Boolean(process.env.API_URL)
//     ? process.env.API_URL
//     : 'https://api.staging.operationcode.org';

// temporary hack
export const apiUrl =
  isProduction && (window && window.location.hostname === 'operationcode.org')
    ? process.env.API_URL
    : 'https://api.staging.operationcode.org';

export const facebookKey = process.env.OC_FACEBOOK_KEY || '399113557601038';
export const googleKey =
  process.env.OC_GOOGLE_KEY ||
  '973655216990-vvl9vfp9v13lfoq7ccm36e8ouukrgdfh.apps.googleusercontent.com';
