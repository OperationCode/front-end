import React, { Component } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { donateLink, s3 } from 'common/constants/urls';
import { navItems } from 'common/constants/navigation';
import flattenDepth from 'lodash/flattenDepth';
import HamburgerIcon from 'static/images/icons/hamburger.svg';
import CloseButton from 'components/_common_/CloseButton/CloseButton';
import styles from './NavMobile.css';

export default class NavMobile extends Component {
  state = {
    isDropDownVisible: false,
  };

  openDropDown = () => this.setState({ isDropDownVisible: true });

  closeDropDown = () => this.setState({ isDropDownVisible: false });

  render() {
    const { isDropDownVisible } = this.state;

    const links = flattenDepth(navItems.map(navItem => [navItem, navItem.sublinks]), 2);

    return (
      <header className={styles.NavMobile}>
        <Link href="/">
          <button
            className={classNames(styles.button, styles.logoButton)}
            type="button"
            name="dropdown"
          >
            <img
              src={`${s3}branding/logos/small-blue-logo.png`}
              alt="Operation Code Logo"
              className={styles.logo}
            />
          </button>
        </Link>

        <button
          className={classNames(styles.button, styles.hamburger)}
          onClick={this.openDropDown}
          type="button"
          name="dropdown"
        >
          <HamburgerIcon className={styles.hamburgerIcon} />
        </button>

        {isDropDownVisible && (
          <nav className={styles.dropdown}>
            <CloseButton onClick={this.closeDropDown} theme="white" />

            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link href="/">
                  <button
                    className={classNames(styles.button, styles.link)}
                    onClick={this.closeDropDown}
                    type="button"
                    name="dropdown"
                  >
                    Home
                  </button>
                </Link>
              </li>
              {links.map(navlink => (
                <li className={styles.li} key={navlink.name}>
                  <Link href={navlink.href}>
                    <button
                      className={classNames(styles.button, styles.link)}
                      onClick={this.closeDropDown}
                      type="button"
                      name="dropdown"
                    >
                      {navlink.name}
                    </button>
                  </Link>
                </li>
              ))}
              <li className={styles.li}>
                <Link href={donateLink}>
                  <button
                    className={classNames(styles.button, styles.link)}
                    onClick={this.closeDropDown}
                    type="button"
                    name="dropdown"
                  >
                    Donate
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    );
  }
}
