import Link from 'next/link';
import { cx } from 'common/utils/cva';
import { s3 } from 'common/constants/urls';
import HamburgerIcon from 'static/images/icons/hamburger.svg';
import CloseButton from 'components/Buttons/CloseButton/CloseButton';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import Image from 'next/image';

export interface NavLink {
  /** String used as the link label. */
  name: string;

  /** String used for the URL. */
  href: string;

  /** Adds nested sublinks. */
  sublinks?: NavLink[];

  /** Indicates if the link is external. */
  isExternal?: boolean;
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
  navItems: NavLink[];
}

const linkClassName = cx(
  'text-white fill-white transition-all duration-200 ease-linear',
  'text-3xl cursor-pointer no-underline outline-none',
  'hover:text-primary hover:fill-primary',
  'focus-visible:text-primary focus-visible:fill-primary',
);

function NavMobile({ isOpen, openMenu, closeMenu, navItems }: NavMobilePropsType) {
  return (
    <header
      className={cx(
        'fixed flex items-center justify-between',
        'w-full h-20 bg-white z-50 px-4 sm:hidden',
      )}
      data-testid="Mobile Nav Container"
    >
      <Link href="/">
        <button className="relative" type="button" name="dropdown">
          <div className="h-11 w-56">
            <Image
              src={`${s3}branding/logos/small-blue-logo.png`}
              alt="Operation Code Logo"
              layout="fill"
              className="object-contain"
            />
          </div>
        </button>
      </Link>

      <button
        className="cursor-pointer"
        onClick={openMenu}
        type="button"
        name="dropdown"
        data-testid="Hamburger Button"
      >
        <ScreenReaderOnly>Open Menu</ScreenReaderOnly>
        <HamburgerIcon className="size-9" />
      </button>

      {isOpen && (
        <nav
          className={cx('absolute inset-0 bg-secondary/95', 'w-full h-dvh overflow-auto')}
          data-testid="Mobile Nav"
        >
          <CloseButton onClick={closeMenu} theme="white" />
          <ul className="py-16 px-8 space-y-8">
            <li key="Home">
              <Link href="/">
                <a className={linkClassName}>Home</a>
              </Link>
            </li>
            {navItems.map(navlink => (
              <li key={navlink.name}>
                <Link href={navlink.href}>
                  <a className={linkClassName}>{navlink.name}</a>
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
