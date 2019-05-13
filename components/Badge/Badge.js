import React from 'react';
import { bool, element, oneOfType, string } from 'prop-types';
import classNames from 'classnames';
import styles from './Badge.css';

Badge.propTypes = {
  className: string,

  // TODO: Create custom proptype accepting only `<svg>` or `<img>`
  // TODO: Once above is done, add integration tests regarding proptype
  icon: element.isRequired,
  label: oneOfType([string, element]).isRequired,
  isImageFirst: bool,
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
