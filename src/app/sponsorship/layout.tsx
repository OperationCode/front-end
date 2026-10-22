import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import SponsorsSection from '@/components/ReusableSections/SponsorsSection/SponsorsSection';
import { buttonVariants } from '@/components/ui/button';

export default function SponsorshipLayout({ children }: PropsWithChildren) {
  return (
    <>
      <HeroBanner title="Corporate Sponsorship" className="min-h-[60dvh]">
        <Link href="/donate" className={buttonVariants({ variant: 'default', className: 'mt-4' })}>
          Donate Now
        </Link>
      </HeroBanner>

      {children}

      <SponsorsSection />
    </>
  );
}
