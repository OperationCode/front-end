import type { PropsWithChildren } from 'react';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import JoinSection from '@/components/ReusableSections/JoinSection/JoinSection';
import SponsorsSection from '@/components/ReusableSections/SponsorsSection/SponsorsSection';
import { buttonVariants } from '@/components/ui/button';
import { s3 } from '@/lib/constants/urls';

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
          <Link href="/about" className={buttonVariants({ size: 'lg', className: 'no-underline' })}>
            Learn More
          </Link>
          <Link href="/join" className={buttonVariants({ size: 'lg', className: 'no-underline' })}>
            Join Us
          </Link>
        </div>
      </HeroBanner>

      {children}

      <SponsorsSection />

      <JoinSection />
    </>
  );
}
