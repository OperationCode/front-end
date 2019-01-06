<<<<<<< HEAD
import capitalizeFirstLetter from 'common/utils/string-utils';
import * as themeMap from './themeMap';

const colorHexCodes = Object.entries(themeMap);

// For Backgrounds Addon
const backgroundsPaletteArray = colorHexCodes
  .filter(([name]) => !(name.includes('Light') || name.includes('Dark')))
  .map(([name, hexCode]) => ({
    name: capitalizeFirstLetter(name),
    value: hexCode,
    default: name === 'mist',
  }));

export default backgroundsPaletteArray;
=======
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
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
