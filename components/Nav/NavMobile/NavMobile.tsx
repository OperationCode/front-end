import Link from 'next/link';
import { cx } from 'common/utils/cva';
import { s3 } from 'common/constants/urls';
import HamburgerIcon from 'static/images/icons/hamburger.svg';
import CloseButton from 'components/Buttons/CloseButton/CloseButton';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import Image from 'next/image';
import styles from './NavMobile.module.css';

interface SublinkType {
  /**
   * String used as the link label.
   */
  name: string;
  /**
   * String used for the URL.
   */
  href: string;
}

interface NavItemType {
  /**
   * String used as the link label.
   */
  name: string;

  /**
   * String used for the URL.
   */
  href: string;
  /**
   * Adds nested sublinks.
   */
  sublinks?: SublinkType[];
}

export interface NavMobilePropsType {
  /**
   * Sets if the mobile navigation is open or closed.
   */
  isOpen: boolean;
  /**
   * Function called when open button is clicked.
   */
  openMenu: () => void;
  /**
   * Function called when close button is clicked.
   */
  closeMenu: () => void;
  /**
   * List of navigations items.
   */
  navItems: NavItemType[];
}

function NavMobile({ isOpen, openMenu, closeMenu, navItems }: NavMobilePropsType) {
  return (
    <header className={styles.NavMobile} data-testid="Mobile Nav Container">
      <Link href="/">
        <button className={cx(styles.button, styles.logoButton)} type="button" name="dropdown">
          <div className={styles.logo}>
            <Image
              src={`${s3}branding/logos/small-blue-logo.png`}
              alt="Operation Code Logo"
              width={224}
              height={42}
            />
          </div>
        </button>
      </Link>

      <button
        className={cx(styles.button, styles.hamburger)}
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
                <a className={styles.link}>Home</a>
              </Link>
            </li>
            {navItems.map(navlink => (
              <li className={styles.li} key={navlink.name}>
                <Link href={navlink.href}>
                  <a className={styles.link}>{navlink.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default NavMobile;
