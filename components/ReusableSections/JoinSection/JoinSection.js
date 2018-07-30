import React from 'react';
import { s3 } from 'common/constants/urls';
import Button from 'common/components/Button/Button';
import Section from 'common/components/Section/Section';
import styles from './JoinSection.css';

function Join() {
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
          <br />
          Join our community for free and jumpstart your skills today!
        </p>

        <Button href="/join" theme="secondary">
          Join
        </Button>
      </div>
    </Section>
  );
}

export default Join;
