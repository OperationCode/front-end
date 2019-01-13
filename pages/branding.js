import Head from 'components/head';
import LogoSection from 'components/Branding/LogoSection/LogoSection';
import ColorSection from 'components/Branding/ColorSection/ColorSection';
import FontSection from 'components/Branding/FontSection/FontSection';
import HeroBanner from 'components/_common_/HeroBanner/HeroBanner';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';

const Branding = () => (
  <>
    <Head title="Branding" />

    <HeroBanner title="Branding">
      <h6>General Guidelines</h6>
      <p>
        The size ratio between the star and the medallion changes depending on the size of
        reproduction. Please make use of the appropriate sized logo when creating collateral.
      </p>
      <p>
        In most cases, use the blue-accent version of the logo. The red-accent is delivered for
        special uses only.
      </p>
      <p>
        Please note: Images may appear larger or smaller than they appear on your device, but the
        files linked are &quot;large&quot; or &quot;small&quot; as described.
      </p>
      <p>
        <OutboundLink
          analyticsEventLabel="Branding EPS Download"
          href="https://s3.us-east-2.amazonaws.com/operationcode-web/Operation-Code-Logo.eps"
        >
          Download master EPS file
        </OutboundLink>
      </p>
    </HeroBanner>

    <LogoSection />
    <ColorSection />
    <FontSection />
  </>
);

export default Branding;
