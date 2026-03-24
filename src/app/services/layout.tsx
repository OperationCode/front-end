import type { PropsWithChildren } from 'react';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import Badge from '@/components/Badge/Badge';
import Section from '@/components/Section/Section';
import OutboundLink from '@/components/OutboundLink/OutboundLink';
import JoinSection from '@/components/ReusableSections/JoinSection/JoinSection';
import CareerServicesIcon from '@/static/images/icons/Custom/career_services.svg';
import MentorshipIcon from '@/static/images/icons/Custom/mentorship.svg';
import ScholarshipsIcon from '@/static/images/icons/Custom/scholarships.svg';
import { s3 } from '@/common/constants/urls';

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

export default function ServicesLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <HeroBanner
        backgroundImageSource={`${s3}redesign/heroBanners/who_we_serve.jpg`}
        title="Services"
        className="min-h-[60dvh]"
      />

      {children}

      <Section title="Our Commitment To You" theme="gray">
        <p>
          Whether you are looking to change careers or starting a new one in the tech industry, we
          are here to help you succeed by providing:
        </p>
        <div className="-mt-4 flex flex-wrap justify-center">
          {mentorItems.map((item) => (
            <Badge
              key={item.label}
              icon={item.icon}
              label={item.label}
              className="mx-16 mt-4 fill-secondary"
            />
          ))}
        </div>
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
        </p>
      </Section>

      <JoinSection />
    </div>
  );
}
