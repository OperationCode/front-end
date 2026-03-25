import type { PropsWithChildren } from 'react';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import JoinSection from '@/components/ReusableSections/JoinSection/JoinSection';
import SponsorsSection from '@/components/ReusableSections/SponsorsSection/SponsorsSection';
import LinkButton from '@/components/Buttons/LinkButton/LinkButton';
import { s3 } from '@/common/constants/urls';

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <HeroBanner
        className="min-h-dvh p-0"
        backgroundImageSource={`${s3}redesign/heroBanners/homepage.jpg`}
        title="Build The Future"
      >
        <div className="px-4">
          <p>
            We're the largest community of military veterans, service members, and spouses committed
            to becoming software developers with the help of mentors, scholarships, and our tech
            partners.
          </p>
        </div>

        <div className="flex w-full max-w-prose flex-wrap justify-evenly gap-x-2">
          <LinkButton href="/about" className="mt-4">
            Learn More
          </LinkButton>
          <LinkButton href="/join" className="mt-4">
            Join Us
          </LinkButton>
        </div>
      </HeroBanner>

      {children}

      <SponsorsSection />

      <JoinSection />
    </>
  );
}
