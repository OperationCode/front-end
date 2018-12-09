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
    <figure className={classNames(styles.Badge, className)}>
      {isImageFirst ? (
        <>
          {icon}
          <figcaption className={styles.label}>{label}</figcaption>
        </>
      ) : (
        <>
          <figcaption className={styles.label}>{label}</figcaption>
          {icon}
        </>
      )}
    </figure>
  );
}

export default Badge;
