'use client';

import { useState, useEffect, useEffectEvent } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Logo from 'public/static/images/logo.svg';

import { desktopNavItems, mobileNavItems } from 'common/constants/navigation';
import NavMobile from 'components/Nav/NavMobile/NavMobile';
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

      <header className="absolute top-4 z-10 hidden w-full font-family-bebas uppercase lg:block">
        <div className="mx-auto max-w-7xl px-4" data-testid="Desktop Nav Container">
          <nav
            className="flex h-16 justify-between rounded-sm bg-white text-lg font-bold"
            data-testid="Desktop Nav"
          >
            <Link
              href="/"
              key="Home"
              className="mx-4 flex items-center"
              onContextMenu={(event) => {
                event.preventDefault();
                router.push('/branding');
              }}
            >
              <Logo className="w-56 fill-white" />
            </Link>

            <ul className="flex">
              {desktopNavItems.map((navItem) => (
                <NavListItem key={navItem.name} {...navItem} />
              ))}

              {/* stylistic one-off */}
              <li key="Donate">
                <Link
                  href="/donate"
                  className={cx(
                    'bg-primary px-8 font-bold text-secondary no-underline',
                    'flex h-full items-center justify-center',
                    'transition-colors duration-200 ease-linear',
                    `cursor-pointer rounded-r-sm hover:text-white focus-visible:text-white`,
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
