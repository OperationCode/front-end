import React from 'react';
import { donateLink, s3 } from 'common/constants/urls';
import Section from 'components/_common_/Section/Section';
<<<<<<< HEAD
import Button from 'components/_common_/Button/Button';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
=======
import LinkButton from 'components/_common_/LinkButton/LinkButton';
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
import styles from './DonateSection.css';

function DonateSection() {
  return (
    <Section
<<<<<<< HEAD
      className={styles.DonateSection}
=======
      contentClassName={styles.content}
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      hasHeadingLines={false}
      headingTheme="white"
      style={{ backgroundImage: `url(${s3}background_flag.jpg` }}
      title="Donate"
<<<<<<< HEAD
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
=======
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
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    </Section>
  );
}

export default DonateSection;
