const snakeCase = require('lodash/snakeCase');
const { clientTokens } = require('common/config/environment');

// TODO: Leverage master-build-time-only env vars instead of window check
const isProduction =
  process.env.NODE_ENV === 'production' && window.location.host.includes('operationcode.org');
const isDevelopment = process.env.NODE_ENV === 'development';

const log = ({ methodName, ...rest }) => {
  if (isDevelopment) {
    console.log(`gtag.${methodName}\n`, rest); // eslint-disable-line no-console
  }
};

/**
 * @description Log a pageview with google tag manager
 * @param {string} url
 * @param {boolean} isModalView
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 */
const pageView = (url, isModalView = false) => {
  log({ methodName: 'pageview', url, isModalView });

  if (isProduction) {
    window.gtag('config', clientTokens.GOOGLE_ANALYTICS_ID, {
      page_path: url,
    });
  }
};

/**
 * @description Log an event with google tag manager
 * @param {{
 *  action: string,
 *  category: string,
 *  label?: string,
 *  value?: number,
 *  callback?: () => void
 * }}
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/events
 */
const event = ({ action, category, label, value, callback }) => {
  log({
    methodName: 'event',
    action,
    category,
    label,
    value,
    hasCallback: typeof callback === 'function',
  });

  if (isProduction) {
    window.gtag('event', action, {
      event_callback: callback,
      event_category: category,
      event_label: label,
      value,
    });
  }
};

/**
 * @description Log a link click which takes users away from our site
 * @param {string} label describe where the user is going
 * @param {string} url
 */
const outboundLink = (label, url) => {
  event({
    action: `To: ${label}`,
    category: 'Outbound',
    label: `URL: ${url}`,
    value: url,
  });
};

/**
 * @description Log a modal view as if it were a page view with google tag manager
 * @param {string} modalName
 */
const modalView = modalName => {
  const url = `/modal/${snakeCase(modalName.toLowerCase())}`;

  const isModalView = true;

  pageView(url, isModalView);
};

export const gtag = {
  event,
  modalView,
  outboundLink,
  pageView,
};
