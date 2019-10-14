import React from 'react';
import { bool, func, oneOf } from 'prop-types';
import classNames from 'classnames';
import PlusIcon from 'static/images/icons/plus.svg';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import styles from './CloseButton.css';

CloseButton.propTypes = {
  disabled: bool,
  onClick: func.isRequired,
  theme: oneOf(['primary', 'secondary', 'white']),
};

CloseButton.defaultProps = {
  disabled: false,
  theme: 'secondary',
};

export default function CloseButton({ disabled, onClick, theme }) {
  return (
    <button
      className={styles.CloseButton}
      data-testid="Close Button"
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <ScreenReaderOnly>Close</ScreenReaderOnly>

      <PlusIcon className={classNames(styles.icon, styles[theme])} />
    </button>
  );
}
