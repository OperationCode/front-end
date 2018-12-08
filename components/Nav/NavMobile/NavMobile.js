import React, { Component } from 'react';
import Link from 'next/link';
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
          <img
            src={`${s3}branding/logos/small-blue-logo.png`}
            alt="Operation Code Logo"
            className={styles.logo}
          />
        </Link>

        <button
          className={styles.hamburgerButtonWrapper}
          type="button"
          name="dropdown"
          onClick={this.openDropDown}
        >
          <HamburgerIcon className={styles.hamburgerIcon} />
        </button>

        {isDropDownVisible && (
          <nav className={styles.dropdown}>
            <CloseButton onClick={this.closeDropDown} theme="white" />

            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link href="/">
                  <a className={styles.a}>Home</a>
                </Link>
              </li>
              {links.map(navlink => (
                <li className={styles.li} key={navlink.name}>
                  <Link href={navlink.href}>
                    <a className={styles.a}>{navlink.name}</a>
                  </Link>
                </li>
              ))}
              <li className={styles.li}>
                <Link href={donateLink}>
                  <a className={styles.a}>Donate</a>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    );
  }
}
