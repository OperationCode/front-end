import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.css';

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.oneOf(['primary', 'secondary', 'gray']),
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Button.defaultProps = {
  className: undefined,
  children: undefined,
  theme: 'primary',
  fullWidth: false,
  onClick: undefined,
  tabIndex: 0,
};

function Button(props) {
  return (
    <button
      className={classNames(styles.button, props.className, {
        [styles.primary]: props.theme === 'primary',
        [styles.secondary]: props.theme === 'secondary',
        [styles.gray]: props.theme === 'gray',
        [styles.fullWidth]: props.fullWidth,
      })}
      onClick={props.onClick}
      tabIndex={props.tabIndex}
    >
      {props.children}
    </button>
  );
}

export default Button;
