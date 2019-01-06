import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScreenReaderOnly.css';

ScreenReaderOnly.propTypes = {
  children: PropTypes.string.isRequired,
};

export default function ScreenReaderOnly({ children }) {
  return <span className={styles.ScreenReaderOnly}>{children}</span>;
}
