import addonBackgrounds from '@storybook/addon-backgrounds';
<<<<<<< HEAD
import backgroundsPaletteArray from 'common/styles/styleExports';
=======
import { brandColorsObject } from 'common/styles/styleExports';
import { capitalizeFirstLetter } from 'common/utils/string-utils';

const backgroundsPaletteArray = Object.keys(brandColorsObject).map(name => ({
  name: capitalizeFirstLetter(name),
  value: brandColorsObject[name],
  default: name === 'white',
}));
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e

const brandingBackgrounds = addonBackgrounds(backgroundsPaletteArray);

export default brandingBackgrounds;
