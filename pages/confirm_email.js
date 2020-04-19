import Link from 'next/link';
import { bool } from 'prop-types';
import { confirmEmail } from 'common/constants/api';
import { logAndCaptureError } from 'common/utils/error-utils';
import Alert from 'components/Alert/Alert';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';

ConfirmEmail.propTypes = {
  isVerified: bool.isRequired,
};

ConfirmEmail.getInitialProps = async ({ query: { key } }) => {
  try {
    const data = await confirmEmail({ key });

    return { isVerified: data.detail === 'ok' };
  } catch (error) {
    logAndCaptureError(error);

    return { isVerified: false };
  }
};

function ConfirmEmail({ isVerified }) {
  return (
    <>
      <Head title="Email Verification" />

      <HeroBanner title="Confirm Email" className="smallHero" />

      <Content
        theme="gray"
        columns={[
          <p>
            {isVerified ? (
              <Link href="/login">
                <a>Verified! Click to Login</a>
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
