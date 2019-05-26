import React from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import Container from 'components/Container/Container';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import LinkButton from 'components/LinkButton/LinkButton';
import styles from './JoinSection.css';

JoinSection.propTypes = {
  isLoggedIn: bool.isRequired,
};

export function JoinSection({ isLoggedIn }) {
  return (
    !isLoggedIn && (
      <Container theme="white">
        <h3>Join Our Thriving Community</h3>

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
    )
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(JoinSection);
