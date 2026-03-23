import type { Metadata } from 'next';
import ThankYouContent from './ThankYouContent';

export const metadata: Metadata = { title: 'Thank You' };

export default function ThankYouPage() {
  return <ThankYouContent />;
}
