import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import FlatCard from 'components/Cards/FlatCard/FlatCard';
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
      {/* Rest of page content goes in here */}
    </>
  );
};
