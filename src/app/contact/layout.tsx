import HeroBanner from '@/components/HeroBanner/HeroBanner';

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <HeroBanner
      className="min-h-dvh [&_a]:transition-colors [&_a]:duration-200 [&_a:focus-visible]:text-primary [&_a:focus-visible]:text-shadow-none [&_a:hover]:text-primary [&_a:hover]:text-shadow-none"
      title="Contact Us"
    >
      {children}
    </HeroBanner>
  );
}
