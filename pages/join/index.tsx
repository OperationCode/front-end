import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { gtag } from 'common/utils/thirdParty/gtag';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import { RegistrationForm } from 'components/Forms/RegistrationForm/RegistrationForm';
import Link from 'next/link';

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

      <HeroBanner title={pageTitle} className="min-h-[35dvh]">
        <div className="space-y-4 w-full max-w-prose px-4">
          <p>
            After submitting this form, please note there is a small onboarding form to follow.{' '}
            <span className="font-bold">
              Failure to complete the entirety of onboarding will mean your application to join the
              community will be ignored.
            </span>
          </p>

          <p>
            We work closely with military veterans, service members, and spouses who are passionate
            about transitioning into the tech industry. We work with over 15,000 members who are all
            working towards relevant goals on Slack and in-person meet-ups. Membership is free!
            Unfamiliar with Slack?{` `}
            <Link href="/slack_guide">
              <a>Learn how to use it!</a>
            </Link>
          </p>
        </div>
      </HeroBanner>

      <Content theme="gray" columns={[<RegistrationForm key="form" onSuccess={handleSuccess} />]} />
    </>
  );
}
