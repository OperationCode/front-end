import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Badge.css';

Badge.propTypes = {
  svgComponent: PropTypes.element.isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
};

Badge.defaultProps = {
  className: undefined,
  labelClassName: undefined,
};

function Badge({ svgComponent, className, label, labelClassName }) {
  return (
    <div className={classNames(className, styles.Badge)}>
      <div className={styles.iconContainer}>{svgComponent}</div>
      <div className={classNames(styles.centerText, styles.label, labelClassName)}>{label}</div>
    </div>
  );
}

export default Badge;
