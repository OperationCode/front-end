import TrackVisibility from 'react-on-screen';
import classNames from 'classnames';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Badge from 'components/Badge/Badge';
import Content from 'components/Content/Content';
import ImageCard from 'components/Cards/ImageCard/ImageCard';
import LinkButton from 'components/LinkButton/LinkButton';
import JoinSection from 'components/ReusableSections/JoinSection/JoinSection';
import CareerServicesIcon from 'static/images/icons/Custom/career_services.svg';
import MentorshipIcon from 'static/images/icons/Custom/mentorship.svg';
import ScholarshipsIcon from 'static/images/icons/Custom/scholarships.svg';
import { s3 } from 'common/constants/urls';
import styles from './styles/who_we_serve.css';

const VISIBILITY_OFFSET = 400;

const mentorItems = [
  {
    icon: <MentorshipIcon />,
    label: 'One-on-one mentorship',
  },
  {
    icon: <ScholarshipsIcon />,
    label: 'Coding scholarships',
  },
  {
    icon: <CareerServicesIcon />,
    label: 'Career services',
  },
];

export default () => (
  <>
    <Head title="Who We Serve" />

    <HeroBanner
      backgroundImageSource={`${s3}redesign/heroBanners/who_we_serve.jpg`}
      title="We're A Community"
    />

    <Content
      title="Who Do We Serve?"
      theme="gray"
      columns={[
        <div>
          <p className={styles.justifyAlign}>
            We work closely with military veterans, service members, and spouses who are passionate
            about transitioning into the tech industry. We work with over 4,000 members who are all
            working towards relevant goals.
          </p>

          <div className={classNames(styles.centeredText, styles.topMargin)}>
            <LinkButton href="/join" theme="secondary">
              Become A Member
            </LinkButton>
          </div>
        </div>,
      ]}
    />

    <Content
      columns={[
        <TrackVisibility offset={VISIBILITY_OFFSET}>
          <ImageCard
            alt="Two developers collaborting over some code."
            imageSource={`${s3}redesign/images/paired_programming.jpg`}
            isImageFirst
          >
            <p className={styles.centeredText}>
              Currently 1,000,000+ <br /> software development jobs available in the United States.
            </p>
          </ImageCard>
        </TrackVisibility>,
      ]}
    />

    <Content
      title="Our Commitment To You"
      theme="gray"
      columns={[
        <p className={styles.justifyAlign}>
          Whether you are looking to change careers or starting a new one in the tech industry, we
          are here to help you succeed by providing:
        </p>,
        <div className={styles.badgeGroupings}>
          {mentorItems.map(item => (
            <Badge key={item.label} icon={item.icon} label={item.label} className={styles.badge} />
          ))}
        </div>,
      ]}
    />

    <Content
      columns={[
        <TrackVisibility offset={VISIBILITY_OFFSET}>
          <ImageCard
            alt="Room full of people chatting at an Operation Code meetup in New York City."
            imageSource={`${s3}redesign/images/chatting_at_meetup.jpg`}
          >
            <p className={styles.centeredText}>
              We have meetup chapters all around the United States!
            </p>

            <LinkButton
              href="https://www.meetup.com/pro/operationcode"
              analyticsEventLabel="Meetup.com Locations Link"
              theme="secondary"
            >
              See Locations
            </LinkButton>
          </ImageCard>
        </TrackVisibility>,
      ]}
    />

    <JoinSection />
  </>
);
