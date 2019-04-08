import React from 'react';
import Container from 'components/Container/Container';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import LinkButton from 'components/LinkButton/LinkButton';

const JoinSection = () => (
  <Container theme="white">
    <h3>Join Our Thriving Community</h3>

    <p>
      Are you ready to begin your journey towards a career in software development?
      <br />
      Get the support you need by joining our members-only Slack community!
    </p>

    <LinkButton href="/join" theme="secondary">
      Register Now
    </LinkButton>

    <p>Slack is a community based collaboration tool where all the magic happens!</p>

    <OutboundLink href="https://slack.com/" analyticsEventLabel="Learn More About Slack">
      Learn more
    </OutboundLink>
  </Container>
);

export default JoinSection;
