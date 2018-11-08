import Head from 'components/head';
import Section from 'components/_common_/Section/Section';
import SuccessStory from 'components/SuccessStory/SuccessStory';
import PartnerLogoLink from 'components/PartnerLogoLink/PartnerLogoLink';
import JoinSection from 'components/ReusableSections/JoinSection/JoinSection';
import successStories from 'common/constants/successStories';
import partners from 'common/constants/partners';

import styles from './styles/index.css';

export default () => (
  <div>
    <Head title="Home" />

    <Section
      title="Success Stories"
      contentClassName={styles.successStories}
      hasHeadingLines={false}
      theme="slate"
    >
      {successStories.map(story => (
        <SuccessStory {...story} key={story.title} />
      ))}
    </Section>

    <Section
      title="Partners"
      contentClassName={styles.partnerLogos}
      hasHeadingLines={false}
      theme="mist"
    >
      {partners.map(partner => (
        <PartnerLogoLink key={partner.name} {...partner} />
      ))}
    </Section>

    <JoinSection />
  </div>
);
