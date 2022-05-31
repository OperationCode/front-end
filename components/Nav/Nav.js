import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import classNames from 'classnames';
import Image from 'next/image';

import {
  loggedInNavItems,
  loggedOutNavItems,
  mobileLoggedInNavItems,
  mobileLoggedOutNavItems,
} from 'common/constants/navigation';
import NavListItem from 'components/Nav/NavListItem/NavListItem';
import NavMobile from 'components/Nav/NavMobile/NavMobile';
import { hasValidAuthToken } from 'common/utils/cookie-utils';
import UserLogo from '../../public/static/images/icons/FontAwesome/user.svg';
import styles from './Nav.module.css';

const isLoggedIn = hasValidAuthToken();

const mobileNavItems = isLoggedIn ? mobileLoggedInNavItems : mobileLoggedOutNavItems;

// non-mobile
const navItems = isLoggedIn ? loggedInNavItems : loggedOutNavItems;

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

  const redirectRightClick = event_ => {
    event_.preventDefault();
    Router.push('/branding');
  };

  useEffect(() => {
    Router.events.on('routeChangeComplete', closeMobileMenu);

    return () => {
      Router.events.off('routeChangeComplete', closeMobileMenu);
    };
  }, []);

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
            <Link href="/" key="Home">
              <a
                className={classNames(styles.logoLink, styles.link)}
                onContextMenu={redirectRightClick}
              >
                <div className={styles.logo}>
                  <Image src="/logo.svg" alt="Operation Code Logo" width={224} height={42} />
                </div>
              </a>
            </Link>

            <ul className={styles.link}>
              {navItems.map(navItem => (
                <NavListItem
                  key={navItem.name}
                  {...navItem}
                  icon={
                    navItem.icon === 'UserLogo' ? <UserLogo className={styles.navIcon} /> : null
                  }
                />
              ))}

              {/* stylistic one-off */}
              <li key="Donate">
                <Link href="/donate">
                  <a className={classNames(styles.link, styles.donateLink)}>Donate</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
