import { capitalizeFirstLetter } from 'common/utils/string-utils';
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
