import Head from 'components/head';
import Container from 'components/Container/Container';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import OutboundLink from 'components/OutboundLink/OutboundLink';

const pageTitle = 'Donate';

function DonatePage() {
  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} className="min-h-[35dvh]" />

      <Container theme="white">
        <div className="border-b border-b-3 border-secondary pb-3 mb-3 flex flex-col gap-2 max-w-prose px-4 w-full mx-auto">
          <h4 className="-mb-2 underline">Why Donate?</h4>

          <p>
            Operation Code runs all operations and programs based on donations. We need your help!
            Your donations go directly towards helping our members by maintaining our open source
            software and infrastructure where an immersive learning environment helps members grow
            their skills while contributing to code repositories. We also provide free learning
            licenses, develop hiring pipelines, and provide professional training and development
            for mentors and volunteers.
          </p>

          <p>
            Your donations also helps our community reduce the risk facing our transitioning
            military, military spouses and military veterans by growing social connectedness,
            building camaraderie and teaching tangible technical and personal skills that combat
            chronic unemployment, homelessness, and suicide. You&apos;re providing members with the
            opportunity to learn software development, enter the tech industry, and Deploy The
            Future!
          </p>

          <p>
            As the largest community of military veterans, service members, and military families,
            we are over 8000 strong and have both the technical and military transitioning
            experience and helped thousands of members enter into the tech occupation and industry.
            As we continue to grow at an average rate of 33% annually, we cannot reach our mission
            to help our military community without your help!
          </p>

          <p>
            We pride ourselves in transparency, making sure that our community knows what their
            contributions are going towards. This pride is validated by receiving the{' '}
            <OutboundLink
              className="inline"
              href="https://www.guidestar.org/profile/shared/52626ac8-5e8b-445a-889e-30bf1ac0b46e"
              analyticsEventLabel="Donate Page GuideStar Report"
            >
              Gold Seal of Transparency from GuideStar in 2021 and the Platinum Seal of Transparency
              from GuideStar in 2023
            </OutboundLink>
            . Feel free to reach out to us by <a href="mailto:staff@operationcode.org">e-mail</a> if
            you have any questions.
          </p>
        </div>

        <iframe
          title="Donation Form"
          src="https://secure.lglforms.com/form_engine/s/BRtP7QUKyHOyEYsZROsRew"
          className="border-transparent outline-transparent max-w-prose px-4 w-full mx-auto h-[1300px]"
        />
      </Container>
    </>
  );
}

export default DonatePage;
