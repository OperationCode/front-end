import React, { Component } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Router from 'next/router';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { donateLink, s3 } from 'common/constants/urls';
import { loggedInNavItems, loggedOutNavItems } from 'common/constants/navigation';
import { isDesktopSelector } from 'store/screenSize/selectors';
import NavListItem from 'components/Nav/NavListItem/NavListItem';
import NavMobile from 'components/Nav/NavMobile/NavMobile';
import styles from './Nav.css';

export class Nav extends Component {
  state = {
    isMobileMenuVisible: false,
  };

  componentDidMount() {
    Router.events.on('routeChangeComplete', this.closeMobileMenu);
  }

  componentWillUnmount() {
    Router.events.off('routeChangeComplete', this.closeMobileMenu);
  }

  openMobileMenu = () => {
    this.setState({ isMobileMenuVisible: true });
  };

  closeMobileMenu = () => {
    this.setState({ isMobileMenuVisible: false });
  };

  render() {
    const { isDesktopView, isLoggedIn } = this.props;
    const { isMobileMenuVisible } = this.state;

    const navItems = isLoggedIn ? loggedInNavItems : loggedOutNavItems;

    if (!isDesktopView) {
      return (
        <NavMobile
          isMenuVisible={isMobileMenuVisible}
          closeMenu={this.closeMobileMenu}
          openMenu={this.openMobileMenu}
          navItems={navItems}
        />
      );
    }

    return (
      <header className={styles.header}>
        <div className={styles.navContainer}>
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
              {navItems.map(navItem => (
                // NavListItem component API matches navItems structure
                <NavListItem key={navItem.name} {...navItem} />
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
        </div>
      </header>
    );
  }
}

Nav.propTypes = {
  isDesktopView: bool,
  isLoggedIn: bool,
};

Nav.defaultProps = {
  isDesktopView: false,
  isLoggedIn: false,
};

const mapStateToProps = state => ({
  isDesktopView: isDesktopSelector(state),
  isLoggedIn: state.isLoggedIn,
});

export default compose(connect(mapStateToProps))(Nav);
