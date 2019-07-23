import React from 'react';
import { func, node, oneOf, string } from 'prop-types';
import classNames from 'classnames';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import styles from './Alert.css';

Alert.propTypes = {
  children: node.isRequired,
  className: string,
  onClose: func,
  type: oneOf(['error', 'success', 'warning']).isRequired,
};

Alert.defaultProps = {
  className: undefined,
  onClose: undefined,
};

function Alert({ children, className, onClose, type }) {
  return (
    <div
      className={classNames(styles.Alert, className, {
        [styles.error]: type === 'error',
        [styles.success]: type === 'success',
        [styles.warning]: type === 'warning',
      })}
      role="alert"
    >
      {/* TODO: Use CloseButton */}
      {Boolean(onClose) && (
        <button
          type="button"
          className={styles.alertCloseButton}
          onClick={onClose}
          data-testid="Close Alert Button"
        >
          <ScreenReaderOnly>Close Alert</ScreenReaderOnly>
          <span>&times;</span>
        </button>
      )}
      {children}
    </div>
  );
}

export default Alert;
