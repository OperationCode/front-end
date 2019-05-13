import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
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
            Operation Code is pleased to invite America’s leading technology companies to become
            shared value sponsors. Please join us and help make our mission a success. Together, we
            will create a new and secure future for today’s veterans and military spouses.
          </p>,
        ]}
      />
      {/* Rest of page content goes in here */}
    </>
  );
};
