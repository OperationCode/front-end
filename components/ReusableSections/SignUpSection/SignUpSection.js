import React from 'react';
import Section from 'components/_common_/Section/Section';
import LinkButton from 'components/_common_/LinkButton/LinkButton';
import styles from './SignUpSection.css';

function SignUpSection() {
  return (
    <Section contentClassName={styles.content} title="New user?" theme="white">
      <p>
        Are you ready to deploy your future? Join Operation Code today and launch your career in
        software development. Once you complete the form below, you&#8217;ll be invited to join our
        team on Slack. Make sure you stop in and say hi!
      </p>

      <LinkButton href="/signup" theme="secondary">
        Sign Up
      </LinkButton>
    </Section>
  );
}

export default SignUpSection;
