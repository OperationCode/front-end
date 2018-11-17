import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Badge.css';

Badge.propTypes = {
  className: PropTypes.string,

  // TODO: Create custom proptype accepting only `<svg>` or `<img>`
  // TODO: Once above is done, add integration tests regarding proptype
  icon: PropTypes.element.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

Badge.defaultProps = {
  className: undefined,
};

function Badge({ className, icon, label }) {
  return (
    <div className={classNames(styles.Badge, className)}>
      <div className={styles.iconContainer}>{icon}</div>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default Badge;
