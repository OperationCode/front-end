import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import styles from './styles/thank_you.module.css';

const pageTitle = 'Thank You';

function DonatePage() {
  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} className={styles.main}>
        <p>
          Thank you so much for your donation!
          <br />
          <br />
          We have received your contribution, and you should be receiving an email which will serve
          as your donation receipt.
        </p>
      </HeroBanner>
    </>
  );
}

export default DonatePage;
