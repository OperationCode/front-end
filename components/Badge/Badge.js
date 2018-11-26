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
  isImageFirst: PropTypes.bool,
};

Badge.defaultProps = {
  className: undefined,
  isImageFirst: true,
};

function Badge({ className, icon, isImageFirst, label }) {
  return (
    <div className={classNames(styles.Badge, className)}>
      {isImageFirst ? (
        <>
          <figure className={styles.iconContainer}>{icon}</figure>
          <figcaption className={styles.label}>{label}</figcaption>
        </>
      ) : (
        <>
          <figure className={styles.label}>{label}</figure>
          <figcaption className={styles.iconContainer}>{icon}</figcaption>
        </>
      )}
    </div>
  );
}

export default Badge;
