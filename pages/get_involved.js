import React from 'react';
import classNames from 'classnames';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import Section from 'components/_common_/Section/Section';
import Button from 'components/_common_/Button/Button';
import Badge from 'components/Badge/Badge';
import PlaceholderIcon1 from 'static/images/icons/FontAwesome/users-solid.svg';
import PlaceholderIcon2 from 'static/images/icons/FontAwesome/handshake-regular.svg';
import { s3 } from 'common/constants/urls';
import styles from './styles/get_involved.css';

// TODO: Replace PlaceholderIcons with appropriate icon assets

const mentorItems = [
  {
    icon: <PlaceholderIcon1 />,
    label: 'Feel More Confident',
  },
  {
    icon: <PlaceholderIcon1 />,
    label: 'Have Defined Career Goals',
  },
  {
    icon: <PlaceholderIcon1 />,
    label: 'Reach Their True Potential',
  },
];

const supportItems = [
  {
    icon: <PlaceholderIcon2 />,
    label: 'Operations',
  },
  {
    icon: <PlaceholderIcon2 />,
    label: 'Fundraising',
  },
  {
    icon: <PlaceholderIcon2 />,
    label: 'Partnerships',
  },
];

export default () => (
  <div>
    <Section theme="slate" title="You Can Make An Impact">
      <div>
        Whether you&apos;re interested in mentoring, supporting our operations, or simply donating
        to help military veterans, service members, and spouses launch a career in software
        development, Operation Code is always looking for supporters like you.
      </div>
    </Section>

    <Section theme="mist" contentClassName={styles.alignCenter}>
      <h4>The Power of Mentorship</h4>
      <div className={styles.marginBottom}>
        By mentoring one of our members, you will help them:
      </div>
      <div className={classNames(styles.flexDisplay, styles.marginBottom)}>
        {mentorItems.map(item => (
          <Badge key={item.label} icon={item.icon} label={item.label} />
        ))}
      </div>
    </Section>

    <Section theme="slate">
      <div className={classNames(styles.cta, styles.ctaImageLeft)}>
        <div className={styles.ctaImage}>
          <img src={`${s3}stock_paired-programming.jpg`} alt="Empower Our Community" />
        </div>
        <div className={styles.ctaText}>
          <h4>Empower Our Community</h4>
          <p>
            Make a difference in the lives of military veterans, service members, and spouses who
            are eager to transition into a software development career.
          </p>
          <Button>Become a Mentor</Button>
        </div>
      </div>
    </Section>

    <Section theme="mist" contentClassName={styles.alignCenter}>
      <h4>Ways You Can Support Operation Code</h4>
      <div className={classNames(styles.marginBottom, styles.centerText)}>
        We&apos;re always looking for volunteers who are dedicated to making an impact in the lives
        of military veterans, service members, and spouses. You can help us with:
      </div>
      <div className={classNames(styles.flexDisplay, styles.marginBottom)}>
        {supportItems.map(item => (
          <Badge key={item.label} icon={item.icon} label={item.label} />
        ))}
      </div>
    </Section>

    <Section theme="slate">
      <div className={classNames(styles.cta, styles.ctaImageRight)}>
        <div className={styles.ctaImage}>
          <img src={`${s3}stock_paired-programming.jpg`} alt="Support Our Mission" />
        </div>
        <div className={styles.ctaText}>
          <h4>Support Our Mission</h4>
          <p>
            Make a difference in the lives of military veterans, service members, and spouses who
            are eager to transition into a software development career.
          </p>
          <Button>Support OC</Button>
        </div>
      </div>
    </Section>

    <Section theme="mist" contentClassName={styles.alignCenter}>
      <h4>Donate to Deploy the Future</h4>
      <p className={styles.centerText}>
        Help us reach our fundraising goal! With your donation, we&apos;ll be able to provide our
        members with coding school scholarships, tickets to tech conferences, and access to
        necessary equipment.
      </p>
      <p>[DONATION PROGRESS BAR]</p>
      <Button>Make a Donation</Button>
    </Section>

    <Section theme="white" contentClassName={styles.alignCenter}>
      <h4>Join Our Thriving Community</h4>
      <p className={styles.centerText}>
        Are you ready to begin your journey towards a career in software development?
        <br />
        Get the support you need by joining our members only Slack community!
      </p>
      <div className={classNames(styles.alignCenter, styles.marginBottom)}>
        <div>
          <input placeholder="Email address" />
          <button type="submit">Join our Slack</button>
        </div>
        Slack is a community based collaboration tool where all the magic happens!
        <br />
        <OutboundLink href="https://slack.com/">Learn more</OutboundLink>
      </div>
    </Section>
  </div>
);
