import type { ReactNode } from 'react';
import HeroBanner from '@/components/HeroBanner/HeroBanner';

export default function PodcastLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <HeroBanner title="Podcast" className="-mb-8 min-h-[40dvh] pt-30">
        <p>Come listen to some inspiring stories of our vets transitioning into tech!</p>
      </HeroBanner>

      {children}
    </div>
  );
}
