import Link from 'next/link';
import { object } from 'prop-types';
import { withRouter } from 'next/router';
import { login } from 'common/utils/auth-utils';
import { gtag } from 'common/utils/thirdParty/gtag';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

const pageTitle = 'Join';

const profileUpdateURL = '/profile/update';

Join.propTypes = {
  router: object.isRequired,
};

function Join({ router }) {
  React.useEffect(() => {
    router.prefetch(profileUpdateURL);
  }, []);

  const handleSuccess = ({ token, user }) => {
    gtag.conversionEvent({ adId: '9ZvVCOOFmrkBEK-Rnp4D', category: 'sign_up' });
    login({ token, user }, profileUpdateURL);
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
