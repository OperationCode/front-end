import React from 'react';
import PropTypes from 'prop-types';
import styles from './ColorBlock.css';

ColorBlock.propTypes = {
  colorName: PropTypes.string.isRequired,
  hexCode: PropTypes.string.isRequired,
};

function ColorBlock({ colorName, hexCode }) {
  return (
    <div className={styles.ColorBlock}>
      <div className={styles.swatch} style={{ backgroundColor: hexCode }} />
      <h6>{colorName}</h6>
      <span>{hexCode}</span>
    </div>
  );
}

export default ColorBlock;
