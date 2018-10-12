import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Section from 'components/_common_/Section/Section';
import Button from 'components/_common_/Button/Button';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import styles from './JoinThrivingSection.css';

const JoinThrivingSection = ({ className }) => (
  <Section
    className={classNames(className, styles.JoinThrivingSection)}
    hasHeadingLines={false}
    theme="white"
    title="Join Our Thriving Community"
  >
    <p className={styles.centerText}>
      Are you ready to begin your journey towards a career in software development?
      <br />
      Get the support you need by joining our members only Slack community!
    </p>
    <div className={classNames(styles.alignCenter, styles.marginBottom)}>
      <div>
        <input placeholder="Email address" />
        <Button>Join our Slack</Button>
      </div>
      Slack is a community based collaboration tool where all the magic happens!
      <br />
      <OutboundLink href="https://slack.com/">Learn more</OutboundLink>
    </div>
  </Section>
);

JoinThrivingSection.prototype.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string,
};

JoinThrivingSection.prototype.defaultProps = {
  className: '',
};

export default JoinThrivingSection;
