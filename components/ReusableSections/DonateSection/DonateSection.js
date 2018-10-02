import React from 'react';
import { donateLink, s3 } from 'common/constants/urls';
import Section from 'components/_common_/Section/Section';
import Button from 'components/_common_/Button/Button';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import styles from './DonateSection.css';

function DonateSection() {
  return (
    <Section
      className={styles.DonateSection}
      hasHeadingLines={false}
      headingTheme="white"
      style={{ backgroundImage: `url(${s3}background_flag.jpg` }}
      title="Donate"
      theme="slate"
    >
      <div className={styles.donateText}>
        <p>
          As a 501(c)(3) veteran-led nonprofit organization, our programs and services are
          maintained through the efforts of our volunteer staff. Your financial support allows us to
          continue helping the military community learn software development, enter the tech
          industry, and code the future.
        </p>
        <p>Thank you for supporting our mission!</p>
        <Button>
          <OutboundLink analyticsEventLabel="Donate Now" href={donateLink}>
            Donate Now
          </OutboundLink>
        </Button>
      </div>
    </Section>
  );
}

export default DonateSection;
