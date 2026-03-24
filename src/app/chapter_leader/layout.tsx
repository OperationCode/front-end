import type { PropsWithChildren } from 'react';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import OutboundLink from '@/components/OutboundLink/OutboundLink';

export default function ChapterLeaderLayout({ children }: PropsWithChildren) {
  return (
    <>
      <HeroBanner title="Chapter Leaders" className="min-h-[60dvh]">
        <p>
          Operation Code is looking for volunteer Chapter Leaders to build local communities
          nationwide! Tell us more about yourself{' '}
          <OutboundLink
            href="http://op.co.de/chapter-leader-volunteer"
            analyticsEventLabel="Chapter Leader Volunteer (Top)"
          >
            here
          </OutboundLink>{' '}
          and help further our mission to get the military community into the tech industry!
        </p>
      </HeroBanner>

      {children}
    </>
  );
}
