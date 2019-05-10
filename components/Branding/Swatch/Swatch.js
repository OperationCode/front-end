import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import { string } from 'prop-types';
import React from 'react';
import styles from './Swatch.css';

Swatch.propTypes = {
  colorName: string.isRequired,
  hexCode: string.isRequired,
};

function Swatch({ colorName, hexCode }) {
  return (
    <figure className={styles.Swatch}>
      <ScreenReaderOnly>{`A block of the color ${colorName}`}</ScreenReaderOnly>

      <div className={styles.colorBlock} style={{ backgroundColor: hexCode }} />

      <figcaption>
        <h6>{colorName.toUpperCase()}</h6>
        {hexCode.toUpperCase()}
      </figcaption>
    </figure>
  );
}

export default Swatch;
