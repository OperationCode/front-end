import React from 'react';
import Link from 'next/link';
import Section from 'common/components/Section/Section';
import Button from 'common/components/Button/Button';

const SignUpSection = () => (
  <Section title="New user?" theme="white">
    <p>
      Are you ready to deploy your future? Join Operation Code today and launch your career in
      software development. Once you complete the form below, you&#8217;ll be invited to join our
      team on Slack. Make sure you stop in and say hi!
    </p>

    <Button theme="secondary">
      <Link href="/signup">
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        <a>Sign Up</a>
        {/* eslint-enable jsx-a11y/anchor-is-valid */}
      </Link>
    </Button>
  </Section>
);
export default SignUpSection;
