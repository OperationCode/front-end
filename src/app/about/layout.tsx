import HeroBanner from '@/components/HeroBanner/HeroBanner';
import { s3 } from '@/common/constants/urls';

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeroBanner
        backgroundImageSource={`${s3}redesign/heroBanners/about.jpg`}
        className="min-h-[60dvh] bg-position-[center_3rem] lg:bg-top"
        title="About Us"
      />
      {children}
    </>
  );
}
