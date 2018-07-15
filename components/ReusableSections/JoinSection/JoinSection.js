import React from 'react';
import Button from 'common/components/Button/Button';
import Section from 'common/components/Section/Section';
import styles from './JoinSection.css';

function Join() {
  return (
    <Section
      className={styles.JoinSection}
      hasHeadingLines={false}
      theme="white"
      title="Join Today!"
    >
      <div className={styles.joinText}>
        <p>
          Operation Code is leading the way to expand opportunities for military veterans and their
          families to learn new skills, and build a career in the fast-growing technology sector.
        </p>
        <p>Join our community for free and jumpstart your skills today!</p>
        <Button
          link="/join"
          theme="secondary"
        >
          Join
        </Button>
      </div>
    </Section>
  );
}

export default Join;
