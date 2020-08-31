import Link from 'next/link';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import Accordion from 'components/Accordion/Accordion';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import styles from './styles/faq.module.css';

const questions = {
  general: [
    {
      title: 'When was Operation Code founded?',
      content: (
        <>
          The first line of code for the Operation Code site was pushed on August 21, 2014.
          Operation Code formally became a 501(c)3 nonprofit on May 4, 2016.
        </>
      ),
    },
    {
      title: 'How was Operation Code founded?',
      content: (
        <>
          Operation Code was founded in Portland, Oregon by ex-Army Captain David Molina, who took
          action and built operationcode.org to petition Congress to expand the New GI Bill to
          include code schools.
        </>
      ),
    },
    {
      title: 'Is Operation Code a 501(c)(3) nonprofit organization?',
      content: (
        <>
          Yes. Operation Code was granted tax-exempt status by the Internal Revenue Service,
          functioning as a charity under 501(c)(3) of the Internal Revenue Code, effective 4 May
          2016, with retroactive status to 15 June 2015. Donations to the organization are
          deductible as charitable contributions.
        </>
      ),
    },
    {
      title: 'Where is Operation Code based? Do you have a location near me?',
      content: (
        <>
          Operation Code, much like software, is built from anywhere with an internet connection,
          and is not based in one location. While we&apos;re headquartered in Portland, the entire
          organization is decentralized, including the board of directors and the core team. This
          allows us to more effectively serve the entire military community, whether they&apos;re
          veterans or military spouses, whether they&apos;re OCONUS or in-country. We have chapters
          all over the nation. Use Slack chat and join the closest town to you!
        </>
      ),
    },
    {
      title: 'Who does Operation Code serve?',
      content: (
        <>
          Operation Code serves our nation&apos;s finest who&apos;ve worn the uniform and their
          families who are interested in coding and software development. Our programs are offered
          at no cost to the military community, including veterans, transitioning service members,
          and military spouses and families.
        </>
      ),
    },
    {
      title:
        'What do I need to start learning software development and how much is this going to cost?',
      content: (
        <>
          First off, you will need access to a solid computer, a good browser (ex. Chrome), and a
          strong internet connection. It costs nothing to start learning to code and receive
          software mentorship through Operation Code, you just need a positive attitude, persistence
          and grit, and a thirst for new knowledge. We have over a dozen channels, from Ruby to
          JavaScript, iOS to Android, and from Free Code Camp to edX study groups.
        </>
      ),
    },
    {
      title: 'What is available to start learning to code today?',
      content: (
        <>
          Our friends at the New York City-based, The Flatiron School created{' '}
          <OutboundLink analyticsEventLabel="QnA Link" href="https://learn.co/">
            Learn.co
          </OutboundLink>
          , an online platform to get introduced to web development and the popular web framework,
          Ruby on Rails. Request an invite{' '}
          <OutboundLink analyticsEventLabel="QnA Link" href="https://learn.co/join/operation-code">
            here
          </OutboundLink>{' '}
          and then join the #learn-dot-co channel in our Slack. Another resource is{' '}
          <OutboundLink
            analyticsEventLabel="QnA Link"
            href="https://www.learnhowtoprogram.com/courses"
          >
            {' '}
            learnhowtoprogram.com{' '}
          </OutboundLink>{' '}
          , a resource maintained by Epicodus.
        </>
      ),
    },
    {
      title: 'Are mentors available? If so, how do I request one?',
      content: (
        <>
          While we do not have a long-term mentorship program, mentors are available for 30-minute
          sessions to assist you with things like mock interviews, code reviews, or general
          guidance. To request a mentorship session, type &quot;/mentor&quot; in any of our{' '}
          <OutboundLink analyticsEventLabel="QnA Link" href="http://operation-code.slack.com">
            Slack channels
          </OutboundLink>{' '}
          and fill out the form.
        </>
      ),
    },
    {
      title: 'What are the hours of operation for Operation Code?',
      content: (
        <>
          Operation Code is different in that we don&apos;t have regular business office hours. The
          team can usually be found in, our{' '}
          <OutboundLink analyticsEventLabel="QnA Link" href="http://operation-code.slack.com">
            Slack channel
          </OutboundLink>{' '}
          , or on{' '}
          <OutboundLink
            analyticsEventLabel="QnA Link"
            href="https://github.com/OperationCode/operationcode"
          >
            GitHub
          </OutboundLink>{' '}
          , fixing bugs and implementing new features.
        </>
      ),
    },
    {
      title: "How can I help, if I can't afford to donate to Operation Code?",
      content: (
        <>
          In addition to requiring financial support, we also need{' '}
          <OutboundLink analyticsEventLabel="QnA Link" href="http://op.co.de/volunteer">
            volunteers
          </OutboundLink>{' '}
          and interns. The larger our community, the more we can spread the word about our work.
          Also, remember that every{' '}
          <Link href="/donate">
            <a>donation</a>
          </Link>{' '}
          , no matter how modest, brings us closer to our goals.
        </>
      ),
    },
    {
      title: `I would like to receive Operation Code updates and news. How can I receive these
      communications?`,
      content: (
        <>
          We primarily use{' '}
          <OutboundLink analyticsEventLabel="QnA Link" href="https://twitter.com/operation_code">
            Twitter
          </OutboundLink>{' '}
          and{' '}
          <OutboundLink analyticsEventLabel="QnA Link" href="http://facebook.com/operationcode.org">
            Facebook
          </OutboundLink>{' '}
          to put out updates and news since it&apos;s faster to put out info and respond. Given our
          chosen craft, we don&apos;t do regular emails as often.
        </>
      ),
    },
    {
      title: "My question isn't listed. How do I contact Operation Code?",
      content: (
        <>
          If you have a question that isn&apos;t listed here on our FAQ, write to{' '}
          <OutboundLink
            analyticsEventLabel="QnA Link"
            href="mailto:staff@operationcode.org?subject=Question Not On FAQ"
          >
            staff@operationcode.org
          </OutboundLink>{' '}
          , and we&apos;ll get back to you as soon as we can.
        </>
      ),
    },
  ],
  donation: [
    {
      title: 'What is the fastest way to make a donation?',
      content: (
        <>
          The fastest way to make a donation is through our secured online form{' '}
          <Link href="/donate">
            <a>here</a>
          </Link>
          .
        </>
      ),
    },
    {
      title: 'I would rather mail a check. To whom do I make it out and where do I send it?',
      content: (
        <>
          It&apos;s less administrative work to accept online donations. Get in touch so we can
          assess your situation and contribution commitment.
        </>
      ),
    },
    {
      title: 'When will I receive a receipt for my contribution?',
      content: (
        <>
          When you make a donation to Operation Code online, you will receive an receipt by email.
        </>
      ),
    },
    {
      title: 'What percentage of my donation goes directly to helping the military community?',
      content: (
        <>
          Our goal is to direct 100 percent of online donations for programs and services, and keep
          administrative costs low while our annual fundraiser, grants and services fund operations.
        </>
      ),
    },
    {
      title: 'Can I donate items as gift in-kind?',
      content: (
        <>
          As a program-based nonprofit organization, Operation Code welcomes in-kind donations to
          directly benefit the organization, transitioning military, citizen-soldiers, veterans and
          their families in learning to code and building software to change the world. Items that
          are needed, include (but not limited to): frequent flyer miles, Adobe Cloud, used or new
          MacBook Air&apos;s, and grant writers.
        </>
      ),
    },
    {
      title: `I'd like to donate my software conference pass to an Operation Code member. How do I
      do that?`,
      content: (
        <>
          Get in touch, and we&apos;ll make an announcement in our Slack, tweet and/or write a blog
          post, and find a veteran to take your spot. Even then, travel and lodging is often a
          barrier.
        </>
      ),
    },
    {
      title: 'Can I make donations to a particular veteran or their family learning to code?',
      content: (
        <>
          <OutboundLink
            analyticsEventLabel="QnA Link"
            href="mailto:staff@operationcode.org?subject=Donating Directly"
          >
            Please get in touch with us directly,
          </OutboundLink>{' '}
          so we can ensure we find a good match.
        </>
      ),
    },
    {
      title: 'What is AmazonSmile and how can buying at Amazon help Operation Code?',
      content: (
        <>
          When you visit{' '}
          <OutboundLink
            analyticsEventLabel="QnA Link"
            href="https://smile.amazon.com/ch/47-4247572"
          >
            https://smile.amazon.com
          </OutboundLink>{' '}
          , you continue to have the same shopping experience as the same and most products
          available on amazon.com but you help Operation Code realize it &apos;s mission. Once
          you’ve selected &quot;Operation Code&quot; everything else functions the same. Shop for
          your favorite products or the perfect gift. Most products are eligible on Amazon Smile, if
          not, you’ll be notified. You can checkout normally as well. No extra cost is passed onto
          you–Amazon will donate 0.5% of your purchase to Operation Code! After you’ve successfully
          completed a purchase on AmazonSmile you can share the news with your friends on Facebook,
          Twitter or via email. This option appears on the confirmation page after your order is
          complete.
        </>
      ),
    },
  ],
  volunteer: [
    {
      title: 'How to Volunteer?',
      content: (
        <>
          If you would like to become a volunteer, please apply{' '}
          <OutboundLink analyticsEventLabel="QnA Link" href="http://op.co.de/volunteer">
            here
          </OutboundLink>{' '}
          .
        </>
      ),
    },
    {
      title: 'What volunteer opportunities are there at Operation Code?',
      content: (
        <>Currently, fundraising, community leaders, and grant writers are our current needs.</>
      ),
    },
  ],
};

function FAQ() {
  return (
    <div className={styles.FAQ}>
      <Head title="FAQ" />

      <HeroBanner title="Frequently Asked Questions" />

      {/* eslint-disable react/no-array-index-key */}
      <Content
        title="General Questions"
        hasTitleUnderline
        columns={questions.general.map((faq, index) => (
          <Accordion
            className={styles.FAQAccordion}
            content={{
              headingChildren: <h6>{faq.title}</h6>,
              bodyChildren: <p>{faq.content}</p>,
            }}
            accessibilityId={index}
            key={index}
          />
        ))}
      />

      <Content
        title="Donation Questions"
        hasTitleUnderline
        columns={questions.donation.map((faq, index) => (
          <Accordion
            className={styles.FAQAccordion}
            content={{
              headingChildren: <h6>{faq.title}</h6>,
              bodyChildren: <p>{faq.content}</p>,
            }}
            accessibilityId={index}
            key={index}
          />
        ))}
      />

      <Content
        title="Volunteer Questions"
        hasTitleUnderline
        columns={questions.volunteer.map((faq, index) => (
          <Accordion
            className={styles.FAQAccordion}
            content={{
              headingChildren: <h6>{faq.title}</h6>,
              bodyChildren: <p>{faq.content}</p>,
            }}
            accessibilityId={index}
            key={index}
          />
        ))}
      />
      {/* eslint-enable react/no-array-index-key */}
    </div>
  );
}

export default FAQ;
