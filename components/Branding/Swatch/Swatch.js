import React from 'react';
import PropTypes from 'prop-types';
import styles from './Swatch.css';

Swatch.propTypes = {
  colorName: PropTypes.string.isRequired,
  hexCode: PropTypes.string.isRequired,
};

function Swatch({ colorName, hexCode }) {
  return (
    <div className={styles.Swatch}>
      <div className={styles.colorBlock} style={{ backgroundColor: hexCode }} />
      <h6>{colorName.toUpperCase()}</h6>
      <span>{hexCode.toUpperCase()}</span>
    </div>
  );
}

export default Swatch;
