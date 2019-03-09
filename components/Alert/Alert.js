import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ScreenReaderOnly from 'components/_common_/ScreenReaderOnly/ScreenReaderOnly';
import styles from './Alert.css';

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onToggle: PropTypes.func,
  type: PropTypes.oneOf(['error', 'success', 'warning']),
};

Alert.defaultProps = {
  isOpen: true,
  onToggle: undefined,
  type: 'error',
};

function Alert({ children, isOpen, onToggle, type }) {
  return (
    <div
      className={classNames(styles.Alert, {
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
