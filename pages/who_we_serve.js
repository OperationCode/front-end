import axios from 'axios';
import PropTypes from 'prop-types';
import TrackVisibility from 'react-on-screen';
import get from 'lodash/get';
import classNames from 'classnames';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Badge from 'components/Badge/Badge';
import Content from 'components/Content/Content';
import ImageCard from 'components/Cards/ImageCard/ImageCard';
import LinkButton from 'components/Buttons/LinkButton/LinkButton';
import JoinSection from 'components/ReusableSections/JoinSection/JoinSection';
import CareerServicesIcon from 'static/images/icons/Custom/career_services.svg';
import MentorshipIcon from 'static/images/icons/Custom/mentorship.svg';
import ScholarshipsIcon from 'static/images/icons/Custom/scholarships.svg';
import { ONE_WEEK } from 'common/constants/unitsOfTime';
import { s3 } from 'common/constants/urls';
import { slackMembersAPIUrl, slackGeneralChannelId } from 'common/config/environment';
import styles from './styles/who_we_serve.module.css';

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

WhoWeServe.propTypes = {
  numberOfMembers: PropTypes.number,
};

WhoWeServe.defaultProps = {
  numberOfMembers: null,
};

export async function getStaticProps() {
  let numberOfMembers = null;

  if (process.env.NODE_ENV === 'production') {
    const response = await axios.get(slackMembersAPIUrl, {
      params: {
        token: process.env.SLACK_API_TOKEN,
        channel: slackGeneralChannelId,
      },
    });

    numberOfMembers = get(response, 'data.members.length', 0);
  }

  return {
    props: {
      numberOfMembers,
    },
    revalidate: ONE_WEEK,
  };
}

function WhoWeServe({ numberOfMembers }) {
  return (
    <div className={styles.WhoWeServe}>
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
              We work closely with military veterans, service members, and spouses who are
              passionate about transitioning into the tech industry. We work with{' '}
              {!numberOfMembers ? 'over 5,000' : `${numberOfMembers}`} members who are all working
              towards relevant goals on Slack and in-person meet-ups. Membership is free!
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
                Currently 1,000,000+ <br /> software development jobs available in the United
                States.
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
    </div>
  );
}

export default WhoWeServe;
