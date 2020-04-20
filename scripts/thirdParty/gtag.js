const { clientTokens } = require('common/config/environment');

/**
 * @description Log a pageview with google tag manager
 * @param {string} url
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 */
const pageview = url => {
  window.gtag('config', clientTokens.GOOGLE_TAG_MANAGER_ID, {
    page_path: url,
  });
};

/**
 * @description Log an event with google tag manager
 * @param {{ action: string, category: string, label: string, value: number }}
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/events
 */
const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};

export const gtag = {
  event,
  pageview,
};
