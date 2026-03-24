import type { PropsWithChildren } from 'react';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import LinkButton from '@/components/Buttons/LinkButton/LinkButton';
import SponsorsSection from '@/components/ReusableSections/SponsorsSection/SponsorsSection';

export default function SponsorshipLayout({ children }: PropsWithChildren) {
  return (
    <>
      <HeroBanner title="Corporate Sponsorship" className="min-h-[60dvh]">
        <LinkButton href="/donate" theme="primary" className="mt-4">
          Donate Now
        </LinkButton>
      </HeroBanner>

      {children}

      <SponsorsSection />
    </>
  );
}
