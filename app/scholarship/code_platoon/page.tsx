import { generatePageMetadata } from 'common/utils/metadata';
import CodePlatoonContent from './CodePlatoonContent';

export const metadata = generatePageMetadata({
  title: 'Code Platoon X Operation Code Bootcamp Scholarship',
});

export default function CodePlatoonScholarshipPage() {
  return <CodePlatoonContent />;
}
