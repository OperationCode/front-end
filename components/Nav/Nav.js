import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Router from 'next/router';
import { donateLink, s3 } from 'common/constants/urls';
import {
  loggedInNavItems,
  loggedOutNavItems,
  mobileLoggedInNavItems,
  mobileLoggedOutNavItems,
} from 'common/constants/navigation';
import NavListItem from 'components/Nav/NavListItem/NavListItem';
import NavMobile from 'components/Nav/NavMobile/NavMobile';
import { hasValidAuthToken } from 'common/utils/cookie-utils';
import styles from './Nav.css';

export const Nav = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const openMobileMenu = () => {
    setMobileNavOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    setMobileNavOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    Router.events.on('routeChangeComplete', closeMobileMenu);

    return () => {
      Router.events.off('routeChangeComplete', closeMobileMenu);
    };
  }, []);

  const isLoggedIn = hasValidAuthToken();

  const mobileNavItems = isLoggedIn ? mobileLoggedInNavItems : mobileLoggedOutNavItems;

  // non-mobile
  const navItems = isLoggedIn ? loggedInNavItems : loggedOutNavItems;

  return (
    <>
      {/* Always rendered, but conditionally displayed via media query */}
      <NavMobile
        isOpen={isMobileNavOpen}
        closeMenu={closeMobileMenu}
        openMenu={openMobileMenu}
        navItems={mobileNavItems}
      />

      <header className={styles.NavDesktop}>
        <div className={styles.desktopNavContainer} data-testid="Desktop Nav Container">
          <nav data-testid="Desktop Nav">
            <Link href="/" key="Home" prefetch={false}>
              <a className={classNames(styles.logoLink, styles.link)}>
                <img
                  src={`${s3}branding/logos/small-blue-logo.png`}
                  alt="Operation Code Logo"
                  className={styles.logo}
                />
              </a>
            </Link>

            <ul className={styles.link}>
              {navItems.map(navItem => (
                <NavListItem key={navItem.name} {...navItem} />
              ))}
              <li key="Donate">
                <a href={donateLink} className={classNames(styles.link, styles.donateLink)}>
                  <span>Donate</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
