import classNames from 'classnames';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import Section from 'components/_common_/Section/Section';
import Button from 'components/_common_/Button/Button';
import Heading from 'components/_common_/Heading/Heading';
import Badge from 'components/Badge/Badge';
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
  <>
    <Section theme="slate" className={styles.introSection} contentClassName={styles.sectionContent}>
      <div>
        <Heading
          className={classNames(styles.sectionHeading, styles.sectionHeading_introHeading)}
          hasHeadingLines={false}
          theme="white"
        >
          YOU CAN MAKE AN IMPACT
        </Heading>
        <p>
          Whether you&apos;re interested in mentoring, supporting our operations, or simply donating
          to help military veterans, service members, and spouses launch a career in software
          development, Operation Code is always looking for supporters like you.
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <img
          src={`${s3}heroBanners/stock_family-2.jpg`}
          alt="Person explaining something. They're very happy."
        />
      </div>
    </Section>

    <Section
      theme="mist"
      className={styles.infoSection}
      contentClassName={styles.alignCenter}
      title="THE POWER OF MENTORSHIP"
      hasHeadingLines={false}
    >
      <div className={styles.marginBottom}>
        By mentoring one of our members, you will help them:
      </div>
      <div className={styles.flexDisplay}>
        {mentorItems.map(item => (
          <Badge
            key={item.label}
            className={styles.marginBottom}
            svgComponent={item.icon}
            label={item.label}
          />
        ))}
      </div>
    </Section>

    <Section theme="slate" contentClassName={classNames(styles.ctaContent, styles.ctaContentRight)}>
      <div>
        <img src={`${s3}stock_paired-programming.jpg`} alt="Empower Our Community" />
      </div>
      <div>
        <Heading className={styles.sectionHeading} hasHeadingLines={false} theme="white">
          EMPOWER OUR COMMUNITY
        </Heading>
        <p>
          Make a difference in the lives of military veterans, service members, and spouses who are
          eager to transition into a software development career.
        </p>
        <Button theme="slate" className={styles.buttonOutline}>
          BECOME A MENTOR
        </Button>
      </div>
    </Section>

    <Section
      theme="mist"
      className={styles.infoSection}
      contentClassName={styles.alignCenter}
      title="WAYS YOU CAN SUPPORT OPERATION CODE"
      hasHeadingLines={false}
    >
      <div className={classNames(styles.marginBottom, styles.centerText)}>
        We&apos;re always looking for volunteers who are dedicated to making an impact in the lives
        of military veterans, service members, and spouses. You can help us with:
      </div>
      <div className={classNames(styles.flexDisplay, styles.marginBottom)}>
        {supportItems.map(item => (
          <Badge key={item.label} svgComponent={item.icon} label={item.label} />
        ))}
      </div>
    </Section>

    <Section theme="slate" title="SUPPORT OUR MISSION" hasHeadingLines={false}>
      <div>
        <div>
          <img src={`${s3}stock_paired-programming.jpg`} alt="Support Our Mission" />
        </div>
        <div>
          <p>
            Make a difference in the lives of military veterans, service members, and spouses who
            are eager to transition into a software development career.
          </p>
          <Button theme="slate" className={styles.buttonOutline}>
            SUPPORT OC
          </Button>
        </div>
      </div>
    </Section>

    <Section
      theme="mist"
      contentClassName={styles.alignCenter}
      title="DONATE TO DEPLOY THE FUTURE"
      hasHeadingLines={false}
    >
      <p className={styles.centerText}>
        Help us reach our fundraising goal! With your donation, we&apos;ll be able to provide our
        members with coding school scholarships, tickets to tech conferences, and access to
        necessary equipment.
      </p>
      <p>[DONATION PROGRESS BAR]</p>
      <Button>MAKE A DONATION</Button>
    </Section>

    <Section
      theme="white"
      contentClassName={styles.alignCenter}
      title="JOIN OUR THRIVING COMMUNITY"
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
          <Button>JOIN OUR SLACK</Button>
        </div>
        Slack is a community based collaboration tool where all the magic happens!
        <br />
        <OutboundLink href="https://slack.com/">Learn more</OutboundLink>
      </div>
    </Section>
  </>
);
