import React from 'react';
import PropTypes from 'prop-types';
import ScreenReaderOnly from 'components/_common_/ScreenReaderOnly/ScreenReaderOnly';
import styles from './Swatch.css';

Swatch.propTypes = {
  colorName: PropTypes.string.isRequired,
  hexCode: PropTypes.string.isRequired,
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
