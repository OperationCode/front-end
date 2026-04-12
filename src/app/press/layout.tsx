import type { PropsWithChildren } from 'react';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import Section from '@/components/Section/Section';
import Photos from '@/components/Press/PressPhotos/PressPhotos';
import Videos from '@/components/Press/PressVideos/PressVideos';
import Links from '@/components/Press/PressLinks/PressLinks';

export default function PressLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <HeroBanner title="Press" className="min-h-[60dvh]">
        <p>
          This page is designed to make a journalist's job easy in writing, blogging, or documenting
          Operation Code. Below you will find targeted information corresponding to common
          representative visitors, videos, photos, press releases, and branding details.
        </p>
      </HeroBanner>

      {children}

      <Section title="Videos" underline>
        <Videos />
      </Section>

      <Section title="Photos" underline theme="white">
        <Photos />
      </Section>

      <Section title="In The News" underline>
        <Links />
      </Section>

      <Section title="Branding" underline theme="white">
        <div className="flex flex-row flex-wrap items-center justify-around pt-[15px] [&>a]:text-primary [&>a]:no-underline">
          <Link href="/branding">View Our Branding</Link>
        </div>
      </Section>
    </div>
  );
}
