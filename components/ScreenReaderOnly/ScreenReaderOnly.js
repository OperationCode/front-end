import React from 'react';
import { node } from 'prop-types';
import { SCREEN_READER_ONLY } from 'common/constants/testIDs';
import styles from './ScreenReaderOnly.module.css';

ScreenReaderOnly.propTypes = {
  children: node.isRequired,
};

export default function ScreenReaderOnly({ children }) {
  return (
    <span className={styles.ScreenReaderOnly} data-testid={SCREEN_READER_ONLY}>
      {children}
    </span>
  );
}
