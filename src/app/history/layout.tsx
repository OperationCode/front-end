import type { PropsWithChildren } from 'react';
import { s3 } from '@/common/constants/urls';
import HeroBanner from '@/components/HeroBanner/HeroBanner';

export default function HistoryLayout({ children }: PropsWithChildren) {
  return (
    <>
      <HeroBanner
        backgroundImageSource={`${s3}heroBanners/colin-powell.jpg`}
        className="min-h-[60dvh] bg-position-[right_center]"
        title="History"
      >
        <div>
          <blockquote className="text-2xl">
            &ldquo;There are no secrets to success. It is the result of preparation, hard work,
            learning from failure.&rdquo;
          </blockquote>
          <span className="float-right text-[1.75rem]">- Colin Powell</span>
        </div>
      </HeroBanner>

      {children}
    </>
  );
}
