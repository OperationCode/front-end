import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { gtag } from 'common/utils/thirdParty/gtag';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import { RegistrationForm } from 'components/Forms/RegistrationForm/RegistrationForm';

const pageTitle = 'Join';

const profileUpdateURL = '/join/form';

export default function Join() {
  const { prefetch, push } = useRouter();

  useEffect(() => {
    prefetch(profileUpdateURL);
  }, []);

  const handleSuccess = () => {
    gtag.conversionEvent({ adId: '9ZvVCOOFmrkBEK-Rnp4D', category: 'sign_up' });
    push(profileUpdateURL);
  };

  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} className="min-h-[35dvh]" />

      <Content theme="gray" columns={[<RegistrationForm onSuccess={handleSuccess} />]} />
    </>
  );
}
