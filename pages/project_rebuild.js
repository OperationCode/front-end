import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import styles from 'styles/project_rebuild.module.css';
import LinkButton from 'components/Buttons/LinkButton/LinkButton';
import { s3 } from 'common/constants/urls';

const pageTitle = 'Project Rebuild';

export default () => {
  return (
    <div>
      <Head title={pageTitle} />

      <HeroBanner
        title={pageTitle}
        backgroundImageSource={`${s3}heroBanners/project_rebuild_hero.jpg`}
      />

      <Content theme="white" columns={[<div>Logos here</div>]} />

      <Content
        theme="white"
        title="A collaborative tech program to rebuild refugees’ lives"
        columns={[
          <>
            <p>
              In conjunction with Fresh Start Refugee Assistance Center, an Afghan-American led
              non-profit, and Globally.org’s ReUp Refugee Tech Re-Skilling Program, Operation Code
              is pleased to announce that we are continuing our Project Rebuild Refugee Tech
              Training Program. Since March 2022, Operation Code launched the initial pilot cohort,
              with 8 Afghan refugee participants in attendance.
            </p>

            <p>
              Fresh Start provides wraparound services such as: initial refugee resettlement
              efforts, ESL classes, driver’s education and licensing, affordable housing, mental
              health and cultural transition support as well as job search assistance.
            </p>

            <p>
              Operation Code provides hands-on tech training and ongoing mentorship, apprenticeships
              and hiring by providing our refugee participants a scholarship to complete one
              certification during the six-month cohort. Pairing a refugee with a Veteran or
              military spouse mentor to meet on a regular cadence, our two communities can continue
              to “rebuild” our parallel experiences, provide a tech-focused workforce development
              program and help refugees obtain high paid and meaningful work.
            </p>

            <p>
              Through ongoing partnerships and hiring partners, ReUP by Globally also helps to
              accelerate and simplify the job hiring process for newly arrived Afghans in the United
              States, providing candidates with a path to access opportunities commensurate with
              their prior work experience and education.
            </p>
          </>,
        ]}
      />
      <Content
        theme="white"
        title="How you can help"
        columns={[
          <>
            <p>
              We need your help to continue this impactful and life-changing program! You can
              provide in-kind donations such as new laptops, software licenses, or volunteer as a
              tech mentor or hiring partner!
            </p>

            <p>
              We also need financial donations that will go directly to support the participants
              focus on their certifications and tech training through a living stipend.
            </p>
          </>,
        ]}
      />

      <Content
        theme="white"
        title="*Time-sensitive request"
        columns={[
          <>
            <p>
              <span className={styles.bold}>
                Help us reach our fundraising target of $36,000 USD to support 4 FALL cohort members
                who have been selected to participate in the Microsoft Software and Systems Academy
                (MSSA).
              </span>
            </p>

            <p>
              Your generosity provides $9K in stipends per member to cover a total of 4.5 months of
              expenses while they are participating in the full-time program. The stipend will help
              to cover rent, utilities, food, and bills. Upon completion of the MSSA program,
              graduates earn on average nationwide, a salary of $70,000. This is more than 3 times
              the average annual income of a refugee household in the first 5 years of resettling in
              the USA.
            </p>

            <p>
              WE CANNOT MEET OUR MISSION WITHOUT YOUR HELP! DONATE YOUR BEST AMOUNT TODAY. Contact
              us to volunteer or donate in-kind services/hardware/software at:
              <OutboundLink
                href="mailto:staff@operationcode.org"
                analyticsEventLabel="Project Rebuild - 'staff@operationcode.org' link"
                hasIcon={false}
              >
                staff@operationcode.org
              </OutboundLink>
            </p>

            <div className={styles.donateLinkButtonContainer}>
              <LinkButton href="/donate">Donate</LinkButton>
            </div>
          </>,
        ]}
      />
    </div>
  );
};
