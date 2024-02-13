import { NextPageContext } from 'next';
import Link from 'next/link';
import { bool } from 'prop-types';
import { confirmEmail } from 'common/constants/api';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import Alert from '../components/Alert/Alert';

ConfirmEmail.propTypes = {
  isVerified: bool.isRequired,
};

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
              <Link href="/">
                <a>Verified! Go home.</a>
              </Link>
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
