import { NextPageContext } from 'next';
import Link from 'next/link';
import { Alert } from '../components/Alert/Alert';
import { confirmEmail } from '@/common/constants/api';
import { Head } from '@/components/Head';
import { HeroBanner } from '@/components/HeroBanner/HeroBanner';
import { Content } from '@/components/Content/Content';

ConfirmEmail.getInitialProps = async ({ query: { key } }: NextPageContext) => {
  try {
    const data = await confirmEmail({ key });

    return { isVerified: data.detail === 'ok' };
  } catch {
    return { isVerified: false };
  }
};

function ConfirmEmail({ isVerified }: { isVerified: boolean }) {
  return (
    <>
      <Head title="Email Verification" />

      <HeroBanner title="Confirm Email" className="smallHero" />

      <Content
        theme="gray"
        columns={[
          <p>
            {isVerified ? (
              <Link href="/">Verified! Go home.</Link>
            ) : (
              <Alert type="error">Could not verify email</Alert>
            )}
          </p>,
        ]}
      />
    </>
  );
}

export default ConfirmEmail;
