import type { Metadata } from 'next';
import HeroBanner from 'components/HeroBanner/HeroBanner';

export const metadata: Metadata = { title: 'Blog' };

const pageTitle = 'Blog';

export default function BlogIndex() {
  return <HeroBanner title={pageTitle} className="min-h-[35dvh]" />;
}
