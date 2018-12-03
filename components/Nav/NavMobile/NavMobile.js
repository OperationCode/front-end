import React, { Component } from 'react';
import Link from 'next/link';
import { donateLink, s3 } from 'common/constants/urls';
import { navItems } from 'common/constants/navigation';
import HamburgerIcon from 'static/images/icons/hamburger.svg';
import styles from './NavMobile.css';

export default class NavMobile extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.links = this.links.bind(this);
  }

  state = {
    dropdownShow: false,
  };

  // flattens navItems
  links = () => navItems.map(navItem => [navItem, navItem.sublinks]).flat(2);

  toggleDropdown() {
    this.setState(prevState => ({ dropdownShow: !prevState.dropdownShow }));
  }

  handleOnClick() {
    this.toggleDropdown();
  }

  handleMouseLeave() {
    this.toggleDropdown();
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.toggleDropdown();
    }
  }

  render() {
    const { state, handleOnClick, handleMouseLeave, handleKeyPress, links } = this;
    const { dropdownShow } = state;

    return (
      <header>
        <div className={styles.NavMobile}>
          <Link href="/">
            <img
              src={`${s3}branding/logos/small-blue-logo.png`}
              alt="operation code logo"
              className={styles.logo}
            />
          </Link>

          <HamburgerIcon
            className={styles.icon}
            onClick={handleOnClick}
            onKeyPress={handleKeyPress}
            role="button"
            tabIndex={0}
          />

          {dropdownShow && (
            <div className={styles.dropdown} onMouseLeave={handleMouseLeave}>
              <ul className={styles.ul}>
                {links().map(navlink => (
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
            </div>
          )}
        </div>
      </header>
    );
  }
}
