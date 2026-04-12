import type { ReactNode } from 'react';
import HeroBanner from '@/components/HeroBanner/HeroBanner';

export default function ChaptersLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeroBanner title="Chapters" className="min-h-[60dvh] pt-20 pb-4">
        <p>Get involved by joing your local chapter!</p>
      </HeroBanner>

      {children}
    </>
  );
}
