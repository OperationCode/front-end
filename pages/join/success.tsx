import { Head } from 'components/Head';
import { HeroBanner } from 'components/HeroBanner/HeroBanner';
import { OutboundLink } from 'components/OutboundLink/OutboundLink';

const pageTitle = `Successful Registration!`;

export default function JoinSuccess() {
  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle}>
        <p>
          You will receive a Slack invite in your email inbox shortly! If you do not, please email
          us at{' '}
          <OutboundLink
            href="mailto:staff@operationcode.org"
            analyticsEventLabel="Email"
            hasIcon={false}
          >
            staff@operationcode.org
          </OutboundLink>
          .
        </p>
      </HeroBanner>
    </>
  );
}
