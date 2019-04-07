import TrackVisibility from 'react-on-screen';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Badge from 'components/Badge/Badge';
import Content from 'components/Content/Content';
import ImageCard from 'components/Cards/ImageCard/ImageCard';
import LinkButton from 'components/LinkButton/LinkButton';
import JoinSection from 'components/ReusableSections/JoinSection/JoinSection';
import HighfivingIcon from 'static/images/icons/Custom/high_fiving.svg';
import GraduationCapIcon from 'static/images/icons/FontAwesome/graduation-cap-solid.svg';
import BriefcaseIcon from 'static/images/icons/FontAwesome/briefcase-solid.svg';
import { s3 } from 'common/constants/urls';
import styles from './styles/get_involved.css';

const VISIBILITY_OFFSET = 400;

const mentorItems = [
  {
    icon: <HighfivingIcon />,
    label: 'One-on-one mentorship',
  },
  {
    icon: <GraduationCapIcon />,
    label: 'Coding scholarships',
  },
  {
    icon: <BriefcaseIcon />,
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
          <p>
            Military veterans, service members, and spouses who are passionate about transition into
            a career in software development. We work with over 4,000 members who are all are
            working to enter or currently thrive in the tech industry.
          </p>

          <div className={styles.centeredText}>
            <LinkButton href="/join">Become A Member</LinkButton>
          </div>
        </div>,
      ]}
    />

    <Content
      columns={[
        <TrackVisibility offset={VISIBILITY_OFFSET}>
          <ImageCard
            alt=""
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
        <p className={styles.centeredText}>
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
          <ImageCard alt="" imageSource={`${s3}redesign/images/chatting_at_meetup.jpg`}>
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
