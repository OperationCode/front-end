import axios from 'axios';
import Link from 'next/link';
import { number } from 'prop-types';
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
import styles from 'styles/services.module.css';

const VISIBILITY_OFFSET = 400;

const mentorItems = [
  {
    icon: <MentorshipIcon />,
    label: 'One-on-One Mentorship & Networking',
  },
  {
    icon: <ScholarshipsIcon />,
    label: 'Coding Scholarships and Licenses',
  },
  {
    icon: <CareerServicesIcon />,
    label: 'Career Services and Professional Development',
  },
];

Services.propTypes = {
  numberOfMembers: number,
};

Services.defaultProps = {
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

function Services({ numberOfMembers }) {
  return (
    <div className={styles.Services}>
      <Head title="Services" />

      <HeroBanner
        backgroundImageSource={`${s3}redesign/heroBanners/who_we_serve.jpg`}
        title="Services"
      />

      <Content
        title="We're A Community"
        theme="gray"
        columns={[
          <div>
            <p className={styles.justifyAlign}>
              We believe that the best way to take advantage of Operation Code is simply to become a
              member of the organization. We work closely with military veterans, service members,
              and military spouses and dependents who are passionate about transitioning into the
              tech industry. On Slack and in-person meet-ups, we work with{' '}
              {!numberOfMembers ? 'over 7,000+' : `${numberOfMembers}`} members who are all working
              towards relevant career and personal goals. Membership is free!
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
                There are 12.1 million net jobs for tech employment in the U.S. alone, with an
                addition of 307,000 jobs in a year.
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
          <p className={styles.justifyAlign}>
            We also offer information on many of America&apos;s best{' '}
            <Link href="/code_schools">
              <a>&ldquo;coding bootcamps&rdquo;</a>
            </Link>
            , a community-maintained database of{' '}
            <Link href="/resources">
              <a>learning resources</a>
            </Link>
            , and a listing of{' '}
            <Link href="/events">
              <a>ongoing events</a>
            </Link>
          </p>,
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

export default Services;
