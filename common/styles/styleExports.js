import { isHexColor } from 'common/utils/style-utils';
import * as themeMap from './themeMap';

const themeMapValues = Object.entries(themeMap);

export const breakpointsObject = themeMapValues.reduce((obj, [key, value]) => {
  const isBreakpoint = key.includes('ViewportWidth');

  if (isBreakpoint) {
    obj[key] = value; // eslint-disable-line no-param-reassign
  }

  return obj;
}, {});

export const brandColorsObject = themeMapValues.reduce((obj, [key, value]) => {
  if (isHexColor(value)) {
    obj[key] = value; // eslint-disable-line no-param-reassign
  }

  return obj;
}, {});

export const fontsObject = themeMapValues.reduce((obj, [key, value]) => {
  if (key.includes('Font')) {
    // Remove extra quotes from font name
    obj[key] = value.replace(/^"(.*)"$/, '$1'); // eslint-disable-line no-param-reassign
  }

  return obj;
}, {});
