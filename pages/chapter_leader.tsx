import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import OutboundLink from 'components/OutboundLink/OutboundLink';

const pageTitle = 'Chapter Leaders';

function ChapterLeader() {
  return (
    <div>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} className="min-h-[60dvh]">
        <p>
          Operation Code is looking for volunteer Chapter Leaders to build local communities
          nationwide! Tell us more about yourself{' '}
          <OutboundLink
            href="http://op.co.de/chapter-leader-volunteer"
            analyticsEventLabel="Chapter Leader Volunteer (Top)"
          >
            here
          </OutboundLink>{' '}
          and help further our mission to get the military community into the tech industry!
        </p>
      </HeroBanner>

      <Content
        theme="white"
        columns={[
          <div key="content">
            <h5>Who is a Chapter Leader?</h5>

            <p className="w-full max-w-full">
              An Operation Code Chapter Leader organizes meetups and events at the local level, and
              establishes relationships with local companies, educational institutions, and other
              organizations, in order to help build the community and support the mission. Chapter
              Leaders are people who are...
            </p>

            <ul>
              <li>Representative of the Operation Code values.</li>
              <li>
                Dedicated, reliable and has consistently displayed participation in the community.
              </li>
              <li>
                Able to understand the community dynamics and encourages members to have a voice.
                They empower people.
              </li>
              <li>
                Organized, and able to stay on top of their multiple responsibilities, such as
                managing events and recruiting new members.
              </li>
              <li>
                Passionate communicators that have a strong desire to connect with like-minded
                people.
              </li>
              <li>
                Able to explain basic programming concepts to chapter members if necessary, as new
                chapter members may range from being senior software developers, to having little or
                no experience with software development.
              </li>
            </ul>

            <h5>Responsibilities</h5>
            <ul>
              <li>Enforce the Code of Conduct on Operation Code web communities.</li>
              <li>Host events, including trainings, talks, hack nights, etc.</li>
              <li>Build partnerships in the local community.</li>
              <li>
                <OutboundLink
                  href="https://opencollective.com/operationcode"
                  analyticsEventLabel="Chapter Leader - Donate"
                >
                  Raise funds
                </OutboundLink>{' '}
                and in-kind donations in support of the mission.
              </li>
              <li>Build and integrate the infrastructure necessary to sustain the chapter.</li>
              <li>
                Reach out to potential new members, receiving and integrating them to the team.
              </li>
              <li>Advocate for and promote the organization in the local community.</li>
              <li>Help members learn, grow, and find jobs!</li>
            </ul>

            <p>
              Think you are interested in becoming a Chapter Leader? Click{' '}
              <OutboundLink
                href="http://op.co.de/chapter-leader-volunteer"
                analyticsEventLabel="Chapter Leader Volunteer (Bottom)"
              >
                here.
              </OutboundLink>
            </p>
          </div>,
        ]}
      />
    </div>
  );
}

export default ChapterLeader;
