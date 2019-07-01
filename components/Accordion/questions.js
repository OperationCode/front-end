import React from 'react';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import { donateLink } from 'common/constants/urls';

const questions = {
  general: [
    {
      question: 'When was Operation Code founded?',
      answer: (
        <>
          The first line of code for the Operation Code site was pushed on August 21, 2014.
          Operation Code formally became a 501(c)3 nonprofit on May 4, 2016.
        </>
      ),
    },
    {
      question: 'How was Operation Code founded?',
      answer: (
        <>
          Operation Code was founded in Portland, Oregon by ex-Army Captain David Molina, who took
          action and built operationcode.org to petition Congress to expand the New GI Bill to
          include code schools.
        </>
      ),
    },
    {
      question: 'Is Operation Code a 501(c)(3) nonprofit organization?',
      answer: (
        <>
          Yes. Operation Code was granted tax-exempt status by the Internal Revenue Service,
          functioning as a charity under 501(c)(3) of the Internal Revenue Code, effective 4 May
          2016, with retroactive status to 15 June 2015. Donations to the organization are
          deductible as charitable contributions.
        </>
      ),
    },
    {
      question: 'Where is Operation Code based? Do you have a location near me?',
      answer: (
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
      question: 'Who does Operation Code serve?',
      answer: (
        <>
          Operation Code serves our nation&apos;s finest who&apos;ve worn the uniform and their
          families who are interested in coding and software development. Our programs are offered
          at no cost to the military community, including veterans, transitioning service members,
          and military spouses and families.
        </>
      ),
    },
    {
      question:
        'What do I need to start learning software development and how much is this going to cost?',
      answer: (
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
      question: 'What is available to start learning to code today?',
      answer: (
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
      question: 'Are mentors available? If so, how do I request one?',
      answer: (
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
      question: 'What are the hours of operation for Operation Code?',
      answer: (
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
      question: "How can I help, if I can't afford to donate to Operation Code?",
      answer: (
        <>
          In addition to requiring financial support, we also need{' '}
          <OutboundLink analyticsEventLabel="QnA Link" href="http://op.co.de/volunteer">
            volunteers
          </OutboundLink>{' '}
          and interns. The larger our community, the more we can spread the word about our work.
          Also, remember that every{' '}
          <OutboundLink analyticsEventLabel="QnA Link" href={donateLink}>
            donation
          </OutboundLink>{' '}
          , no matter how modest, brings us closer to our goals.
        </>
      ),
    },
    {
      question:
        'I would like to receive Operation Code updates and news. How can I receive these' +
        ' communications?',
      answer: (
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
      question: "My question isn't listed. How do I contact Operation Code?",
      answer: (
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
      question: 'What is the fastest way to make a donation?',
      answer: (
        <>
          The fastest way to make a donation is through our secured online form{' '}
          <OutboundLink analyticsEventLabel="QnA Link" href={donateLink}>
            here
          </OutboundLink>{' '}
          .
        </>
      ),
    },
    {
      question: 'I would rather mail a check. To whom do I make it out and where do I send it?',
      answer: (
        <>
          It&apos;s less administrative work to accept online donations. Get in touch so we can
          assess your situation and contribution commitment.
        </>
      ),
    },
    {
      question: 'When will I receive a receipt for my contribution?',
      answer: (
        <>
          When you make a donation to Operation Code online, you will receive an receipt by email.
        </>
      ),
    },
    {
      question: 'What percentage of my donation goes directly to helping the military community?',
      answer: (
        <>
          Our goal is to direct 100 percent of online donations for programs and services, and keep
          administrative costs low while our annual fundraiser, grants and services fund operations.
        </>
      ),
    },
    {
      question: 'Can I donate items as gift in-kind?',
      answer: (
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
      question: `I'd like to donate my software conference pass
      to an Operation Code member. How do I do that?`,
      answer: (
        <>
          Get in touch, and we&apos;ll make an announcement in our Slack, tweet and/or write a blog
          post, and find a veteran to take your spot. Even then, travel and lodging is often a
          barrier.
        </>
      ),
    },
    {
      question: 'Can I make donations to a particular veteran or their family learning to code?',
      answer: (
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
      question: 'What is AmazonSmile and how can buying at Amazon help Operation Code?',
      answer: (
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
      question: 'How to Volunteer?',
      answer: (
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
      question: 'What volunteer opportunities are there at Operation Code?',
      answer: (
        <>Currently, fundraising, community leaders, and grant writers are our current needs.</>
      ),
    },
  ],
};

export default questions;
