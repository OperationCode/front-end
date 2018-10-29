import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { donateLink, s3 } from 'common/constants/urls';
import { navItems } from 'common/constants/navigation';
import NavListItem from 'components/Nav/NavListItem/NavListItem';
import styles from './Nav.css';

function Nav() {
  return (
    <nav className={styles.Nav}>
      <Link href="/">
        <a className={classNames(styles.logoLink, styles.link)}>
          <img
            src={`${s3}branding/logos/small-blue-logo.png`}
            alt="Operation Code Logo"
            className={styles.logo}
          />
        </a>
      </Link>

      <ul className={styles.link}>
        {navItems.map(navLink => (
          // NavListItem component API matches navItems structure
          <NavListItem key={navLink.name} {...navLink} />
        ))}

        <li>
          <Link href={donateLink}>
            <a className={classNames(styles.link, styles.donateLink)}>
              <span>Donate</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
