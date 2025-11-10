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
import Image from 'next/image';

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
    <div>
      <Head title="Get Involved" />

      <HeroBanner
        backgroundImageSource={`${s3}redesign/heroBanners/get_involved.jpg`}
        className="bg-position-[60%_center] md:bg-position-[center_20%] min-h-[60dvh]"
        title="You Can Make An Impact"
      >
        <div key="banner-content">
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

          <div className="flex w-full max-w-prose justify-evenly flex-wrap gap-x-2 [&>*]:mt-4">
            <LinkButton href="/about">Learn More</LinkButton>
            <LinkButton href="/join">Join Us</LinkButton>
          </div>
        </div>
      </HeroBanner>

      <Content
        title="The Power of Mentorship"
        theme="gray"
        columns={[
          <p key="mentorship-intro">By mentoring one of our members, you will help them:</p>,
          <div key="mentorship-badges" className="flex flex-wrap justify-center -mt-4">
            {mentorItems.map(item => (
              <Badge key={item.label} icon={item.icon} label={item.label} className="my-4 mx-16" />
            ))}
          </div>,
        ]}
      />

      <Content
        columns={[
          <div key="image" className="relative aspect-[1.5/1] m-8 w-full max-w-lg">
            <Image
              src={`${s3}redesign/images/one_on_one_mentoring.jpg`}
              alt="Woman outlines a whiteboarding problem to a man"
              layout="fill"
            />
          </div>,
          <div key="empower">
            <Heading text="Empower Our Community and Support Our Mission" headingLevel={3} />

            <p>
              Make a difference in the lives of our military community and help them reach their
              pursuits of a tech career.
            </p>

            <div className="text-center mt-8">
              <LinkButton href="/join">Become A Mentor</LinkButton>
            </div>
          </div>,
        ]}
      />

      <Content
        theme="gray"
        title="Ways You Can Support Operation Code"
        columns={[
          <div key="support-intro">
            <p>
              We&apos;re always looking for volunteers who are dedicated to making an impact in the
              lives of military veterans, service members, and spouses.
            </p>
            <p className="text-center">You can help us with:</p>
          </div>,
          <div key="support-badges" className="flex flex-wrap justify-center -mt-4">
            {supportItems.map(item => (
              <Badge key={item.label} icon={item.icon} label={item.label} className="my-4 mx-16" />
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
