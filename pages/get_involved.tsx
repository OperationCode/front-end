import { cx } from 'common/utils/cva';
import TrackVisibility from 'react-on-screen';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Badge from 'components/Badge/Badge';
import Content from 'components/Content/Content';
import Link from 'next/link';
import LinkButton from 'components/Buttons/LinkButton/LinkButton';
import Heading from 'components/Heading/Heading';
import DonateSection from 'components/ReusableSections/DonateSection/DonateSection';
import JoinSection from 'components/ReusableSections/JoinSection/JoinSection';
import HighfivingIcon from 'static/images/icons/Custom/high_fiving.svg';
import BullseyeIcon from 'static/images/icons/Custom/bullseye.svg';
import ManHoldingKeyIcon from 'static/images/icons/Custom/man_holding_key.svg';
import NetworkingIcon from 'static/images/icons/Custom/networked_people.svg';
import ChartIcon from 'static/images/icons/Custom/chart.svg';
import PeopleMeetingIcon from 'static/images/icons/Custom/people_meeting.svg';
import { s3 } from 'common/constants/urls';
import styles from 'styles/get_involved.module.css';
import Image from 'next/image';

const VISIBILITY_OFFSET = 400;

const mentorItems = [
  {
    icon: <HighfivingIcon />,
    label: 'Feel more confident',
  },
  {
    icon: <BullseyeIcon />,
    label: 'Have defined career goals',
  },
  {
    icon: <ManHoldingKeyIcon />,
    label: 'Reach their true potential',
  },
];

const supportItems = [
  {
    icon: <NetworkingIcon />,
    label: 'Operations',
  },
  {
    icon: <ChartIcon />,
    label: 'Fundraising',
  },
  {
    icon: <PeopleMeetingIcon />,
    label: 'Partnerships',
  },
];

function GetInvolved() {
  return (
    <div className={styles.GetInvolved}>
      <Head title="Get Involved" />

      <HeroBanner
        backgroundImageSource={`${s3}redesign/heroBanners/get_involved.jpg`}
        className={styles.heroBannerMobilePositioning}
        title="You Can Make An Impact"
      >
        <>
          <p>
            Help make an impact to transitioning service members, military veterans, military
            spouses and dependents! You can help in several ways:{' '}
            <Link href="/donate">
              <a>Donate</a>
            </Link>{' '}
            to help provide scholarships and keep our daily operations afloat,{' '}
            <Link href="/services">
              <a>Volunteer</a>
            </Link>
            , or become a{' '}
            <Link href="/sponsorship">
              <a>Corporate Partner</a>
            </Link>
            .
          </p>

          <div className={styles.ctaContainer}>
            <LinkButton href="/about">Learn More</LinkButton>
            <LinkButton href="/join">Join Us</LinkButton>
          </div>
        </>
      </HeroBanner>

      <Content
        title="The Power of Mentorship"
        theme="gray"
        columns={[
          <p>By mentoring one of our members, you will help them:</p>,
          <div className={styles.badgeGroupings}>
            {mentorItems.map(item => (
              <Badge
                key={item.label}
                icon={item.icon}
                label={item.label}
                className={styles.badge}
              />
            ))}
          </div>,
        ]}
      />

      <Content
        columns={[
          <TrackVisibility offset={VISIBILITY_OFFSET}>
            {({ isVisible }) => (
              <div className={cx(styles.image, { [styles.showImage]: isVisible })}>
                <Image
                  src={`${s3}redesign/images/one_on_one_mentoring.jpg`}
                  alt="Woman outlines a whiteboarding problem to a man"
                  width={500}
                  height={500}
                />
              </div>
            )}
          </TrackVisibility>,
          <div>
            <Heading text="Empower Our Community and Support Our Mission" headingLevel={3} />

            <p>
              Make a difference in the lives of our military community and help them reach their
              pursuits of a tech career.
            </p>

            <div className={cx(styles.centeredText, styles.extraTopMargin)}>
              <LinkButton href="/join">Become A Mentor</LinkButton>
            </div>
          </div>,
        ]}
      />

      <Content
        theme="gray"
        title="Ways You Can Support Operation Code"
        columns={[
          <div>
            <p>
              We&apos;re always looking for volunteers who are dedicated to making an impact in the
              lives of military veterans, service members, and spouses.
            </p>
            <p className={styles.centeredText}>You can help us with:</p>
          </div>,
          <div className={cx(styles.badgeGroupings)}>
            {supportItems.map(item => (
              <Badge
                key={item.label}
                icon={item.icon}
                label={item.label}
                className={styles.badge}
              />
            ))}
          </div>,
        ]}
      />

      <DonateSection />

      <JoinSection />
    </div>
  );
}

export default GetInvolved;
