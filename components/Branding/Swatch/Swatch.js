import React from 'react';
import PropTypes from 'prop-types';
import styles from './Swatch.css';

Swatch.propTypes = {
  colorName: PropTypes.string.isRequired,
  hexCode: PropTypes.string.isRequired,
};

function Swatch({ colorName, hexCode }) {
  return (
    <figure className={styles.Swatch}>
      <div
        alt={`A block of the color ${colorName}`}
        className={styles.colorBlock}
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
