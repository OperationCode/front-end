import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import LogoSection from 'components/Branding/LogoSection/LogoSection';
import ColorSection from 'components/Branding/ColorSection/ColorSection';
import FontSection from 'components/Branding/FontSection/FontSection';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import { s3 } from 'common/constants/urls';
import LinkButton from 'components/Buttons/LinkButton/LinkButton';

const pageTitle = 'Branding Guide';

function Branding() {
  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner className="min-h-96 pt-36 pb-24" title={pageTitle} />

      <section className="bg-white *:max-w-prose *:mx-auto space-y-8 py-14">
        <h5 className="text-center">Introduction</h5>

        <p>
          For external organizations, corporate sponsors and press, please obtain specific guidance
          and approval from the Director of Communications prior to using Operation Code Branding on
          public platforms. You may email your request to{' '}
          <OutboundLink
            href="mailto:marketing@operationcode.org"
            analyticsEventLabel="Hero Marketing Email Link"
          >
            marketing@operationcode.org
          </OutboundLink>
        </p>

        <p>
          The size ratio between the star and the medallion changes depending on the size of
          reproduction. Please make use of the appropriate sized logo when creating collateral.
        </p>

        <p>
          In most cases, use the blue-accent version of the logo. The red-accent is delivered for
          special uses only.
        </p>

        <aside className="italic">
          <p>
            <span className="font-bold uppercase">Please note: </span>
            Images may appear larger or smaller than they appear on your device, but the files
            linked are &quot;large&quot; or &quot;small&quot; as described.
          </p>
        </aside>

        <p className="text-center">
          View{' '}
          <OutboundLink
            analyticsEventLabel="Branding Storybook Link"
            href="https://storybook.operationcode.org/?path=/story/heading--default"
          >
            Operation Code&apos;s Storybook Component Library here.
          </OutboundLink>
        </p>

        <LinkButton
          analyticsEventLabel="Branding EPS Download"
          href={`${s3}Operation-Code-Logo.eps`}
          theme="secondary"
          className="mx-auto block w-fit no-underline"
        >
          Download main EPS file
        </LinkButton>
      </section>

      <LogoSection />
      <ColorSection />
      <FontSection />
    </>
  );
}

export default Branding;
