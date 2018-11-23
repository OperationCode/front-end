import React from 'react';
import { donateLink, s3 } from 'common/constants/urls';
import Section from 'components/_common_/Section/Section';
import LinkButton from 'components/_common_/LinkButton/LinkButton';
import styles from './DonateSection.css';

function DonateSection() {
  return (
    <Section
      contentClassName={styles.content}
      hasHeadingLines={false}
      headingTheme="white"
      style={{ backgroundImage: `url(${s3}background_flag.jpg` }}
      title="Donate"
      theme="secondary"
    >
      <p>
        As a 501(c)(3) veteran-led nonprofit organization, our programs and services are maintained
        through the efforts of our volunteer staff. Your financial support allows us to continue
        helping the military community learn software development, enter the tech industry, and code
        the future.
      </p>
      <p>Thank you for supporting our mission!</p>

      <LinkButton href={donateLink} analyticsEventLabel="Donate" theme="secondary">
        Donate Now
      </LinkButton>
    </Section>
  );
}

export default DonateSection;
