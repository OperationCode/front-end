import { generatePageMetadata } from 'common/utils/metadata';
import HeroBanner from 'components/HeroBanner/HeroBanner';

export const metadata = generatePageMetadata({ title: 'Blog' });

const pageTitle = 'Blog';

export default function BlogIndex() {
  return <HeroBanner title={pageTitle} className="min-h-[35dvh]" />;
}
