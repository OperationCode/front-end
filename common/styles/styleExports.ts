import { isHexColor } from '@/common/utils/style-utils';
import * as themeMap from './themeMap';

const themeMapValues = Object.entries(themeMap);

type StyleObjectType = {
  [key: string]: string;
};

export const breakpointsObject: StyleObjectType = themeMapValues.reduce((object, [key, value]) => {
  const isBreakpoint = key.includes('ViewportWidth');

  if (isBreakpoint) {
    object[key] = value; // eslint-disable-line no-param-reassign
  }

  return object;
}, {} as StyleObjectType);

export const brandColorsObject: StyleObjectType = themeMapValues.reduce((object, [key, value]) => {
  if (isHexColor(value)) {
    object[key] = value; // eslint-disable-line no-param-reassign
  }

  return object;
}, {} as StyleObjectType);

export const fontsObject: StyleObjectType = themeMapValues.reduce((object, [key, value]) => {
  if (key.includes('Font')) {
    // Remove extra quotes from font name
    object[key] = value.replace(/^"(.*)"$/, '$1'); // eslint-disable-line no-param-reassign
  }

  return object;
}, {} as StyleObjectType);
