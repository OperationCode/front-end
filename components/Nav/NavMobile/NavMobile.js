import React, { Component } from 'react';
import { s3 } from 'common/constants/urls';
import { navItems } from 'common/constants/navigation';
// import PropTypes from 'prop-types';
import HamburgerIcon from 'static/images/icons/hamburger.svg';
import styles from './NavMobile.css';

export default class NavMobile extends Component {
  // static propTypes = {
  //   navItems: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       name: PropTypes.string.isRequired,
  //       href: PropTypes.string.isRequired,
  //       shouldPrefetch: PropTypes.bool.isRequired,
  //       sublinks: PropTypes.arrayOf(
  //         PropTypes.shape({
  //           name: PropTypes.string,
  //           href: PropTypes.string,
  //         }),
  //       ).isRequired,
  //     }),
  //   ).isRequired,
  // };

  constructor(props) {
    super(props);
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
  }

  state = {
    dropdownShow: false,
  };

  toggleDropdown() {
    this.setState(prevState => ({ dropdownShow: !prevState.dropdownShow }));
  }

  handleOnMouseOver() {
    this.toggleDropdown();
  }

  render() {
    const { state, handleOnMouseOver } = this;
    const { dropdownShow } = state;

    return (
      <div className={styles.NavMobile}>
        <img
          src={`${s3}branding/logos/small-blue-logo.png`}
          alt="operation code logo"
          className={styles.logo}
        />
        <ul className={styles.menu} onMouseOver={handleOnMouseOver} onFocus={() => {}}>
          <HamburgerIcon className={styles.icon} />
          {dropdownShow && navItems}
        </ul>
      </div>
    );
  }
}
