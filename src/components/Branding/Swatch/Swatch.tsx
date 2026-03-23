import { string } from 'prop-types';
import ScreenReaderOnly from '@/components/ScreenReaderOnly/ScreenReaderOnly';

Swatch.propTypes = {
  colorName: string.isRequired,
  hexCode: string.isRequired,
};

export interface Swatch {
  colorName: string;
  hexCode: string;
}

function Swatch({ colorName, hexCode }: Swatch) {
  return (
    <figure className="m-6 w-56 border border-solid border-theme-gray-800 p-4">
      <ScreenReaderOnly>{`A block of the color ${colorName}`}</ScreenReaderOnly>

      <div
        className="mb-4 h-56 border border-solid border-theme-gray-800"
        style={{ backgroundColor: hexCode }}
      />

      <figcaption>
        <h6>{colorName.toUpperCase()}</h6>
        {hexCode.toUpperCase()}
      </figcaption>
    </figure>
  );
}

export default Swatch;
