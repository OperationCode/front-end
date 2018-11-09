import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './LinkButton.css';

LinkButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  href: PropTypes.string.isRequired,
};

export default function LinkButton({ children, href }) {
  return (
    <Link href={href}>
      <a className={styles.LinkButton}>{children}</a>
    </Link>
  );
}
