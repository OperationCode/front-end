const { s3hostName } = require('../common/constants/urls');

process.env = {
  ...process.env,
  __NEXT_IMAGE_OPTS: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [s3hostName, 'user-images.githubusercontent.com'],
    path: '/',
    loader: 'default',
  },
};
