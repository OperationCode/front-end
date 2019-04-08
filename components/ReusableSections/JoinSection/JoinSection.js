import React from 'react';
import Container from 'components/Container/Container';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import LinkButton from 'components/LinkButton/LinkButton';
import styles from './JoinSection.css';

const JoinSection = () => (
  <Container theme="white">
    <h3>Join Our Thriving Community</h3>

    <p className={styles.justifyAlign}>
      Are you ready to begin your journey towards a career in software development? Get the support
      you need by joining our members-only Slack community!
    </p>

    <LinkButton href="/join" theme="secondary" className={styles.verticalSpacing}>
      Register Now
    </LinkButton>

    <p>Slack is a community based collaboration tool where all the magic happens!</p>

    <OutboundLink href="https://slack.com/" analyticsEventLabel="Learn More About Slack">
      Learn more
    </OutboundLink>
  </Container>
);

export default JoinSection;
