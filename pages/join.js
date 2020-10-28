import { login } from 'common/utils/auth-utils';
import { gtag } from 'common/utils/thirdParty/gtag';
import Content from 'components/Content/Content';
import RegistrationForm from 'components/Forms/RegistrationForm/RegistrationForm';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { object } from 'prop-types';
import { useEffect } from 'react';

const pageTitle = 'Join';

const profileUpdateURL = '/profile/update';

Join.propTypes = {
  router: object.isRequired,
};

function Join({ router }) {
  useEffect(() => {
    router.prefetch(profileUpdateURL);
  }, []);

  const handleSuccess = ({ token }) => {
    gtag.conversionEvent({ adId: '9ZvVCOOFmrkBEK-Rnp4D', category: 'sign_up' });
    login({ token }, profileUpdateURL);
  };

  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} />

      <Content
        theme="gray"
        columns={[
          <RegistrationForm onSuccess={handleSuccess} />,
          <p>
            {'Already registered? '}
            <Link href="/login">
              <a>Login</a>
            </Link>
            .
          </p>,
        ]}
      />
    </>
  );
}

export default withRouter(Join);
