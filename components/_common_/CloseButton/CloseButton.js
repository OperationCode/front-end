import React, { Component } from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import CloseIcon from 'static/images/icons/close_icon.svg';
=======
import classNames from 'classnames';
import PlusIcon from 'static/images/icons/plus.svg';
import ScreenReaderOnly from 'components/_common_/ScreenReaderOnly/ScreenReaderOnly';
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
import styles from './CloseButton.css';

export default class CloseButton extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
<<<<<<< HEAD
=======
    theme: PropTypes.oneOf(['primary', 'secondary', 'white']),
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
  };

  static defaultProps = {
    disabled: false,
<<<<<<< HEAD
  };

  render() {
    const { disabled, onClick } = this.props;

    return (
      <button className={styles.CloseButton} disabled={disabled} onClick={onClick} type="button">
        <CloseIcon className={styles.icon} />
=======
    theme: 'secondary',
  };

  render() {
    const { disabled, onClick, theme } = this.props;
    return (
      <button className={styles.CloseButton} disabled={disabled} onClick={onClick} type="button">
        <ScreenReaderOnly>Close</ScreenReaderOnly>

        <PlusIcon className={classNames(styles.icon, styles[theme])} />
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      </button>
    );
  }
}
