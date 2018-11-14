import React from 'react';
import PropTypes from 'prop-types';

ColorBlock.propTypes = {
  colorName: PropTypes.string.isRequired,
  hexCode: PropTypes.string.isRequired,
};

function ColorBlock({ colorName, hexCode }) {
  const colorBox = {
    minWidth: '90%',
    minHeight: '200px',
    backgroundColor: hexCode,
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
        <p>{hexCode}</p>
      </div>
    </div>
  );
}

export default ColorBlock;
