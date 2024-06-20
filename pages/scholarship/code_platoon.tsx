import { Head } from '@/components/Head';
import { Container } from '@/components/Container/Container';
import { HeroBanner } from '@/components/HeroBanner/HeroBanner';
import { useEffect } from 'react';

const pageTitle = 'Code Platoon X Operation Code Bootcamp Scholarship';

export default function CodePlatoonScholarshipPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/embed/v2.js';
    document.body.appendChild(script);

    const tryRunInit = () => {
      // @ts-expect-error - Undefined window property
      if (window.hbspt) {
        // @ts-expect-error - Undefined window property
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '42378306',
          formId: '661176d6-1794-47a1-b627-46c853c747f5',
          target: '#oc-hubspot-form',
        }) as () => void;
        return;
      }

      // Recursive call to tryRunInit until window.hbspt is defined
      setTimeout(tryRunInit, 500);
    };

    tryRunInit();
  }, []);

  return (
    <>
      <Head title={pageTitle} />
      <HeroBanner title={pageTitle} className="min-h-[40vh]" />
      <Container theme="white" className="pb-8">
        <div id="oc-hubspot-form" className="w-full" />
      </Container>
    </>
  );
}
