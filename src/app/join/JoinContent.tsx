'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { gtag } from '@/lib/utils/thirdParty/gtag';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import Section from '@/components/Section/Section';
import { RegistrationForm } from '@/components/Forms/RegistrationForm/RegistrationForm';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

const pageTitle = 'Join';

const profileUpdateURL = '/join/form';

export default function JoinContent({ hasRegistrationError }: { hasRegistrationError: boolean }) {
  const router = useRouter();
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(hasRegistrationError);

  useEffect(() => {
    router.prefetch(profileUpdateURL);
  }, [router]);

  const handleSuccess = () => {
    gtag.conversionEvent({ adId: '9ZvVCOOFmrkBEK-Rnp4D', category: 'sign_up' });
    router.push(profileUpdateURL);
  };

  return (
    <>
      <HeroBanner title={pageTitle} className="min-h-[35dvh]">
        <div className="w-full max-w-prose space-y-4 px-4">
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
            <Link href="/slack_guide">Learn how to use it!</Link>
          </p>
        </div>
      </HeroBanner>

      <Section theme="gray">
        <RegistrationForm onSuccess={handleSuccess} />
      </Section>

      <Dialog
        open={isErrorModalOpen}
        onOpenChange={(isOpen) => !isOpen && setIsErrorModalOpen(false)}
      >
        <DialogContent>
          <DialogTitle className="sr-only">Registration error</DialogTitle>
          <div className="max-w-md space-y-4 text-center">
            <h2 className="text-xl font-bold">Registration Incomplete</h2>
            <p>
              It looks like we're missing information from the first step of registration. Please
              complete the form below to get started.
            </p>
            <p>
              If you've already completed this step and were unexpectedly redirected here, something
              may be wrong on our end. Please email us at{' '}
              <a href="mailto:staff@operationcode.org?subject=Registration Issue">
                staff@operationcode.org
              </a>{' '}
              so we can help.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
