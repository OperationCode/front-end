import React from 'react';
import { bool, func, oneOf } from 'prop-types';
import classNames from 'classnames';
import { CLOSE_BUTTON } from 'common/constants/testIDs';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import PlusIcon from 'static/images/icons/plus.svg';
import styles from './CloseButton.module.css';

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
      data-testid={CLOSE_BUTTON}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <ScreenReaderOnly>Close</ScreenReaderOnly>

      <PlusIcon className={classNames(styles.icon, styles[theme])} />
    </button>
  );
}
