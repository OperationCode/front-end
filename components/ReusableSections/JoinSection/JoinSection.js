import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { s3 } from 'common/constants/urls';
import Button from 'components/_common_/Button/Button';
import Section from 'components/_common_/Section/Section';
import styles from './JoinSection.css';

function JoinSection() {
  return (
    <Section
      className={styles.JoinSection}
      hasHeadingLines={false}
      style={{ backgroundImage: `url(${s3}background_marching-troops.jpg` }}
      theme="white"
      title="Join Today!"
    >
      <div className={styles.joinText}>
        <p>
          Operation Code is leading the way to expand opportunities for military veterans and their
          families to learn new skills, and build a career in the fast-growing technology sector.
        </p>

        <p>Join our community for free and jumpstart your skills today!</p>

        <Button theme="secondary">
          <Link href="/join">
            <a>Join</a>
          </Link>
        </Button>
      </div>
    </Section>
  );
}
=======
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
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e

export default JoinSection;
