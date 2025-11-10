import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Badge from 'components/Badge/Badge';
import Content from 'components/Content/Content';
import ImageCard from 'components/Cards/ImageCard/ImageCard';
import LinkButton from 'components/Buttons/LinkButton/LinkButton';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import JoinSection from 'components/ReusableSections/JoinSection/JoinSection';
import CareerServicesIcon from 'static/images/icons/Custom/career_services.svg';
import MentorshipIcon from 'static/images/icons/Custom/mentorship.svg';
import ScholarshipsIcon from 'static/images/icons/Custom/scholarships.svg';
import { s3 } from 'common/constants/urls';

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
    <div>
      <Head title="Services" />

      <HeroBanner
        backgroundImageSource={`${s3}redesign/heroBanners/who_we_serve.jpg`}
        title="Services"
        className="min-h-[60dvh]"
      />

      <Content
        title="We're A Community"
        theme="gray"
        columns={[
          <div key="community">
            <p>
              We believe that the best way to take advantage of Operation Code is simply to become a
              member of the organization. We work closely with military veterans, service members,
              and military spouses and dependents who are passionate about transitioning into the
              tech industry. On Slack and in-person meet-ups, we work with over 7,000+ members who
              are all working towards relevant career and personal goals. Membership is free!
            </p>

            <div className="text-center mt-10">
              <LinkButton href="/join" theme="secondary">
                Become A Member
              </LinkButton>
            </div>

            <div>
              <p className="text-center mt-10">
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
          <div key="image-card-1">
            <ImageCard
              alt="Two developers collaborting over some code."
              imageSource={`${s3}redesign/images/paired_programming.jpg`}
              isImageFirst
            >
              <p className="text-center">
                There are 12.1 million net jobs for tech employment in the U.S. alone, with an
                addition of 307,000 jobs in a year.
              </p>
            </ImageCard>
          </div>,
        ]}
      />

      <Content
        title="Our Commitment To You"
        theme="gray"
        columns={[
          <p key="commitment-intro">
            Whether you are looking to change careers or starting a new one in the tech industry, we
            are here to help you succeed by providing:
          </p>,
          <div key="commitment-badges" className="flex flex-wrap justify-center -mt-4">
            {mentorItems.map(item => (
              <Badge
                key={item.label}
                icon={item.icon}
                label={item.label}
                className="fill-secondary mt-4 mx-16"
              />
            ))}
          </div>,
          <p key="chapter-events">
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
          <div key="image-card-2">
            <ImageCard
              alt="Room full of people chatting at an Operation Code meetup in New York City."
              imageSource={`${s3}redesign/images/chatting_at_meetup.jpg`}
            >
              <p className="text-center">We have meetup chapters all around the United States!</p>

              <LinkButton
                href="https://www.meetup.com/pro/operationcode"
                analyticsEventLabel="Meetup.com Locations Link"
                theme="secondary"
              >
                See Locations
              </LinkButton>
            </ImageCard>
          </div>,
        ]}
      />

      <JoinSection />
    </div>
  );
}

export default Services;
