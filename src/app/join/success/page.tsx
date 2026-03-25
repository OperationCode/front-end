import type { Metadata } from 'next';
import Link from 'next/link';
import { SUCCESS_PAGE_MESSAGE } from '@/lib/constants/testIDs';
import { buttonVariants } from '@/components/ui/button';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import OutboundLink from '@/components/OutboundLink/OutboundLink';

export const metadata: Metadata = { title: 'Successful Registration!' };

const pageTitle = `Successful Registration!`;

export default function JoinSuccess() {
  return (
    <HeroBanner title={pageTitle} className="min-h-[60dvh]">
      <p data-testid={SUCCESS_PAGE_MESSAGE}>
        We will review your application and send an invite to our Slack team as soon as possible. If
        you do not receive an invite within a week, please email us at{' '}
        <OutboundLink
          href="mailto:staff@operationcode.org"
          analyticsEventLabel="Email"
          hasIcon={false}
        >
          staff@operationcode.org
        </OutboundLink>
        .
      </p>

      <Link href="/" className={buttonVariants({ variant: 'default', className: 'mt-4' })}>
        Go Home
      </Link>
    </HeroBanner>
  );
}
