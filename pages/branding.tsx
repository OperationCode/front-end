import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import LogoSection from 'components/Branding/LogoSection/LogoSection';
import ColorSection from 'components/Branding/ColorSection/ColorSection';
import FontSection from 'components/Branding/FontSection/FontSection';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import { s3 } from 'common/constants/urls';
import styles from 'styles/branding.module.css';

const pageTitle = 'Branding Guide';

function Branding() {
  return (
    <div className={styles.Branding}>
      <Head title={pageTitle} />

      <HeroBanner isFullViewportHeight title={pageTitle}>
        <h6>
          For external organizations, corporate sponsors and press, please obtain specific guidance
          and approval from the Director of Communications prior to using Operation Code Branding on
          public platforms. You may email your request to marketing@operationcode.org
        </h6>

        <br />

        <h6 className={styles.topMargin}>General Guidelines</h6>

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
          View{' '}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://storybook.operationcode.org/?path=/story/heading--default"
          >
            Operation Code&apos;s Storybook Component Library here.
          </a>
        </p>

        <p>
          <OutboundLink
            analyticsEventLabel="Branding EPS Download"
            href={`${s3}Operation-Code-Logo.eps`}
          >
            Download main EPS file
          </OutboundLink>
        </p>
      </HeroBanner>

      <LogoSection />
      <ColorSection />
      <FontSection />
    </div>
  );
}

export default Branding;
