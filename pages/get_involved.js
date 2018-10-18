import classNames from 'classnames';
import TrackVisibility from 'react-on-screen';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import Section from 'components/_common_/Section/Section';
import Button from 'components/_common_/Button/Button';
import Heading from 'components/_common_/Heading/Heading';
import Badge from 'components/Badge/Badge';
import PlaceholderIcon1 from 'static/images/icons/FontAwesome/users-solid.svg';
import BullseyeIcon from 'static/images/icons/Custom/bullseye.svg';
import ManHoldingKeyIcon from 'static/images/icons/Custom/man_holding_key.svg';
import NetworkingIcon from 'static/images/icons/Custom/networked_people.svg';
import PeopleMeetingIcon from 'static/images/icons/Custom/people_meeting.svg';
import { s3 } from 'common/constants/urls';
import styles from './styles/get_involved.css';

// TODO: Replace PlaceholderIcons with appropriate icon assets
const VISIBILITY_OFFSET = 400;

const mentorItems = [
  {
    icon: <PlaceholderIcon1 />,
    label: 'Feel More Confident',
  },
  {
    icon: <BullseyeIcon />,
    label: 'Have Defined Career Goals',
  },
  {
    icon: <ManHoldingKeyIcon />,
    label: 'Reach Their True Potential',
  },
];

const supportItems = [
  {
    icon: <NetworkingIcon />,
    label: 'Operations',
  },
  {
    icon: <PlaceholderIcon1 />,
    label: 'Fundraising',
  },
  {
    icon: <PeopleMeetingIcon />,
    label: 'Partnerships',
  },
];

export default () => (
  <div className={styles.getInvolved}>
    <Section theme="slate" contentClassName={styles.grid}>
      <div className={styles.introText}>
        <Heading
          className={classNames(
            styles.alignLeft,
            styles.sectionHeading,
            styles.sectionHeading_introHeading,
          )}
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
      <div>
        <img
          className={styles.introImage}
          src={`${s3}heroBanners/stock_family-2.jpg`}
          alt="Person explaining something. They're very happy."
        />
      </div>
    </Section>

    <Section theme="mist" contentClassName={styles.alignCenter}>
      <Heading hasHeadingLines={false} className={styles.sectionHeading} theme="slate">
        THE POWER OF MENTORSHIP
      </Heading>
      <p className={styles.marginBottom}>By mentoring one of our members, you will help them:</p>
      <div className={styles.flexDisplay}>
        {mentorItems.map(item => (
          <Badge
            key={item.label}
            className={classNames(styles.marginBottom, styles.badgeIcon)}
            svgComponent={item.icon}
            label={item.label}
          />
        ))}
      </div>
    </Section>

    <Section theme="slate" contentClassName={styles.grid}>
      <TrackVisibility offset={VISIBILITY_OFFSET}>
        {({ isVisible }) => (
          <div
            className={classNames(
              styles.alignRight,
              styles.offsetImage,
              isVisible && styles.showImage,
            )}
          >
            <img src={`${s3}stock_paired-programming.jpg`} alt="Empower Our Community" />
          </div>
        )}
      </TrackVisibility>
      <div>
        <Heading
          className={classNames(styles.alignLeft, styles.sectionHeading)}
          hasHeadingLines={false}
          theme="white"
        >
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

    <Section theme="mist" className={styles.sectionHeading} contentClassName={styles.alignCenter}>
      <Heading hasHeadingLines={false} theme="slate">
        WAYS YOU CAN SUPPORT OPERATION CODE
      </Heading>
      <p className={classNames(styles.marginBottom, styles.centerText)}>
        We&apos;re always looking for volunteers who are dedicated to making an impact in the lives
        of military veterans, service members, and spouses. You can help us with:
      </p>
      <div className={classNames(styles.flexDisplay)}>
        {supportItems.map(item => (
          <Badge
            key={item.label}
            className={classNames(styles.marginBottom, styles.badgeIcon)}
            svgComponent={item.icon}
            label={item.label}
          />
        ))}
      </div>
    </Section>

    <Section theme="slate" contentClassName={styles.grid}>
      <div className={styles.alignRight}>
        <Heading
          className={classNames(styles.alignLeft, styles.sectionHeading)}
          hasHeadingLines={false}
          theme="white"
        >
          SUPPORT OUR MISSION
        </Heading>
        <p>
          Make a difference in the lives of military veterans, service members, and spouses who are
          eager to transition into a software development career.
        </p>
        <Button theme="slate" className={styles.buttonOutline}>
          SUPPORT OC
        </Button>
      </div>
      <TrackVisibility offset={VISIBILITY_OFFSET}>
        {({ isVisible }) => (
          <div
            className={classNames(
              styles.alignRight,
              styles.offsetImage,
              isVisible && styles.showImage,
            )}
          >
            <img src={`${s3}stock_paired-programming.jpg`} alt="Support Our Mission" />
          </div>
        )}
      </TrackVisibility>
    </Section>

    <Section theme="mist" contentClassName={styles.alignCenter}>
      <Heading hasHeadingLines={false} theme="slate">
        DONATE TO DEPLOY THE FUTURE
      </Heading>
      <p className={styles.centerText}>
        Help us reach our fundraising goal! With your donation, we&apos;ll be able to provide our
        members with coding school scholarships, tickets to tech conferences, and access to
        necessary equipment.
      </p>
      <div className={styles.progressBarInfo}>
        <div className={styles.donatedAmount}>
          <span className={styles.amount}>$300.00</span>
          <span>Donated</span>
        </div>
        <div className={styles.goalAmount}>
          <span>Goal:</span>
          <span>$100,000</span>
        </div>
      </div>
      <div className={styles.progressBar}>
        <div style={{ width: '0px' }} className={styles.progressBarFill} />
      </div>
      <Button>MAKE A DONATION</Button>
    </Section>

    <Section theme="white" contentClassName={styles.alignCenter}>
      <Heading hasHeadingLines={false} theme="slate">
        JOIN OUR THRIVING COMMUNITY
      </Heading>
      <p>
        Are you ready to begin your journey towards a career in software development?
        <br />
        Get the support you need by joining our members only Slack community!
      </p>
      <div className={classNames(styles.alignCenter, styles.marginBottom)}>
        <form className={styles.slackForm}>
          <input placeholder="Email address" />
          <Button className={styles.slackForm_button} name="submit" type="submit">
            JOIN OUR SLACK
          </Button>
        </form>
        <p className={styles.slackText}>
          Slack is a community based collaboration tool where all the magic happens!
        </p>
        <OutboundLink href="https://slack.com/" analyticsEventLabel="Learn more (Slack)">
          Learn more
        </OutboundLink>
      </div>
    </Section>
  </div>
);
