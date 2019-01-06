import Head from 'components/head';
import classNames from 'classnames';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import Section from 'components/_common_/Section/Section';
import Button from 'components/_common_/Button/Button';
import LinkButton from 'components/_common_/LinkButton/LinkButton';
import Badge from 'components/Badge/Badge';
import DonateSection from 'components/ReusableSections/DonateSection/DonateSection';
import PlaceholderIcon1 from 'static/images/icons/FontAwesome/users-solid.svg';
import PlaceholderIcon2 from 'static/images/icons/FontAwesome/handshake-regular.svg';
import { s3 } from 'common/constants/urls';
import styles from './styles/get_involved.css';

// TODO: Replace PlaceholderIcons with appropriate icon assets

const mentorItems = [
  {
    icon: <PlaceholderIcon1 />,
    label: 'Feel More Confident',
  },
  {
    icon: <PlaceholderIcon1 />,
    label: 'Have Defined Career Goals',
  },
  {
    icon: <PlaceholderIcon1 />,
    label: 'Reach Their True Potential',
  },
];

const supportItems = [
  {
    icon: <PlaceholderIcon2 />,
    label: 'Operations',
  },
  {
    icon: <PlaceholderIcon2 />,
    label: 'Fundraising',
  },
  {
    icon: <PlaceholderIcon2 />,
    label: 'Partnerships',
  },
];

export default () => (
  <div>
    <Head title="Get Involved" />

    <Section theme="secondary" title="You Can Make An Impact">
      <div>
        Whether you&apos;re interested in mentoring, supporting our operations, or simply donating
        to help military veterans, service members, and spouses launch a career in software
        development, Operation Code is always looking for supporters like you.
      </div>
    </Section>

    <Section
      theme="gray"
      contentClassName={styles.alignCenter}
      title="The Power of Mentorship"
      hasHeadingLines={false}
    >
      <div className={styles.marginBottom}>
        By mentoring one of our members, you will help them:
      </div>
      <div className={classNames(styles.flexDisplay, styles.marginBottom)}>
        {mentorItems.map(item => (
          <Badge key={item.label} icon={item.icon} label={item.label} />
        ))}
      </div>
    </Section>

    <Section theme="secondary" title="Empower Our Community" hasHeadingLines={false}>
      <div className={classNames(styles.cta, styles.ctaImageLeft)}>
        <div className={styles.ctaImage}>
          <img src={`${s3}stock_paired-programming.jpg`} alt="Empower Our Community" />
        </div>
        <div className={styles.ctaText}>
          <p>
            Make a difference in the lives of military veterans, service members, and spouses who
            are eager to transition into a software development career.
          </p>
          <LinkButton href="/mentoring">Become A Mentor</LinkButton>
        </div>
      </div>
    </Section>

    <Section
      theme="gray"
      contentClassName={styles.alignCenter}
      title="Ways You Can Support Operation Code"
      hasHeadingLines={false}
    >
      <div className={classNames(styles.marginBottom, styles.centerText)}>
        We&apos;re always looking for volunteers who are dedicated to making an impact in the lives
        of military veterans, service members, and spouses. You can help us with:
      </div>
      <div className={classNames(styles.flexDisplay, styles.marginBottom)}>
        {supportItems.map(item => (
          <Badge key={item.label} icon={item.icon} label={item.label} />
        ))}
      </div>
    </Section>

    <Section theme="secondary" title="Support Our Mission" hasHeadingLines={false}>
      <div className={classNames(styles.cta, styles.ctaImageRight)}>
        <div className={styles.ctaImage}>
          <img src={`${s3}stock_paired-programming.jpg`} alt="Support Our Mission" />
        </div>
        <div className={styles.ctaText}>
          <p>
            Make a difference in the lives of military veterans, service members, and spouses who
            are eager to transition into a software development career.
          </p>
          <LinkButton href="/donate">Support Us</LinkButton>
        </div>
      </div>
    </Section>

    <DonateSection />

    {/* TODO: Replace with ReusableSection/JoinSection */}
    <Section
      theme="white"
      contentClassName={styles.alignCenter}
      title="Join Our Thriving Community"
      hasHeadingLines={false}
    >
      <p className={styles.centerText}>
        Are you ready to begin your journey towards a career in software development?
        <br />
        Get the support you need by joining our members only Slack community!
      </p>
      <div className={classNames(styles.alignCenter, styles.marginBottom)}>
        <div>
          <input placeholder="Email address" />
          <Button>Join our Slack</Button>
        </div>
        Slack is a community based collaboration tool where all the magic happens!
        <br />
        <OutboundLink href="https://slack.com/">Learn more</OutboundLink>
      </div>
    </Section>
  </div>
);
