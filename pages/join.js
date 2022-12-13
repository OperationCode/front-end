import { useEffect } from 'react';
import Link from 'next/link';
import { object } from 'prop-types';
import { withRouter } from 'next/router';
import { login } from 'common/utils/auth-utils';
import { gtag } from 'common/utils/thirdParty/gtag';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import RegistrationForm from 'components/Forms/RegistrationForm/RegistrationForm';

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
          <script 
              src="https://cdn.virtuoussoftware.com/virtuous.embed.min.js" 
              data-vform="925226EB-B502-4DAF-A38F-FAFBB8C98146" 
              data-orgId="3423" 
              data-isGiving="false"
              data-dependencies="[]">
          </script>,
        ]}
      />
    </>
  );
}

export default withRouter(Join);
