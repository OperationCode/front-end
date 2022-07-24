import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import Accordion from 'components/Accordion/Accordion';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import { s3, codeOfConduct } from 'common/constants/urls';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import styles from 'styles/slack_guide.module.css';
import Image from 'next/image';

const pageTitle = 'Slack Guide';

const questions = {
  slack: [
    {
      title: `I’m brand new to programming and exploring my options.`,
      content: (
        <ul>
          <li>
            If you&apos;re new to coding, learn some basics at{' '}
            <OutboundLink
              analyticsEventLabel="freeCodeCamp Link"
              href="https://www.freecodecamp.org/"
            >
              freeCodeCamp
            </OutboundLink>{' '}
            or check out our extensive database with thousands of learning resources on{' '}
            <OutboundLink
              analyticsEventLabel="Operation Code Resources Link"
              href="https://operationcode.org/resources/1"
            >
              Operation Code Resources
            </OutboundLink>{' '}
            .
          </li>
          <li>
            Contribute to our open - source software on{' '}
            <OutboundLink analyticsEventLabel="Github" href="https://github.com/OperationCode/">
              Github
            </OutboundLink>{' '}
            .
          </li>
          <li>
            Request 1:1 mentorship in Slack by typing the <b>/mentor</b> command in any Slack
            channel or thread.
          </li>
          <li>
            Join the different channels based on your interest such as <b>#python</b>{' '}
            <b>#javascript</b>.
          </li>
          <li>
            Ask for assistance with coding, design or specific questions in the <b>#help</b>{' '}
            channel.
          </li>
        </ul>
      ),
    },
    {
      title: `I’m interested in going to a coding bootcamp or college.`,
      content: (
        <>
          Ask people who have attended a coding bootcamp or coding bootcamp recruiters by joining
          the <b>#coding-schools</b> or <b>#college</b> channels.
        </>
      ),
    },
    {
      title: `I’m a recent bootcamp/college graduate or looking for a job.`,
      content: (
        <ul>
          <li>
            Post your resume (redact your personal information) on <b>#career-advice</b> to have
            your resume reviewed or ask career-related questions.
          </li>
          <li>
            Join the <b>#daily-programmer</b> channel to practice coding or tech challenges you may
            encounter during an interview.
          </li>
          <li>
            Speak to a mentor for a more 1-on-1 conversation by typing <b>/mentor</b> on any
            channel.
          </li>
          <li>
            Keep an eye on the <b>#job-board</b> channel or ask specific questions like salary and
            benefits on the <b>#compensation</b> channel.
          </li>
          <li>
            Grow your portfolio and keep your skills sharp on <b>#oc-projects</b> and on our
            open-source software repositories on{' '}
            <OutboundLink
              analyticsEventLabel="Github"
              href="https://github.com/OperationCode/"
              alt="Github"
            >
              Github
            </OutboundLink>{' '}
            .
          </li>
        </ul>
      ),
    },
    {
      title: `The company I work at has a few job openings, where should I post them?`,
      content: (
        <>
          Post job openings on the <b>#job-board</b> channel
        </>
      ),
    },
    {
      title: `I’m an admissions recruiter or representative from a Coding School`,
      content: (
        <>
          You’re welcome to post information and answer questions about your Coding School on{' '}
          <b>#coding-schools</b> only based on the{' '}
          <OutboundLink
            analyticsEventLabel="Slack Community Guidelines"
            href="https://github.com/OperationCode/START_HERE/blob/master/community_guidelines.md"
            alt="Slack Community Guidelines"
          >
            Slack Community Guidelines
          </OutboundLink>{' '}
          and{' '}
          <OutboundLink
            analyticsEventLabel="Code of Conduct"
            href={codeOfConduct}
            alt="Code of Conduct"
          >
            Code of Conduct
          </OutboundLink>{' '}
          .
        </>
      ),
    },
    {
      title: `I’d like to learn more about …`,
      content: (
        <>
          Explore our numerous channels on a specific subject, or if you don’t see a channel ask on
          the <b>#help</b> or create a new channel.{' '}
          <b>
            <u>Be advised</u>
          </b>{' '}
          that the <b>#general</b> channel is reserved for announcements and greeting new members
          and questions should be redirected to specific channels such as:
          <ul>
            <li>
              <b>#career-advice</b> for resume reviews or any professional related questions
            </li>
            <li>
              <b>#job-board</b> for all job postings
            </li>
            <li>
              <b>#daily-programmer</b> to practicing coding problems
            </li>
            <li>
              Language specific channels such as <b>#python</b>, <b>#java</b>, <b>#javascript</b>,
              etc.
            </li>
            <li>
              Specific geographic channels such as <b>#san-diego</b>, <b>#san-francisco</b>, etc.
            </li>
            <li>
              Specific channels such as <b>#web-dev</b>, <b>#cyber-security</b>, <b>#dotnet</b>,
              <br /> <b>#computer-science</b> etc.
            </li>
            <li>
              <b>#random</b> for socializing, memes and other miscellaneous chatter
            </li>
            <li>
              <b>#transitioning</b> to share your transitioning experience from the military into
              the civilian workforce or to connect with others
            </li>
            <li>
              <b>#active-duty</b> for all active duty service members
            </li>
            <li>
              <b>#oc-projects</b> to collaborate on the Operation Code website and a good place to
              learn about open source. Visit the Operation Code Github{' '}
              <OutboundLink
                analyticsEventLabel="Operation Code Github repo"
                href="https://github.com/OperationCode"
                alt="Operation Code Github repo"
              >
                repo
              </OutboundLink>{' '}
              to learn more.
            </li>
            <li>
              <b>#help</b> for general questions
            </li>
          </ul>
        </>
      ),
    },
    {
      title: `How to explore other Operation Code channels?`,
      content: (
        <>
          <ScreenReaderOnly>
            Our instructions are focused on seeing-eye users. If you use assistive technology on
            your computer, [Slack&apos;s own
            guide](https://slack.com/help/articles/360000411963-Use-Slack-with-a-screen-reader) will
            be more helpful.
          </ScreenReaderOnly>

          <Image
            className={styles.exploreChannels}
            src={`${s3}slack_tutorial/explore_channels.jpg`}
            alt=""
            width={500}
            height={500}
          />

          <p>
            Once you’ve found a channel that interests you, click the green “Join Channel” button.
            You’re ready to go! Have fun, learn, and connect with others!
          </p>

          <Image
            className={styles.joinChannels}
            src={`${s3}slack_tutorial/join_channel.jpg`}
            alt=""
            width={500}
            height={500}
          />
        </>
      ),
    },
  ],
};

function SlackGuide() {
  return (
    <div className={styles.FAQ}>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle}>
        <iframe
          title="Slack Guide"
          src="https://youtube.com/embed/6wjmH5qL3Ms"
          frameBorder="0"
          allowFullScreen
          width="755"
          height="425"
          className={styles.slackVideo}
        />
      </HeroBanner>

      <HeroBanner title="Slack Frequently Asked Questions" />

      <Content
        columns={questions.slack.map(faq => (
          <Accordion
            className={styles.FAQAccordion}
            content={{
              headingChildren: <h6>{faq.title}</h6>,
              bodyChildren: <p>{faq.content}</p>,
            }}
          />
        ))}
      />
    </div>
  );
}

export default SlackGuide;
