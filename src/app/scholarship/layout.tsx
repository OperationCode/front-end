import type { PropsWithChildren } from 'react';
import Image from 'next/image';
import Container from '@/components/Container/Container';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import OutboundLink from '@/components/OutboundLink/OutboundLink';
import { s3 } from '@/lib/constants/urls';
import Card from '@/components/Cards/Card/Card';

interface ScholarshipOption {
  title: string;
  logoSrc: string;
  body: string;
  link: string;
}

const airtableScholarshipApplicationLink =
  'https://airtable.com/appeXPiUS5GQwC7Vi/shr5CuF4IJGks7Wfp';

const scholarshipOptions: ScholarshipOption[] = [
  {
    title: 'Code Platoon X Operation Code',
    logoSrc: `${s3}partnerLogos/code_platoon.png`,
    body: "Apply to attend a full ride scholarship to one of the Code Platoon's coding bootcamp cohorts.",
    link: '/scholarship/code_platoon',
  },
  {
    title: 'Coursera - Google Certifications',
    logoSrc: `${s3}partnerLogos/coursera.png`,
    body: 'Get certified with Google and prepare for in-demand jobs in Cybersecurity, Digital Marketing & Analytics, Data Analytics, IT Support, Project Management, & UX Design.',
    link: airtableScholarshipApplicationLink,
  },
  {
    title: 'CompTIA Certifications Training & Exam',
    logoSrc: `${s3}partnerLogos/comptia.png`,
    body: 'With more than 2 million IT certifications issued worldwide, CompTIA is dedicated to helping IT professionals lead the charge in our digitally connected world.',
    link: airtableScholarshipApplicationLink,
  },
  {
    title: 'Secure Code Warrior',
    logoSrc: `${s3}partnerLogos/secure_code_warrior.png`,
    body: 'Are you interested in using one of our licenses with Secure Code Warrior? Sign up today and beef up your appsec skills while gaming!',
    link: airtableScholarshipApplicationLink,
  },
  {
    title: 'Treehouse',
    logoSrc: `${s3}partnerLogos/treehouse.png`,
    body: 'Start your journey into coding, programming, and design. Perfect for beginners, intermediate and advanced learners.',
    link: airtableScholarshipApplicationLink,
  },
  {
    title: 'Udemy',
    logoSrc: `${s3}partnerLogos/udemy.png`,
    body: 'Skill up to success! Udemy offers over 185,000 courses and has 49 million students. Learn programming, marketing, data science and more.',
    link: airtableScholarshipApplicationLink,
  },
];

export default function ScholarshipLayout({ children }: PropsWithChildren) {
  return (
    <>
      <HeroBanner
        title="Scholarships Program"
        backgroundImageSource={`${s3}heroBanners/scholarships_hero.jpeg`}
        className="min-h-[60dvh] text-center"
      />

      <Container theme="white" className="pb-8">
        <div className="my-3 flex flex-col gap-3 text-left">
          <div className="max-w-prose self-center">{children}</div>

          <ul className="flex w-full flex-wrap justify-center gap-4 self-center">
            {scholarshipOptions.map((option) => (
              <li key={option.title} className="h-96 w-full max-w-sm">
                <OutboundLink
                  className="size-full hover:no-underline"
                  href={option.link}
                  analyticsEventLabel={`Scholarship Option Click [${option.title}]`}
                  hasIcon={false}
                >
                  <Card className="size-full" hasAnimationOnHover>
                    <h5 className="-mb-16 text-center">{option.title}</h5>
                    <div className="relative -mb-16 size-48">
                      <Image src={option.logoSrc} alt="" fill className="object-contain" />
                    </div>
                    <p>{option.body}</p>
                    <p>Press to apply!</p>
                  </Card>
                </OutboundLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
}
