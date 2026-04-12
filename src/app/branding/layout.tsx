import HeroBanner from '@/components/HeroBanner/HeroBanner';

export default function BrandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeroBanner className="min-h-96 pt-36 pb-24" title="Branding Guide" />
      {children}
    </>
  );
}
