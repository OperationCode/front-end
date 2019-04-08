import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import LogoSection from 'components/Branding/LogoSection/LogoSection';
import ColorSection from 'components/Branding/ColorSection/ColorSection';
import FontSection from 'components/Branding/FontSection/FontSection';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import styles from './styles/branding.css';

const Branding = () => (
  <>
    <Head title="Branding" />

    <HeroBanner isFullViewportHeight title="Branding">
      <h6 className={styles.topMargin}>General Guidelines</h6>

      <p className={styles.justifyAlign}>
        The size ratio between the star and the medallion changes depending on the size of
        reproduction. Please make use of the appropriate sized logo when creating collateral.
      </p>

      <p className={styles.justifyAlign}>
        In most cases, use the blue-accent version of the logo. The red-accent is delivered for
        special uses only.
      </p>

      <p className={styles.justifyAlign}>
        Please note: Images may appear larger or smaller than they appear on your device, but the
        files linked are &quot;large&quot; or &quot;small&quot; as described.
      </p>

      <p className={styles.justifyAlign}>
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
