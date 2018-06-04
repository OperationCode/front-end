import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.css';

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    color: PropTypes.oneOf(['blue', 'red']),
    href: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    color: 'blue',
  };

  onClick = event => {
    this.props.onClick;
  };

  render() {
    const { props } = this;

    return (
      <button
        children={props.children}
        className={classNames(styles.button, { [props.className]: props.className })}
        onClick={props.onClick}
        style={{ backgroundColor: `${props.color}` }}
      />
    );
  }
}

export default Button;
