import classNames from 'classnames';
import Head from 'components/head';
import Button from 'components/_common_/Button/Button';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import PartnerLogoLink from 'components/PartnerLogoLink/PartnerLogoLink';
import Section from 'components/_common_/Section/Section';
import SuccessStory from 'components/SuccessStory/SuccessStory';

import successStories from 'common/constants/successStories';
import partners from 'common/constants/partners';

import styles from './styles/index.css';

export default () => (
  <div>
    <Head title="Home" />

    {/* Success Stories Section */}
    <Section
      className={classNames(styles.section, styles.successStories)}
      hasHeadingLines={false}
      theme="slate"
      title="Success Stories"
    >
      <div className={styles.successStoryContainer}>
        {successStories.map(story => (
          <SuccessStory {...story} />
        ))}
      </div>
    </Section>

    {/* Partners Section */}
    <Section
      className={classNames(styles.section, styles.partners)}
      hasHeadingLines={false}
      theme="mist"
      title="Partners"
    >
      <div className={classNames(styles.partnerLogos)}>
        {partners.map(partner => (
          <PartnerLogoLink key={partner.name} {...partner} />
        ))}
      </div>
    </Section>

    {/* Join Thriving Section */}
    <Section
      className={classNames(styles.section, styles.joinThrivingSection)}
      hasHeadingLines={false}
      theme="white"
      title="Join Our Thriving Community"
    >
      <p className={classNames(styles.alignCenter, styles.marginBottom)}>
        Are you ready to begin your journey towards a career in software development?
        <br />
        Get the support you need by joining our members only Slack community!
      </p>
      <div className={classNames(styles.alignCenter, styles.marginBottom)}>
        <div>
          <input placeholder="Email address" />
          <Button>Join our Slack</Button>
        </div>
        Slack is a community based collaboration tool where all the magic happens!
        <br />
        <OutboundLink href="https://slack.com/">Learn more</OutboundLink>
      </div>
    </Section>
  </div>
);
