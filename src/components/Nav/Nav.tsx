'use client';

import { useState, useRef, useEffect, useEffectEvent } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Logo from '@/static/images/logo.svg';

import { desktopNavItems, mobileNavItems } from '@/lib/constants/navigation';
import NavMobile from '@/components/Nav/NavMobile/NavMobile';
import { cn } from '@/lib/utils';

const NavListItem = dynamic(() => import('@/components/Nav/NavListItem/NavListItem'), {
  ssr: false,
});

export const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const previousPathnameRef = useRef(pathname);

  // eslint-disable-next-line @eslint-react/set-state-in-effect
  const closeMobileNav = useEffectEvent(() => setIsMobileNavOpen(false));

  useEffect(() => {
    if (previousPathnameRef.current !== pathname) {
      previousPathnameRef.current = pathname;
      closeMobileNav();
    }
  }, [pathname]);

  return (
    <>
      <NavMobile isOpen={isMobileNavOpen} setOpen={setIsMobileNavOpen} navItems={mobileNavItems} />

      <header className="absolute top-4 z-10 hidden w-full font-family-bebas uppercase lg:block">
        <div className="mx-auto max-w-7xl px-4" data-testid="Desktop Nav Container">
          <nav
            className="flex h-16 justify-between rounded-sm bg-white text-lg font-bold shadow-sm backdrop-blur-sm"
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

              <li key="Donate">
                <Link
                  href="/donate"
                  className={cn(
                    'bg-primary px-8 font-bold text-secondary no-underline',
                    'flex h-full items-center justify-center',
                    'transition-colors duration-200 ease-linear',
                    'cursor-pointer rounded-r-sm hover:text-white focus-visible:text-white',
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
