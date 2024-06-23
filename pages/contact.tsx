import classNames from 'classnames';
import Link from 'next/link';
import styles from 'styles/contact.module.css';
import { Head } from '@/components/Head';
import { HeroBanner } from '@/components/HeroBanner/HeroBanner';
import { OutboundLink } from '@/components/OutboundLink/OutboundLink';

const pageTitle = 'Contact Us';

function Contact() {
  return (
    <div className={styles.Contact}>
      <Head title={pageTitle} />

      <HeroBanner className={styles.contactHero} isFullViewportHeight title={pageTitle}>
        <div className={styles.verticalSpacing}>
          <p>
            We are a decentralized community of hard-working volunteers, and we love hearing
            feedback, comments, and suggestions!
          </p>

          <p>
            The best way to reach our staff and our members is by{' '}
            <Link href="/join">joining Operation Code</Link> to receive an invite to our team,
            including our Slack chat.
          </p>
        </div>

        <address className={classNames(styles.forceWidth, styles.contactMethod)}>
          <b>You can also reach us via email:</b>

          <br />

          <OutboundLink
            href="mailto:staff@operationcode.org"
            analyticsEventLabel="Email"
            hasIcon={false}
          >
            staff@operationcode.org
          </OutboundLink>
        </address>

        <address className={classNames(styles.forceWidth, styles.contactMethod)}>
          <b>You could tweet at us:</b>

          <br />

          <OutboundLink href="https://twitter.com/operation_code" analyticsEventLabel="Twitter">
            @operation_code
          </OutboundLink>
        </address>

        <address className={classNames(styles.forceWidth, styles.contactMethod)}>
          <b>And - if you really want to - you can snail-mail us:</b>

          <br />

          <span>
            Operation Code
            <br />
            818 SW Third Avenue, #221-1090,
            <br />
            Portland, OR 97204
          </span>
        </address>
      </HeroBanner>
    </div>
  );
}

export default Contact;
