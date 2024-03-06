import { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import classNames from 'classnames';
import Logo from 'public/static/images/logo.svg';

import { desktopNavItems, mobileNavItems } from 'common/constants/navigation';
import NavMobile from 'components/Nav/NavMobile/NavMobile';
import dynamic from 'next/dynamic';
import UserLogo from '../../public/static/images/icons/FontAwesome/user.svg';
import styles from './Nav.module.css';

const NavListItem = dynamic(() => import('components/Nav/NavListItem/NavListItem'), { ssr: false });

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

  const redirectRightClick = (event_: React.MouseEvent) => {
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
                <Logo className={styles.logo} style={{ width: 224, height: 42 }} fill="#f7f7f7" />
              </a>
            </Link>

            <ul className={styles.link}>
              {desktopNavItems.map(navItem => (
                <NavListItem
                  key={navItem.name}
                  {...navItem}
                  icon={
                    'icon' in navItem && navItem.icon === 'UserLogo' ? (
                      <UserLogo className={styles.navIcon} />
                    ) : null
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
