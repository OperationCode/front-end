'use client';

import { useEffect } from 'react';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import { gtag } from 'common/utils/thirdParty/gtag';

const pageTitle = 'Thank You';

export default function ThankYouContent() {
  useEffect(() => {
    gtag.conversionEvent({ adId: 'h6epCOC_os4BEK-Rnp4D' });
  }, []);

  return (
    <div>
      <HeroBanner title={pageTitle} className="min-h-[60dvh] pb-9">
        <p className="text-left">
          Thank you so much for your donation!
          <br />
          <br />
          We have received your contribution, and you should be receiving an email which will serve
          as your donation receipt.
        </p>
      </HeroBanner>
    </div>
  );
}
