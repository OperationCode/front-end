import Image from 'next/image';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import LinkButton from 'components/Buttons/LinkButton/LinkButton';
import { s3 } from 'common/constants/urls';

const pageTitle = 'Project Rebuild';

function ProjectRebuild() {
  return (
    <div>
      <Head
        title={pageTitle}
        description={`Operation Code is a registered 501(c)3 whose mission is to help our military
        community and SIV allied refugees grow in their tech careers while rebuilding our lives
        post-conflict. Operation Code is pleased to provide a refugee tech training program -
        Project Rebuild, in collaboration with our community partners: Fresh Start Refugee
        Assistance Center and Globally.`}
      />

      <HeroBanner
        title={pageTitle}
        backgroundImageSource={`${s3}heroBanners/project_rebuild_hero.jpg`}
        className="min-h-[60dvh]"
      />

      <Content
        theme="white"
        columns={[
          <div
            key="logos"
            className="flex flex-wrap items-center justify-center gap-12 lg:gap-16 -mb-8 [&>*:nth-child(3)]:lg:order-3 [&>*:nth-child(2)]:lg:order-1 [&>*:nth-child(1)]:lg:order-2"
          >
            <Image
              src={`${s3}partnerLogos/fresh-start-refugee.png`}
              layout="fixed"
              width="100"
              height="100"
              priority
            />
            <Image
              src={`${s3}branding/logos/large-blue-logo.png`}
              layout="intrinsic"
              width="550"
              height="100"
              priority
            />
            <Image
              src={`${s3}partnerLogos/globally_logo.png`}
              layout="fixed"
              width="140"
              height="140"
              priority
            />
          </div>,
        ]}
      />

      <Content
        theme="white"
        title="A collaborative tech program to rebuild refugees' lives"
        columns={[
          <div key="description">
            <p>
              In conjunction with Fresh Start Refugee Assistance Center, an Afghan-American led
              non-profit, and Globally.org’s ReUp Refugee Tech Re-Skilling Program, Operation Code
              is pleased to announce that we are expanding our Project Rebuild Refugee Tech Training
              Program. Since March 2022, Operation Code launched the initial pilot cohort, with 8
              Afghan refugee participants in attendance. We have expanded the cohorts to include
              Ukrainian refugees and Ukrainian transitioning military service members and their
              spouses.
            </p>

            <p>
              <span className="font-bold">Fresh Start provides wraparound services</span> such as:
              initial refugee resettlement efforts, ESL classes, driver’s education and licensing,
              affordable housing, mental health and cultural transition support as well as job
              search assistance.
            </p>

            <p>
              <span className="font-bold">
                Operation Code provides hands-on tech training and ongoing mentorship,
                apprenticeships and hiring
              </span>{' '}
              by providing our refugee participants a scholarship to complete one certification
              during the six-month cohort. Pairing a refugee with a Veteran or military spouse
              mentor to meet on a regular cadence, our two communities can continue to “rebuild” our
              parallel experiences, provide a tech-focused workforce development program and help
              refugees obtain high paid and meaningful work.
            </p>

            <p>
              <span className="font-bold">
                Through ongoing partnerships and hiring partners, ReUP by Globally
              </span>{' '}
              also helps to accelerate and simplify the job hiring process for newly arrived Afghans
              in the United States, providing candidates with a path to access opportunities
              commensurate with their prior work experience and education.
            </p>
          </div>,
        ]}
      />

      <Content
        theme="white"
        title="How you can help"
        columns={[
          <div key="student-info">
            <p>
              Are you interested in participating in future cohorts of Project Rebuild as a student?
              We currently train and provide scholarships for at least one tech Google certification
              in these areas: cybersecurity, data analytics, digital marketing and e-commerce, UI/UX
              design, and project management. Pending financial assistance available, we may also
              cover one (1) tech certification exam such as A+, Network+ or Sec+.
            </p>

            <p>
              Each cohort runs for six (6) months conducted remotely at your own pace. We will pair
              you with a mentor in our military community who currently works in tech and fits your
              objectives and/or geographical location. You must have proficient English speaking and
              reading capability and proficient computer and keyboard use.
            </p>

            <p>
              Still interested? Fill out the{' '}
              <OutboundLink
                href="https://op.co.de/ProjectRebuildApplication"
                analyticsEventLabel="Project Rebuild Application Form Click"
              >
                application form
              </OutboundLink>
              .
            </p>
          </div>,
        ]}
      />

      <Content
        theme="white"
        title="How you can help"
        columns={[
          <div key="help-info">
            <p>
              We need your help to continue this impactful and life-changing program! You can
              provide in-kind donations such as new laptops, software licenses, or volunteer as a
              tech mentor or hiring partner!
            </p>

            <p>
              We also need financial donations that will go directly to support the participants to
              be able to focus on their certifications and tech training through a living stipend.
              Donate what you can.
            </p>
          </div>,
        ]}
      />

      <Content
        theme="white"
        title="*Ongoing Financial Assistance Needed"
        columns={[
          <div key="financial">
            <p>
              The funds for the Project Rebuild Program is dependent on your financial support and
              not taken from our general fund for U.S. military service members, Veterans and
              military spouses. Please consider supporting this life-changing program and directing
              your donations specifically for Project Rebuild.
            </p>

            <p>
              WE CANNOT MEET OUR MISSION WITHOUT YOUR HELP! DONATE YOUR BEST AMOUNT TODAY. Contact
              us to volunteer or donate in-kind services/hardware/software at:{' '}
              <OutboundLink
                href="mailto:staff@operationcode.org"
                analyticsEventLabel="Project Rebuild - 'staff@operationcode.org' link"
                hasIcon={false}
              >
                staff@operationcode.org
              </OutboundLink>
            </p>

            <div className="w-full mt-8 mx-auto text-center">
              <LinkButton href="/donate">Donate</LinkButton>
            </div>
          </div>,
        ]}
      />
    </div>
  );
}

export default ProjectRebuild;
