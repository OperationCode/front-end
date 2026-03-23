import Link from 'next/link';
import Image from 'next/image';
import { cx } from '@/common/utils/cva';
import { s3 } from '@/common/constants/urls';
import HamburgerIcon from '@/static/images/icons/hamburger.svg';
import CloseButton from '@/components/Buttons/CloseButton/CloseButton';
import ScreenReaderOnly from '@/components/ScreenReaderOnly/ScreenReaderOnly';

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
  'fill-white text-white transition-all duration-200 ease-linear',
  'cursor-pointer text-3xl no-underline outline-none',
  'hover:fill-primary hover:text-primary',
  'focus-visible:fill-primary focus-visible:text-primary',
);

function NavMobile({ isOpen, openMenu, closeMenu, navItems }: NavMobilePropsType) {
  return (
    <header
      className={cx(
        'fixed flex items-center justify-between font-family-bebas uppercase',
        `z-50 h-20 w-full bg-white px-4 lg:hidden`,
      )}
      data-testid="Mobile Nav Container"
    >
      <Link href="/">
        <button className="relative" type="button" name="dropdown">
          <div className="h-11 w-56">
            <Image
              src={`${s3}branding/logos/small-blue-logo.png`}
              alt="Operation Code Logo"
              fill
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
          className={cx('absolute inset-0 bg-secondary/95', `h-dvh w-full overflow-auto`)}
          data-testid="Mobile Nav"
        >
          <CloseButton onClick={closeMenu} theme="white" />
          <ul className="space-y-8 px-8 py-16">
            <li key="Home">
              <Link href="/" className={linkClassName}>
                Home
              </Link>
            </li>
            {navItems.map((navlink) => (
              <li key={navlink.name}>
                <Link href={navlink.href} className={linkClassName}>
                  {navlink.name}
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
