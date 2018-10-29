import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Badge.css';

Badge.propTypes = {
  svgComponent: PropTypes.element.isRequired,
  children: PropTypes.element,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
};

Badge.defaultProps = {
  children: undefined,
  label: '',
  labelClassName: undefined,
};

function Badge({ children, svgComponent, label, labelClassName }) {
  return (
    <div className={styles.Badge}>
      <div className={styles.iconContainer}>{svgComponent}</div>
      <div className={classNames(styles.centerText, styles.label, labelClassName)}>{label}</div>
      {children}
    </div>
  );
}

export default Badge;
