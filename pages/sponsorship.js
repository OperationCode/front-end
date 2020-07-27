import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import Badge from 'components/Badge/Badge';
import Card from 'components/Cards/Card/Card';
import FlatCard from 'components/Cards/FlatCard/FlatCard';
import LinkButton from 'components/LinkButton/LinkButton';
import SponsorsSection from 'components/ReusableSections/SponsorsSection/SponsorsSection';
import MedalSolid from 'static/images/icons/FontAwesome/medal-solid.svg';
import styles from './styles/sponsorship.module.css';

const pageTitle = 'Corporate Sponsorship';

function Sponsorship() {
  return (
    <div className={styles.Sponsorship}>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle}>
        <LinkButton href="/donate" theme="primary" className={styles.topMargin}>
          Donate Now
        </LinkButton>
      </HeroBanner>

      <Content
        title="Become A Corporate Sponsor Today"
        theme="white"
        hasTitleUnderline
        className={styles.justifyAlign}
        columns={[
          <p>
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
        title="Engagement Opportunities"
        theme="white"
        hasTitleUnderline
        className={styles.justifyAlign}
        columns={[
          <Card className={styles.constrainDimensions}>
            <h6>Employee Engagement</h6>
            <p>
              Provide opportunities for software engineers to mentor new learners and contribute to
              open source projects. Engage with veterans and military spouse employees in your
              organization - share their story; loud and proud.
            </p>
          </Card>,
          <Card className={styles.constrainDimensions}>
            <h6>Talent Management</h6>
            <p>
              Build a talent pipeline between your company and transitioning service members with
              technical skills and security clearances. Our community is skilled, motivated, and
              diverse - they will bolster any workforce.
            </p>
          </Card>,
          <Card className={styles.constrainDimensions}>
            <h6>Marketing</h6>
            <p>
              Marketing opportunities for national online and local community engagement Community
              activation opportunities and online recognition via social media and long-form
              content.
            </p>
          </Card>,
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

      <SponsorsSection />
    </div>
  );
}

export default Sponsorship;
