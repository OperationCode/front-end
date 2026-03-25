'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { cn } from '@/common/utils/cva';
import { s3 } from '@/common/constants/urls';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import ScreenReaderOnly from '@/components/ScreenReaderOnly/ScreenReaderOnly';

export interface NavLink {
  name: string;
  href: string;
  sublinks?: NavLink[];
  isExternal?: boolean;
}

export interface NavMobilePropsType {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  navItems: NavLink[];
}

const linkClassName = cn(
  'fill-white text-white transition-all duration-200 ease-linear',
  'cursor-pointer text-3xl no-underline outline-none',
  'hover:fill-primary hover:text-primary',
  'focus-visible:fill-primary focus-visible:text-primary',
);

function NavMobile({ isOpen, setOpen, navItems }: NavMobilePropsType) {
  return (
    <header
      className={cn(
        'fixed flex items-center justify-between font-family-bebas uppercase',
        'z-50 h-20 w-full bg-white px-4 lg:hidden',
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

      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <button
              className="cursor-pointer"
              type="button"
              name="dropdown"
              data-testid="Hamburger Button"
            />
          }
        >
          <ScreenReaderOnly>Open Menu</ScreenReaderOnly>
          <Menu className="size-9" />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="border-none bg-secondary/95"
          showCloseButton
          data-testid="Mobile Nav"
        >
          <nav>
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
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default NavMobile;
