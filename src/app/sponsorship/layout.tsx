import type { PropsWithChildren } from 'react';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import { buttonVariants } from '@/components/ui/button';
import SponsorsSection from '@/components/ReusableSections/SponsorsSection/SponsorsSection';

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
