import HeroBanner from '@/components/HeroBanner/HeroBanner';
import { s3 } from '@/common/constants/urls';

export default function PolicyLayout({ children }: { children: React.ReactNode }) {
  return (
    <HeroBanner
      backgroundImageSource={`${s3}redesign/heroBanners/policy.jpg`}
      title="Modernize the GI Bill"
      className="min-h-dvh"
    >
      {children}
    </HeroBanner>
  );
}
