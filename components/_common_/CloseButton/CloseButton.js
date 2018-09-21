import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from 'static/images/icons/close_icon.svg';
import styles from './CloseButton.css';

export default class CloseButton extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    disabled: false,
  };

  render() {
    const { disabled, onClick } = this.props;

    return (
      <button className={styles.CloseButton} disabled={disabled} onClick={onClick} type="button">
        <CloseIcon className={styles.icon} />
      </button>
    );
  }
}
