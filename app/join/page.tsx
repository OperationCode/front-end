import { generatePageMetadata } from 'common/utils/metadata';
import JoinContent from './JoinContent';

export const metadata = generatePageMetadata({ title: 'Join' });

export default async function JoinPage({
  searchParams,
}: {
  searchParams: Promise<{ registrationError?: string }>;
}) {
  const { registrationError } = await searchParams;

  return <JoinContent hasRegistrationError={!!registrationError} />;
}
