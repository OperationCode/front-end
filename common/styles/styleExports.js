/* eslint-disable prettier/prettier */
import { isHexColor } from 'common/utils/style-utils';
import * as themeMap from './themeMap';

const themeMapValues = Object.entries(themeMap);

export const breakpointsObject = themeMapValues.reduce((object, [key, value]) => {
  const isBreakpoint = key.includes('ViewportWidth');

  if (isBreakpoint) {
    object[key] = value; // eslint-disable-line no-param-reassign
  }

  return object;
}, {});

export const brandColorsObject = themeMapValues.reduce((object, [key, value]) => {
  if (isHexColor(value)) {
    object[key] = value; // eslint-disable-line no-param-reassign
  }

  return object;
}, {});

export const fontsObject = themeMapValues.reduce((object, [key, value]) => {
  if (key.includes('Font')) {
    // Remove extra quotes from font name
    object[key] = value.replace(/^"(.*)"$/, '$1'); // eslint-disable-line no-param-reassign
  }

  return object;
}, {});
