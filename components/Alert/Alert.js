import React from 'react';
import { bool, func, node, oneOf, string } from 'prop-types';
import classNames from 'classnames';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import styles from './Alert.css';

Alert.propTypes = {
  children: node.isRequired,
  className: string,
  isOpen: bool,
  onToggle: func,
  type: oneOf(['error', 'success', 'warning']),
};

Alert.defaultProps = {
  className: undefined,
  isOpen: true,
  onToggle: undefined,
  type: 'error',
};

function Alert({ children, className, isOpen, onToggle, type }) {
  return (
    <div
      className={classNames(styles.Alert, className, {
        [styles.error]: type === 'error',
        [styles.success]: type === 'success',
        [styles.warning]: type === 'warning',
        [styles.visible]: isOpen,
      })}
      role="alert"
    >
      {Boolean(onToggle) && isOpen ? (
        <button type="button" className={styles.alertCloseButton} onClick={onToggle}>
          <ScreenReaderOnly>Close Alert</ScreenReaderOnly>
          <span>&times;</span>
        </button>
      ) : null}
      {children}
    </div>
  );
}

export default Alert;
