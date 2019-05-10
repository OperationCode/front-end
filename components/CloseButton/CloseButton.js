import classNames from 'classnames';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import { bool, func, oneOf } from 'prop-types';
import React, { Component } from 'react';
import PlusIcon from 'static/images/icons/plus.svg';
import styles from './CloseButton.css';

export default class CloseButton extends Component {
  static propTypes = {
    disabled: bool,
    onClick: func.isRequired,
    theme: oneOf(['primary', 'secondary', 'white']),
  };

  static defaultProps = {
    disabled: false,
    theme: 'secondary',
  };

  render() {
    const { disabled, onClick, theme } = this.props;
    return (
      <button className={styles.CloseButton} disabled={disabled} onClick={onClick} type="button">
        <ScreenReaderOnly>Close</ScreenReaderOnly>

        <PlusIcon className={classNames(styles.icon, styles[theme])} />
      </button>
    );
  }
}
