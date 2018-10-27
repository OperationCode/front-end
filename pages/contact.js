import Link from 'next/link';
import Head from 'components/head';
import Section from 'components/_common_/Section/Section';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import EmailIcon from 'static/images/icons/FontAwesome/envelope-solid.svg';
import HomeIcon from 'static/images/icons/FontAwesome/home-solid.svg';
import SlackIcon from 'static/images/icons/FontAwesome/slack-hash.svg';
import styles from './styles/contact.css';

export default () => (
  <>
    <Head title="Contact Us" />

    <Section title="Contact Us">
      <p className={styles.centerText}>
        We are a decentralized community of hard-working volunteers, and we love hearing feedback,
        comments, and suggestions!
        <br />
        <br />
        The best way to reach our staff and our members is by{' '}
        <Link href="/join">
          <a>joining Operation Code</a>
        </Link>{' '}
        to receive an invite to our team, including our Slack chat. You can also reach us via email,
        physical mail, or via{' '}
        <OutboundLink
          href="//twitter.com/operation_code"
          analyticsEventLabel="Contact Us - Twitter"
        >
          Twitter
        </OutboundLink>
      </p>
    </Section>
    <Section theme="white" headingLines={false} contentClassName={styles.centerSection}>
      <div className={styles.flexContainer}>
        {/* Columns */}
        <div className={styles.column}>
          <h5>Email</h5>
          <EmailIcon className={styles.icon} />
          <OutboundLink
            href="mailto:staff@operationcode.org"
            analyticsEventLabel="Contact Us - Email"
            className={styles.centerText}
          >
            staff@operationcode.org
          </OutboundLink>
        </div>
        <div className={styles.column}>
          <h5>Slack Team</h5>
          <SlackIcon className={styles.icon} />
          <OutboundLink
            href="https://operation-code.slack.com"
            analyticsEventLabel="Contact Us - Slack"
            className={styles.centerText}
          >
            https://operation-code.slack.com
          </OutboundLink>
        </div>
        <div className={styles.column}>
          <h5>Mailing Address</h5>
          <HomeIcon className={styles.icon} />
          <span>
            Operation Code
            <br />
            707 SW Washington St.
            <br />
            Suite 1100
            <br />
            Portland, OR 97205
          </span>
        </div>
      </div>
    </Section>
  </>
);
