import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Badge.css';

Badge.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
};

Badge.defaultProps = {
  label: '',
  labelClassName: '',
};

function Badge({ icon, label, labelClassName }) {
  return (
    <div className={styles.Badge}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={classNames(styles.centerText, styles.label, labelClassName)}>{label}</div>
    </div>
  );
}

export default Badge;
