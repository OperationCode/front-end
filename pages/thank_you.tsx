import { useEffect } from 'react';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import { gtag } from 'common/utils/thirdParty/gtag';

const pageTitle = 'Thank You';

function ThankYou() {
  useEffect(() => {
    gtag.conversionEvent({ adId: 'h6epCOC_os4BEK-Rnp4D' });
  }, []);

  return (
    <div>
      <Head title={pageTitle} />
      <HeroBanner title={pageTitle} className="pb-9 min-h-[60dvh]">
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

export default ThankYou;
