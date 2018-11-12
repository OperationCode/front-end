import React from 'react';
import Section from 'components/_common_/Section/Section';
import Button from 'components/_common_/Button/Button';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import styles from './JoinSection.css';

const JoinSection = () => (
  <Section
    title="Join Our Thriving Community"
    contentClassName={styles.JoinSection}
    hasHeadingLines={false}
    theme="white"
  >
    <p>
      Are you ready to begin your journey towards a career in software development?
      <br />
      Get the support you need by joining our members only Slack community!
    </p>

    <div className={styles.form}>
      <input placeholder="Email address" />
      <Button>Join our Slack</Button>
    </div>

    <p>Slack is a community based collaboration tool where all the magic happens!</p>

    <OutboundLink href="https://slack.com/" analyticsEventLabel="Learn More About Slack">
      Learn more
    </OutboundLink>
  </Section>
);

export default JoinSection;
