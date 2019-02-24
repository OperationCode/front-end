import React from 'react';
import Container from 'components/_common_/Container/Container';
import LinkButton from 'components/_common_/LinkButton/LinkButton';

function SignUpSection() {
  return (
    <Container theme="white">
      <h3>New user?</h3>

      <p>
        Are you ready to deploy your future? Join Operation Code today and launch your career in
        software development. Once you complete the form below, you&#8217;ll be invited to join our
        team on Slack. Make sure you stop in and say hi!
      </p>

      <LinkButton href="/signup" theme="secondary">
        Sign Up
      </LinkButton>
    </Container>
  );
}

export default SignUpSection;
