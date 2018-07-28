import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormCheckBox.css';

FormCheckBox.propTypes = {
  checkBox: PropTypes.shape({
    display: PropTypes.string,
    margin: PropTypes.string,
  }),
  label: PropTypes.shape({
    fontWeight: PropTypes.string,
    margin: PropTypes.string,
    textTransform: PropTypes.string,
  }),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};

FormCheckBox.defaultProps = {
  checkBox: null,
  label: null,
  onChange: null,
};

function FormCheckBox({
 checkBox, label, name, onChange, value 
}) {
  return (
    <div style={checkBox}>
      <input
        className={styles.input}
        id={value}
        name={name}
        onChange={onChange}
        type="checkbox"
        value={value}
      />
      <label
        htmlFor={name}
        style={label}
      >
        {value}
      </label>
    </div>
  );
}

export default FormCheckBox;
