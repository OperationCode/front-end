import type { ReactNode } from 'react';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import { s3 } from '@/lib/constants/urls';

export default function TeamLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <HeroBanner
        title="The Team"
        backgroundImageSource={`${s3}oc_crew_nyc_2021.jpg`}
        className="min-h-[60dvh] bg-position-[center_30%]"
      />

      {children}
    </div>
  );
}
