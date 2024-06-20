import { Head } from '@/components/Head';
import { Container } from '@/components/Container/Container';
import { HeroBanner } from '@/components/HeroBanner/HeroBanner';
import { OutboundLink } from '@/components/OutboundLink/OutboundLink';
import { s3 } from '@/common/constants/urls';
import Link from 'next/link';
import { Card } from '@/components/Cards/Card/Card';
import Image from 'next/legacy/image';

const pageTitle = 'Scholarships Program';

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
    body: 'Apply to attend a full ride scholarship to one of the Code Platoon’s coding bootcamp cohorts.',
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

export default function ScholarshipsPage() {
  return (
    <>
      <Head title={pageTitle} />
      <HeroBanner
        title={pageTitle}
        backgroundImageSource={`${s3}heroBanners/scholarships_hero.jpeg`}
      />
      <Container theme="white" className="pb-8">
        <p>
          Our <span className="font-bold">Scholarships Program</span> is a competitive benefit that
          contributes directly to the professional development and career growth of our service
          members, Veterans and military family members.
        </p>

        <div className="text-left my-3 flex flex-col gap-3">
          <div className="max-w-prose self-center">
            <p>To qualify, you must:</p>

            <ul className="list-disc flex flex-col gap-3 mb-3 ml-4">
              <li>
                Be an active member of our Operation Code community (
                <Link href="/join">join here</Link>
                ), a U.S. active duty, Reserves or National Guard military service member, Veteran
                or military dependent.
              </li>
              <li>
                Abide by the{' '}
                <OutboundLink
                  href="https://docs.google.com/document/d/1KsdkKB1RyEuI7tBspuabxqJ-7n_PhL3B4vdHkBp_-7U/edit?usp=sharing"
                  analyticsEventLabel="Scholarship Abidement Policy"
                >
                  Operation Code Scholarships Policy
                </OutboundLink>
                .
              </li>
            </ul>

            <p>We provide learning licenses and access to the below platforms:</p>
          </div>

          <ul className="flex flex-wrap w-full justify-center self-center gap-4">
            {scholarshipOptions.map(option => (
              <li key={option.title} className="max-w-sm w-full h-96">
                <OutboundLink
                  className="w-full h-full hover:no-underline"
                  href={option.link}
                  analyticsEventLabel={`Scholarship Option Click [${option.title}]`}
                  hasIcon={false}
                >
                  <Card className="w-full h-full" hasAnimationOnHover>
                    <h5 className="-mb-16 text-center ">{option.title}</h5>
                    <div className="relative w-48 h-48 -mb-16">
                      <Image src={option.logoSrc} alt="" layout="fill" className="object-contain" />
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
