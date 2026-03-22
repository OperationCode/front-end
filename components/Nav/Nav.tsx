'use client';

import { useState, useEffect, useEffectEvent } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import Logo from 'public/static/images/logo.svg';

import { desktopNavItems, mobileNavItems } from 'common/constants/navigation';
import NavMobile from 'components/Nav/NavMobile/NavMobile';
import dynamic from 'next/dynamic';
import { cx } from 'common/utils/cva';

const NavListItem = dynamic(() => import('components/Nav/NavListItem/NavListItem'), { ssr: false });

export const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const openMobileMenu = () => {
    setMobileNavOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    setMobileNavOpen(false);
    document.body.style.overflow = 'auto';
  };

  const closeMobileMenuEvent = useEffectEvent(() => {
    closeMobileMenu();
  });

  useEffect(() => {
    closeMobileMenuEvent();
  }, [pathname]);

  return (
    <>
      {/* Always rendered, but conditionally displayed via media query */}
      <NavMobile
        isOpen={isMobileNavOpen}
        closeMenu={closeMobileMenu}
        openMenu={openMobileMenu}
        navItems={mobileNavItems}
      />

      <header className="hidden absolute top-4 w-full z-10 lg:block uppercase font-family-bebas">
        <div className="mx-auto max-w-7xl px-4" data-testid="Desktop Nav Container">
          <nav
            className="font-bold h-16 bg-white rounded-sm flex justify-between text-lg"
            data-testid="Desktop Nav"
          >
            <Link
              href="/"
              key="Home"
              className="mx-4 flex items-center"
              onContextMenu={event => {
                event.preventDefault();
                router.push('/branding');
              }}
            >
              <Logo className="w-56 fill-white" />
            </Link>

            <ul className="flex">
              {desktopNavItems.map(navItem => (
                <NavListItem key={navItem.name} {...navItem} />
              ))}

              {/* stylistic one-off */}
              <li key="Donate">
                <Link
                  href="/donate"
                  className={cx(
                    'px-8 font-bold bg-primary text-secondary no-underline',
                    'flex items-center justify-center h-full',
                    'transition-colors duration-200 ease-linear',
                    'rounded-r-sm cursor-pointer hover:text-white focus-visible:text-white',
                  )}
                >
                  Donate
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
