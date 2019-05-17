import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import FlatCard from 'components/Cards/FlatCard/FlatCard';
import Badge from 'components/Badge/Badge';
import MedalSolid from 'static/images/icons/FontAwesome/medal-solid.svg';

import styles from './styles/sponsorship.css';

export default () => {
  const pageTitle = 'Corporate Sponsorship';

  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle}>
        {/* Don't forget to define the imageSource prop in the HeroBanner Component */}
        {/* Call-to-action goes here */}
      </HeroBanner>

      <Content
        title="Become A Corporate Sponsor Today"
        theme="white"
        className={styles.justifyAlign}
        columns={[
          <p className="changeToSomething">
            Operation Code is pleased to invite America&apos;s leading technology companies to
            become shared value sponsors. Please join us and help make our mission a success.
            Together, we will create a new and secure future for today&apos;s veterans and military
            spouses.
          </p>,
        ]}
      />
      <Content
        title="What We Offer"
        theme="secondary"
        className={styles.justifyAlign}
        columns={[
          <FlatCard>
            The largest national volunteer service organization devoted to software engineering.
          </FlatCard>,
          <FlatCard>
            Direct and indirect access to military veterans and spouses for surveying or hiring
            purposes.
          </FlatCard>,
          <FlatCard>
            Potential partnerships with national and local meetups. Help us create a community at a
            city near you.
          </FlatCard>,
          <FlatCard>
            An authentic and vibrant community. Your sponsorship will have a very noticeable and
            organic impact.
          </FlatCard>,
        ]}
      />

      <Content
        title="Corporate Partner Opportunities"
        theme="secondary"
        className={styles.justifyAlign}
        columns={[
          <div className={styles.justifyAlign}>
            <Badge
              className={styles.badgeFormat}
              icon={<MedalSolid className={styles.gold} />}
              label="Gold Sponsor"
            />
            <p className={styles.paragraphFormat}>
              National benefits include branding recognition in national Slack community, open
              source program sponsorship, national employee engagement activities, plus all above.
            </p>
            <Badge
              className={styles.badgeFormat}
              icon={<MedalSolid className={styles.silver} />}
              label="Silver Sponsor"
            />
            <p className={styles.paragraphFormat}>
              Three local chapter sponsorships of choice, complete with marketing, employee
              engagement and talent pipeline opportunities, plus all above.
            </p>
            <Badge
              className={styles.badgeFormat}
              icon={<MedalSolid className={styles.bronze} />}
              label="Bronze Sponsor"
            />
            <p className={styles.paragraphFormat}>
              Sponsor one chapter and support your local Operation Code community for the year,
              including events, training, and networking opportunities.
            </p>
          </div>,
        ]}
      />
      {/* Rest of page content goes in here */}
    </>
  );
};
