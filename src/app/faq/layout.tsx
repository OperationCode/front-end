import type { PropsWithChildren } from 'react';
import HeroBanner from '@/components/HeroBanner/HeroBanner';

export default function FAQLayout({ children }: PropsWithChildren) {
  return (
    <>
      <HeroBanner title="Frequently Asked Questions" className="min-h-[35dvh]" />
      {children}
    </>
  );
}
