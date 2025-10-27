import { SUCCESS_PAGE_MESSAGE } from 'common/constants/testIDs';
import LinkButton from 'components/Buttons/LinkButton/LinkButton';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import OutboundLink from 'components/OutboundLink/OutboundLink';

const pageTitle = `Successful Registration!`;

export default function JoinSuccess() {
  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} className="min-h-[60dvh]">
        <p data-testid={SUCCESS_PAGE_MESSAGE}>
          We will review your application and send an invite to our Slack team as soon as possible.
          If you do not receive an invite within a week, please email us at{' '}
          <OutboundLink
            href="mailto:staff@operationcode.org"
            analyticsEventLabel="Email"
            hasIcon={false}
          >
            staff@operationcode.org
          </OutboundLink>
          .
        </p>

        <LinkButton href="/" className="mt-4">
          Go Home
        </LinkButton>
      </HeroBanner>
    </>
  );
}
