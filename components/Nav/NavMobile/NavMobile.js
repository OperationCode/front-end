import React from 'react';
import Link from 'next/link';
import { func, bool, string, arrayOf, shape } from 'prop-types';
import classNames from 'classnames';
import { s3 } from 'common/constants/urls';
import HamburgerIcon from 'static/images/icons/hamburger.svg';
import CloseButton from 'components/Buttons/CloseButton/CloseButton';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import styles from './NavMobile.module.css';

NavMobile.propTypes = {
  isOpen: bool.isRequired,
  openMenu: func.isRequired,
  closeMenu: func.isRequired,
  navItems: arrayOf(
    shape({
      href: string.isRequired,
      name: string.isRequired,
      sublinks: arrayOf(
        shape({
          name: string.isRequired,
          href: string.isRequired,
        }),
      ),
    }),
  ).isRequired,
};

function NavMobile({ isOpen, openMenu, closeMenu, navItems }) {
  return (
    <header className={styles.NavMobile} data-testid="Mobile Nav Container">
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
        data-testid="Hamburger Button"
      >
        <ScreenReaderOnly>Open Menu</ScreenReaderOnly>
        <HamburgerIcon className={styles.hamburgerIcon} />
      </button>

      {isOpen && (
        <nav data-testid="Mobile Nav">
          <CloseButton onClick={closeMenu} theme="white" />

          <ul className={styles.ul}>
            <li className={styles.li} key="Home">
              <Link href="/">
                <a className={styles.link} name="dropdown">
                  Home
                </a>
              </Link>
            </li>
            {navItems.map(navlink => (
              <li className={styles.li} key={navlink.name}>
                <Link href={navlink.href}>
                  <a className={styles.link}>{navlink.name}</a>
                </Link>
              </li>
            ))}
            <li className={styles.li} key="Donate">
              <Link href="/donate">
                <a className={styles.link}>Donate</a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default NavMobile;
