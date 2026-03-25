import type { ReactNode } from 'react';
import HeroBanner from '@/components/HeroBanner/HeroBanner';

export default function JobsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeroBanner title="Jobs" className="min-h-[35dvh]" />
      {children}
    </>
  );
}
