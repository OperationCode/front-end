import TrackVisibility from 'react-on-screen';
import classNames from 'classnames';
import styles from 'styles/services.module.css';
import { Head } from '@/components/Head';
import { HeroBanner } from '@/components/HeroBanner/HeroBanner';
import { Badge } from '@/components/Badge/Badge';
import { Content } from '@/components/Content/Content';
import { ImageCard } from '@/components/Cards/ImageCard/ImageCard';
import { LinkButton } from '@/components/Buttons/LinkButton/LinkButton';
import { OutboundLink } from '@/components/OutboundLink/OutboundLink';
import { JoinSection } from '@/components/ReusableSections/JoinSection/JoinSection';
import CareerServicesIcon from '@/public/static/images/icons/Custom/career_services.svg';
import MentorshipIcon from '@/public/static/images/icons/Custom/mentorship.svg';
import ScholarshipsIcon from '@/public/static/images/icons/Custom/scholarships.svg';
import { s3 } from '@/common/constants/urls';

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

function Services() {
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
            <p>
              We believe that the best way to take advantage of Operation Code is simply to become a
              member of the organization. We work closely with military veterans, service members,
              and military spouses and dependents who are passionate about transitioning into the
              tech industry. On Slack and in-person meet-ups, we work with over 7,000+ members who
              are all working towards relevant career and personal goals. Membership is free!
            </p>

            <div className={classNames(styles.centeredText, styles.topMargin)}>
              <LinkButton href="/join" theme="secondary">
                Become A Member
              </LinkButton>
            </div>

            <div>
              <p className={classNames(styles.centeredText, styles.topMargin)}>
                Do you love Operation Code? Check out our{' '}
                <OutboundLink
                  analyticsEventLabel="Merch Store"
                  hasIcon
                  href="https://operationcode.threadless.com/"
                >
                  Merch Store
                </OutboundLink>{' '}
                and get some swag!
              </p>
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
          <p>
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
          <p>
            We also offer local chapter events. Regarding local chapter events, inquire about events
            near you or about starting a chapter in your area by emailing{' '}
            <OutboundLink
              href="mailto:staff@operationcode.org"
              analyticsEventLabel="Email"
              hasIcon={false}
            >
              staff@operationcode.org
            </OutboundLink>
            .
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
