import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { gtag } from 'common/utils/thirdParty/gtag';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import RegistrationForm from 'components/Forms/RegistrationForm/RegistrationForm';
import { login } from 'common/utils/auth-utils';

const pageTitle = 'Join';

const profileUpdateURL = '/join/form';

export default function Join() {
  const { prefetch } = useRouter();

  useEffect(() => {
    prefetch(profileUpdateURL);
  }, []);

  const handleSuccess = ({ token }: { token: string }) => {
    gtag.conversionEvent({ adId: '9ZvVCOOFmrkBEK-Rnp4D', category: 'sign_up' });
    login({ token }, profileUpdateURL);
  };

  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} />

      <Content theme="gray" columns={[<RegistrationForm onSuccess={handleSuccess} />]} />
    </>
  );
}
