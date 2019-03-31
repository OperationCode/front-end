import React from 'react';
import Container from 'components/Container/Container';
import Button from 'components/Button/Button';
import OutboundLink from 'components/OutboundLink/OutboundLink';

const JoinSection = () => (
  <Container theme="white">
    <h3>Join Our Thriving Community</h3>

    <p>
      Are you ready to begin your journey towards a career in software development?
      <br />
      Get the support you need by joining our members only Slack community!
    </p>

    <form>
      <input placeholder="Email address" />
      <Button type="submit">Join our Slack</Button>
    </form>

    <p>Slack is a community based collaboration tool where all the magic happens!</p>

    <OutboundLink href="https://slack.com/" analyticsEventLabel="Learn More About Slack">
      Learn more
    </OutboundLink>
  </Container>
);

export default JoinSection;
