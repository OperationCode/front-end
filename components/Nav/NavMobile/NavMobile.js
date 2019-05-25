import React, { Component } from 'react';
import Link from 'next/link';
import { func, bool } from 'prop-types';
import classNames from 'classnames';
import { donateLink, s3 } from 'common/constants/urls';
import { navItems } from 'common/constants/navigation';
import flattenDepth from 'lodash/flattenDepth';
import HamburgerIcon from 'static/images/icons/hamburger.svg';
import CloseButton from 'components/CloseButton/CloseButton';
import styles from './NavMobile.css';

export default class NavMobile extends Component {
  render() {
    const { isMenuVisible, openMenu, closeMenu } = this.props;

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
          onClick={openMenu}
          type="button"
          name="dropdown"
        >
          <HamburgerIcon className={styles.hamburgerIcon} />
        </button>

        {isMenuVisible && (
          <nav className={styles.dropdown}>
            <CloseButton onClick={closeMenu} theme="white" />

            <ul className={styles.ul}>
              <li className={styles.li}>
                <Link href="/">
                  <a className={styles.link} name="dropdown">
                    Home
                  </a>
                </Link>
              </li>
              {links.map(navlink => (
                <li className={styles.li} key={navlink.name}>
                  <Link href={navlink.href}>
                    <a className={styles.link}>{navlink.name}</a>
                  </Link>
                </li>
              ))}
              <li className={styles.li}>
                <Link href={donateLink}>
                  <a className={styles.link}>Donate</a>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    );
  }
}

NavMobile.propTypes = {
  isMenuVisible: bool.isRequired,
  openMenu: func.isRequired,
  closeMenu: func.isRequired,
};
