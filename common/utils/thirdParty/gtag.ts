import snakeCase from 'lodash/snakeCase';
import { clientTokens, isProduction } from 'common/config/environment';

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, unknown>,
    ) => void;
  }
}

// TODO: Leverage prod-build-time-only env vars instead NODE_ENV for prod check
const isDevelopment = process.env.NODE_ENV === 'development';

interface LogParams {
  methodName: string;
  [key: string]: unknown;
}

/**
 * @description dev-only logging of gtag methods
 */
const log = ({ methodName, ...rest }: LogParams): void => {
  if (isDevelopment) {
    console.log(`gtag.${methodName}\n`, rest); // eslint-disable-line no-console
  }
};

/**
 * @description Log a pageview with gtag
 * @see https://developers.google.com/analytics/devguides/collection/gtagjs/pages
 */
const pageView = (url: string, isModalView = false): void => {
  log({ methodName: 'pageview', url, isModalView });

  if (isProduction && !!window && !!window.gtag) {
    window.gtag('config', clientTokens.GOOGLE_ANALYTICS_ID, {
      page_path: url,
    });
  }
};

interface EventParams {
  action: string;
  /** Callback function to execute after the event */
  callback?: () => void;
  category: string;
  /** Optional label for the event */
  label?: string;
  /** Optional numeric value for the event */
  value?: number;
  /** Additional event parameters */
  otherEventParameters?: Record<string, unknown>;
}

/**
 * @description Log an event with gtag
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

interface ConversionEventParams {
  /** Google Ads conversion ID */
  adId: string;
  /** Category for the conversion event */
  category?: string;
}

/**
 * @description Log a conversion event with gtag (connected to Google Ads ID of a conversion)
 */
const conversionEvent = ({ adId, category = 'engagement' }: ConversionEventParams): void => {
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
 */
const outboundLink = (label: string, url: string): void => {
  event({
    action: `To: ${label}`,
    category: 'Outbound',
    label: `URL: ${url}`,
  });
};

/**
 * @description Log a modal view as if it were a gtag page view event
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
