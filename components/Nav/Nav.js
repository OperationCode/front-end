import React, { Component } from 'react';
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

export class Nav extends Component {
  state = {
    isMobileNavOpen: false,
  };

  componentDidMount() {
    Router.events.on('routeChangeComplete', this.closeMobileMenu);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeComplete', this.closeMobileMenu);
  }

  openMobileMenu = () => {
    this.setState({ isMobileNavOpen: true });
  };

  closeMobileMenu = () => {
    this.setState({ isMobileNavOpen: false });
  };

  render() {
    const { isMobileNavOpen } = this.state;
    const isLoggedIn = hasValidAuthToken();

    const mobileNavItems = isLoggedIn ? mobileLoggedInNavItems : mobileLoggedOutNavItems;

    // non-mobile
    const navItems = isLoggedIn ? loggedInNavItems : loggedOutNavItems;

    return (
      <>
        {/* Always rendered, but conditionally displayed via media query */}
        <NavMobile
          isOpen={isMobileNavOpen}
          closeMenu={this.closeMobileMenu}
          openMenu={this.openMobileMenu}
          navItems={mobileNavItems}
        />

        <header className={styles.NavDesktop} data-testid="Desktop Nav">
          <div className={styles.navContainer}>
            <nav>
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
                  <Link href={donateLink} prefetch={false}>
                    <a className={classNames(styles.link, styles.donateLink)}>
                      <span>Donate</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

export default Nav;
