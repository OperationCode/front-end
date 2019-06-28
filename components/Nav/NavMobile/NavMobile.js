import React, { Component } from 'react';
import Link from 'next/link';
import { func, bool, string, arrayOf, shape } from 'prop-types';
import classNames from 'classnames';
import { donateLink, s3 } from 'common/constants/urls';
import HamburgerIcon from 'static/images/icons/hamburger.svg';
import CloseButton from 'components/CloseButton/CloseButton';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import styles from './NavMobile.css';

export default class NavMobile extends Component {
  static propTypes = {
    isOpen: bool.isRequired,
    openMenu: func.isRequired,
    closeMenu: func.isRequired,
    navItems: arrayOf(
      shape({
        href: string.isRequired,
        name: string.isRequired,
        shouldPrefetch: bool,
        sublinks: arrayOf(
          shape({
            name: string.isRequired,
            href: string.isRequired,
          }),
        ),
      }),
    ).isRequired,
  };

  render() {
    const { isOpen, openMenu, closeMenu, navItems } = this.props;

    return (
      <header className={styles.NavMobile}>
        <Link href="/" prefetch={false}>
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
          <ScreenReaderOnly>Open Menu</ScreenReaderOnly>
          <HamburgerIcon className={styles.hamburgerIcon} />
        </button>

        {isOpen && (
          <nav className={styles.dropdown}>
            <CloseButton onClick={closeMenu} theme="white" />

            <ul className={styles.ul}>
              <li className={styles.li} key="Home">
                <Link href="/" prefetch={false}>
                  <a className={styles.link} name="dropdown">
                    Home
                  </a>
                </Link>
              </li>
              {navItems.map(navlink => (
                <li className={styles.li} key={navlink.name}>
                  <Link href={navlink.href} prefetch={navlink.shouldPrefetch}>
                    <a className={styles.link}>{navlink.name}</a>
                  </Link>
                </li>
              ))}
              <li className={styles.li} key="Donate">
                <Link href={donateLink} prefetch={false}>
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
