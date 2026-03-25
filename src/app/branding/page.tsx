import type { Metadata } from 'next';
import LogoSection from '@/components/Branding/LogoSection/LogoSection';
import ColorSection from '@/components/Branding/ColorSection/ColorSection';
import FontSection from '@/components/Branding/FontSection/FontSection';
import OutboundLink from '@/components/OutboundLink/OutboundLink';
import { s3 } from '@/lib/constants/urls';
import { buttonVariants } from '@/components/ui/button';

export const metadata: Metadata = { title: 'Branding Guide' };

function Branding() {
  return (
    <>
      <section className="space-y-8 bg-white py-14 *:mx-auto *:max-w-prose">
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
            linked are “large” or “small” as described.
          </p>
        </aside>

        <OutboundLink
          analyticsEventLabel="Branding EPS Download"
          href={`${s3}Operation-Code-Logo.eps`}
          hasIcon={false}
          className={buttonVariants({
            variant: 'secondary',
            className: 'mx-auto block w-fit no-underline',
          })}
        >
          Download main EPS file
        </OutboundLink>
      </section>

      <LogoSection />
      <ColorSection />
      <FontSection />
    </>
  );
}

export default Branding;
