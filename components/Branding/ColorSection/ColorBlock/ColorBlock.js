import React from 'react';
import PropTypes from 'prop-types';

ColorBlock.propTypes = {
  colorName: PropTypes.string.isRequired,
  colorHex: PropTypes.string.isRequired,
};

function ColorBlock({ colorHex, colorName }) {
  const colorBox = {
    minWidth: '90%',
    minHeight: '200px',
    backgroundColor: colorHex,
  };
  const blockCard = {
    width: '30%',
    padding: '10px',
    margin: '10px',
  };

  return (
    <div style={blockCard}>
      <div style={colorBox} />
      <div>
        <p>{colorName}</p>
        <p>{colorHex}</p>
      </div>
    </div>
  );
}

export default ColorBlock;
