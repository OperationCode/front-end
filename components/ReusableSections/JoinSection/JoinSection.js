import Container from 'components/Container/Container';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import LinkButton from 'components/Buttons/LinkButton/LinkButton';
import Heading from 'components/Heading/Heading';
import styles from './JoinSection.module.css';

function JoinSection() {
  return (
    <Container theme="white" data-testid="Join Section">
      <Heading text="Join Our Thriving Community" headingLevel={3} />

      <p>
        Are you ready to begin your journey towards a career in tech? Get the support you need by
        joining our members-only Slack community!
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
