import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './LinkButton.css';

LinkButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  href: PropTypes.string.isRequired,
  isFilled: PropTypes.bool,
};

LinkButton.defaultProps = {
  isFilled: false,
};

export default function LinkButton({ children, href, isFilled }) {
  return (
    <Link href={href}>
      <a className={classNames(styles.LinkButton, { [styles.filled]: isFilled })}>{children}</a>
    </Link>
  );
}
