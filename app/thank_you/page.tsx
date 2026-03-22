import { generatePageMetadata } from 'common/utils/metadata';
import ThankYouContent from './ThankYouContent';

export const metadata = generatePageMetadata({ title: 'Thank You' });

export default function ThankYouPage() {
  return <ThankYouContent />;
}
