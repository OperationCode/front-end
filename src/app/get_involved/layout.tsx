import type { PropsWithChildren } from 'react';
import Link from 'next/link';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import Medal from '@/components/Medal/Medal';
import Section from '@/components/Section/Section';
import { buttonVariants } from '@/components/ui/button';
import DonateSection from '@/components/ReusableSections/DonateSection/DonateSection';
import JoinSection from '@/components/ReusableSections/JoinSection/JoinSection';
import HighfivingIcon from '@/static/images/icons/Custom/high_fiving.svg';
import BullseyeIcon from '@/static/images/icons/Custom/bullseye.svg';
import ManHoldingKeyIcon from '@/static/images/icons/Custom/man_holding_key.svg';
import NetworkingIcon from '@/static/images/icons/Custom/networked_people.svg';
import ChartIcon from '@/static/images/icons/Custom/chart.svg';
import PeopleMeetingIcon from '@/static/images/icons/Custom/people_meeting.svg';
import { s3 } from '@/lib/constants/urls';

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

export default function GetInvolvedLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <HeroBanner
        backgroundImageSource={`${s3}redesign/heroBanners/get_involved.jpg`}
        className="min-h-[60dvh] bg-position-[60%_center] md:bg-position-[center_20%]"
        title="You Can Make An Impact"
      >
        <div>
          <p>
            Help make an impact to transitioning service members, military veterans, military
            spouses and dependents! You can help in several ways: <Link href="/donate">Donate</Link>{' '}
            to help provide scholarships and keep our daily operations afloat,{' '}
            <Link href="/services">Volunteer</Link>, or become a{' '}
            <Link href="/sponsorship">Corporate Partner</Link>.
          </p>

          <div className="flex w-full max-w-prose flex-wrap justify-evenly gap-x-2 *:mt-4">
            <Link href="/about" className={buttonVariants({ variant: 'default' })}>
              Learn More
            </Link>
            <Link href="/join" className={buttonVariants({ variant: 'default' })}>
              Join Us
            </Link>
          </div>
        </div>
      </HeroBanner>

      <Section title="The Power of Mentorship" theme="gray">
        <p>By mentoring one of our members, you will help them:</p>
        <div className="-mt-4 flex flex-wrap justify-center">
          {mentorItems.map((item) => (
            <Medal key={item.label} icon={item.icon} label={item.label} className="mx-16 my-4" />
          ))}
        </div>
      </Section>

      {children}

      <Section theme="gray" title="Ways You Can Support Operation Code">
        <div>
          <p>
            We&apos;re always looking for volunteers who are dedicated to making an impact in the
            lives of military veterans, service members, and spouses.
          </p>
          <p className="text-center">You can help us with:</p>
        </div>
        <div className="-mt-4 flex flex-wrap justify-center">
          {supportItems.map((item) => (
            <Medal key={item.label} icon={item.icon} label={item.label} className="mx-16 my-4" />
          ))}
        </div>
      </Section>

      <DonateSection />

      <JoinSection />
    </div>
  );
}
