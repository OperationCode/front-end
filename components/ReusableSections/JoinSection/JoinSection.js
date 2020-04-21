import React from 'react';
import { hasValidAuthToken } from 'common/utils/cookie-utils';
import Container from 'components/Container/Container';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import LinkButton from 'components/LinkButton/LinkButton';
import Heading from 'components/Heading/Heading';
import styles from './JoinSection.module.css';

export function JoinSection() {
  const isLoggedIn = hasValidAuthToken();

  if (isLoggedIn) {
    // no need to tell somebody to join if they already have an account!
    return null;
  }

  return (
    <Container theme="white" data-testid="Join Section">
      <Heading text="Join Our Thriving Community" headingLevel={3} />

      <p className={styles.justifyAlign}>
        Are you ready to begin your journey towards a career in software development? Get the
        support you need by joining our members-only Slack community!
      </p>

      <LinkButton href="/join" theme="secondary" className={styles.verticalSpacing}>
        Register Now
      </LinkButton>

      <p>Slack is a community based collaboration tool where all the magic happens!</p>

      <OutboundLink
        href="https://get.slack.help/hc/en-us/categories/360000049043-Getting-Started"
        analyticsEventLabel="Learn More Slack"
      >
        Never heard of Slack before?
      </OutboundLink>
    </Container>
  );
}

export default JoinSection;
