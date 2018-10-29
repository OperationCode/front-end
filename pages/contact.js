import classNames from 'classnames';
import Link from 'next/link';
import Head from 'components/head';
import Section from 'components/_common_/Section/Section';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import Badge from 'components/Badge/Badge';
import EmailIcon from 'static/images/icons/FontAwesome/envelope-solid.svg';
import HomeIcon from 'static/images/icons/FontAwesome/home-solid.svg';
import SlackIcon from 'static/images/icons/FontAwesome/slack-hash.svg';
import styles from './styles/contact.css';

export default () => (
  <>
    <Head title="Contact Us" />

    <Section title="Contact Us" theme="mist">
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
          <OutboundLink
            analyticsEventLabel="Contact Us - Email"
            hasIcon={false}
            href="mailto:staff@operationcode.org"
            className={styles.centerText}
          >
            <Badge
              label="staff@operationcode.org"
              svgComponent={<EmailIcon className={styles.icon} />}
            />
          </OutboundLink>
        </div>
        <div className={styles.column}>
          <h5>Slack Team</h5>
          <OutboundLink
            href="https://operation-code.slack.com"
            analyticsEventLabel="Contact Us - Slack"
            className={styles.centerText}
          >
            <Badge
              label="https://operation-code.slack.com"
              svgComponent={<SlackIcon className={styles.icon} />}
            />
          </OutboundLink>
        </div>
        <div className={classNames(styles.column, styles.centerText)}>
          <h5>Mailing Address</h5>
          <Badge label="" svgComponent={<HomeIcon className={styles.icon} />}>
            <span>
              Operation Code
              <br />
              707 SW Washington St.
              <br />
              Suite 1100
              <br />
              Portland, OR 97205
            </span>
          </Badge>
        </div>
      </div>
    </Section>
  </>
);
