import classNames from 'classnames';
import Head from 'components/head';
import Button from 'components/_common_/Button/Button';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import partners from 'common/constants/partners';
import PartnerLogoLink from 'components/PartnerLogoLink/PartnerLogoLink';
import Section from 'components/_common_/Section/Section';
import styles from './styles/index.css';

export default () => (
  <div>
    <Head title="Home" />

    {/* Partners Section */}
    <Section
      className={classNames(styles.section, styles.partners)}
      hasHeadingLines={false}
      theme="gray"
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
