import snakeCase from 'lodash/snakeCase';
import { clientTokens } from 'common/config/environment';

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, any>) => void;
  }
}

// TODO: Leverage prod-build-time-only env vars instead NODE_ENV for prod check
const isProduction: boolean = process.env.NODE_ENV === 'production';
const isDevelopment: boolean = process.env.NODE_ENV === 'development';

/**
 * @description dev-only logging of gtag methods
 * @param {{ methodName: string }} { methodName, ...rest }
 */
const log = ({ methodName, ...rest }: { methodName: string; [key: string]: any }): void => {
  if (isDevelopment) {
    console.log(`gtag.${methodName}\n`, rest); // eslint-disable-line no-console
  }
};

/**
 * @description Log a pageview with gtag
 * @param {string} url
 * @param {boolean?} isModalView
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 */
const pageView = (url: string, isModalView: boolean = false): void => {
  log({ methodName: 'pageview', url, isModalView });

  if (isProduction && !!window && !!window.gtag) {
    window.gtag('config', clientTokens.GOOGLE_ANALYTICS_ID, {
      page_path: url,
    });
  }
};

interface EventParams {
  action: string;
  callback?: () => void;
  category: string;
  label?: string;
  value?: number;
  otherEventParameters?: Record<string, any>;
}

/**
 * @description Log an event with gtag
 * @param {{
 *  action: string,
 *  callback?: () => void,
 *  category: string,
 *  label?: string,
 *  otherEventParameters?: object,
 *  value?: number,
 * }}
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/events
 */
const event = ({
  action,
  callback = undefined,
  category,
  label = undefined,
  value = undefined,
  otherEventParameters = {}, // https://developers.google.com/gtagjs/reference/parameter
}: EventParams): void => {
  if (!action || !category) {
    throw new Error('Google Events must be called with at least an action and category.');
  }

  log({
    methodName: 'event',
    action,
    category,
    label,
    value,
    hasCallback: typeof callback === 'function',
    ...otherEventParameters,
  });

  if (isProduction && !!window && !!window.gtag) {
    window.gtag('event', action, {
      event_callback: callback,
      event_category: category,
      event_label: label,
      value,
      ...otherEventParameters,
    });
  }
};

/**
 * @description Log a conversion event with gtag (connected to Google Ads ID of a conversion)
 * @param {{ adId: string, category?: string }} { adId, category = 'engagement' }
 */
const conversionEvent = ({ adId, category = 'engagement' }: { adId: string; category?: string }): void => {
  log({ methodName: 'adEvent', adId, category });

  if (isProduction) {
    event({
      action: 'conversion',
      category,
      otherEventParameters: { send_to: `${clientTokens.GOOGLE_ADS_ID}/${adId}` },
    });
  }
};

/**
 * @description Log a link click which takes users away from our site
 * @param {string} label describe where the user is going
 * @param {string} url
 */
const outboundLink = (label: string, url: string): void => {
  event({
    action: `To: ${label}`,
    category: 'Outbound',
    label: `URL: ${url}`,
    value: url as any,
  });
};

/**
 * @description Log a modal view as if it were a gtag page view event
 * @param {string} modalName
 */
const modalView = (modalName: string): void => {
  const url = `/modal/${snakeCase(modalName.toLowerCase())}`;

  const isModalView = true;

  pageView(url, isModalView);
};

export const gtag = {
  conversionEvent,
  event,
  modalView,
  outboundLink,
  pageView,
};
