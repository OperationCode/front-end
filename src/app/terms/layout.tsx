import type { ReactNode } from 'react';
import HeroBanner from '@/components/HeroBanner/HeroBanner';

export default function TermsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeroBanner title="Terms of Service" className="min-h-[35dvh]" />
      {children}
    </>
  );
}
