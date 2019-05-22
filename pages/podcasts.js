import Head from 'components/head';
import Card from 'components/Cards/Card/Card';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import Link from 'next/link';
import FAQItem from 'components/FAQ/FAQItem/FAQItem';
// TODO: to be replaced by data for podcasts
import QuestionAnswerData from 'components/FAQ/questions';
import ReactAudioPlayer from 'react-audio-player';
import styles from './styles/about.css';

export default () => {
  const pageTitle = 'Operation Code Podcast';

  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle}>
        {/* Don't forget to define the imageSource prop in the HeroBanner Component */}
        {/* Call-to-action goes here */}
      </HeroBanner>

      <Content
        title="Episodes"
        theme="white"
        columns={QuestionAnswerData.general.map(faq => (
          <FAQItem question={faq.question} answer={faq.answer} key={faq.question} />
        ))}
      />

      <Content
        title="Episodes"
        theme="white"
        columns={[
          <>
            <Card>
              <ReactAudioPlayer
                title=""
                art="" // podcast image
                source="" // podcast Link
                autoPlay
                controls
              />
              {/* inserting iframe from libsyn will position the podcast within the card */}
            </Card>

            <p className={styles.justifyAlign}>
              We at Operation Code strive to provide an efficient way into a tech career for
              veterans and their families. We work directly with Senators, Congressmen, and
              Congresswomen to allow veterans total control of their future by permitting the use of
              the GI Bill on coding bootcamps. We also have a page where you can read about our{' '}
              <Link href="/history" prefetch>
                <a>organization&apos;s history</a>
              </Link>
              .
            </p>
          </>,
        ]}
      />

      {/* Rest of page content goes in here */}
    </>
  );
};
