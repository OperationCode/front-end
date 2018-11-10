import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Badge.css';

Badge.propTypes = {
  className: PropTypes.string,
  svgComponent: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
};

Badge.defaultProps = {
  className: undefined,
};

function Badge({ className, svgComponent, label }) {
  return (
    <div className={classNames(styles.Badge, className)}>
      <div className={styles.iconContainer}>{svgComponent}</div>
      <div className={classNames(styles.centerText, styles.label)}>{label}</div>
    </div>
  );
}

export default Badge;
