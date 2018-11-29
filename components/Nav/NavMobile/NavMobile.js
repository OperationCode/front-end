import React, { Component } from 'react';
import Link from 'next/link';
import { s3 } from 'common/constants/urls';
import { navItems } from 'common/constants/navigation';
import HamburgerIcon from 'static/images/icons/hamburger.svg';
import styles from './NavMobile.css';

export default class NavMobile extends Component {
  constructor(props) {
    super(props);
    this.handleOnMouseOver = this.handleOnMouseOver.bind(this);
    this.links = this.links.bind(this);
  }

  state = {
    dropdownShow: false,
  };

  // navItems is dumb
  links = () => navItems.map(navItem => [navItem, navItem.sublinks]).flat(2);

  toggleDropdown() {
    this.setState(prevState => ({ dropdownShow: !prevState.dropdownShow }));
  }

  handleOnMouseOver() {
    this.toggleDropdown();
  }

  render() {
    const { state, handleOnMouseOver, links } = this;
    const { dropdownShow } = state;

    return (
      <header>
        <div className={styles.NavMobile}>
          <img
            src={`${s3}branding/logos/small-blue-logo.png`}
            alt="operation code logo"
            className={styles.logo}
          />

          <HamburgerIcon
            className={styles.icon}
            onMouseOver={handleOnMouseOver}
            onFocus={() => {}}
          />

          {dropdownShow && (
            <div className={styles.dropdown}>
              <ul className={styles.ul}>
                {links().map(navlink => (
                  <li className={styles.li}>
                    <Link href={navlink.href}>
                      <a className={styles.a}>{navlink.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>
    );
  }
}
