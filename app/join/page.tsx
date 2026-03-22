import type { Metadata } from 'next';
import JoinContent from './JoinContent';

export const metadata: Metadata = { title: 'Join' };

export default async function JoinPage({
  searchParams,
}: {
  searchParams: Promise<{ registrationError?: string }>;
}) {
  const { registrationError } = await searchParams;

  return <JoinContent hasRegistrationError={!!registrationError} />;
}
