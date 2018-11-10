import Link from 'next/link';
import Head from 'components/head';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import HeroBanner from 'components/_common_/HeroBanner/HeroBanner';
import styles from './styles/contact.css';

export default () => (
  <>
    <Head title="Contact Us" />

    <HeroBanner title="Contact Us" imageSource="" className={styles.contactHero}>
      <p>
        We are a decentralized community of hard-working volunteers, and we love hearing feedback,
        comments, and suggestions!
      </p>

      <p>
        The best way to reach our staff and our members is by{' '}
        <Link href="/join">
          <a>joining Operation Code</a>
        </Link>{' '}
        to receive an invite to our team, including our Slack chat.
      </p>

      <p>
        You can also reach us via email:{' '}
        <OutboundLink
          href="mailto:staff@operationcode.org"
          analyticsEventLabel="Contact Us - Twitter"
          hasIcon={false}
        >
          staff@operationcode.org
        </OutboundLink>
      </p>

      <p>
        You could tweet at us:{' '}
        <OutboundLink
          href="https://twitter.com/operation_code"
          analyticsEventLabel="Contact Us - Twitter"
        >
          @operation_code
        </OutboundLink>
      </p>

      <div className={styles.address}>
        <p>And - if you really want to - you can snail-mail us:</p>

        <span>
          Operation Code
          <br />
          707 SW Washington Street, Suite 1100
          <br />
          Portland, OR 97205
        </span>
      </div>
    </HeroBanner>
  </>
);
