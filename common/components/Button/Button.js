import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.css';

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  theme: PropTypes.oneOf(['primary', 'secondary', 'gray']),
};

Button.defaultProps = {
  children: undefined,
  className: undefined,
  fullWidth: false,
  onClick: undefined,
  tabIndex: 0,
  theme: 'primary',
};

function Button({
  className, children, fullWidth, onClick, tabIndex, theme,
}) {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.primary]: theme === 'primary',
        [styles.secondary]: theme === 'secondary',
        [styles.gray]: theme === 'gray',
        [styles.fullWidth]: fullWidth,
      })}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {children}
    </button>
  );
}

export default Button;
