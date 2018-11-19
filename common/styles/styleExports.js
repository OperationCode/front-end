import { hasPixelSuffix, isHexColor } from 'common/utils/style-utils';
import * as themeMap from './themeMap';

const themeMapValues = Object.entries(themeMap);

export const breakpointsObject = themeMapValues.reduce((obj, [key, value]) => {
  if (hasPixelSuffix(value)) {
    obj[key] = value; // eslint-disable-line no-param-reassign
  }

  return obj;
}, {});

export const brandColorsObject = themeMapValues.reduce((obj, [key, value]) => {
  if (isHexColor(value)) {
    // We don't want to include modifier colors like `primaryLight`
    const isBrandColor = !(key.includes('Light') || key.includes('Dark'));

    if (isBrandColor) {
      obj[key] = value; // eslint-disable-line no-param-reassign
    }
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
