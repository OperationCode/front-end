import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Badge.css';

Badge.propTypes = {
  className: PropTypes.string,
  svgComponent: PropTypes.element.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

Badge.defaultProps = {
  className: undefined,
};

function Badge({ className, svgComponent, label }) {
  return (
    <div className={classNames(styles.Badge, className)}>
      <div className={styles.iconContainer}>{svgComponent}</div>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default Badge;
