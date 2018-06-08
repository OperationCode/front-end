import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.css';

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(['primary', 'secondary', 'grey', 'gray']),
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Button.defaultProps = {
  className: undefined,
  children: undefined,
  color: 'primary',
  fullWidth: false,
  onClick: undefined,
  tabIndex: 0,
};

function Button(props) {
  return (
    <button
      className={classNames(styles.button, props.className, {
        [styles.primary]: props.color === 'primary',
        [styles.secondary]: props.color === 'secondary',
        [styles.gray]: props.color === 'gray' || props.color === 'grey',
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
