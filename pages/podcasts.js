// TODO: Add google/apple podcast buttons to page
import Head from 'components/head';
import ImageCard from 'components/Cards/ImageCard/ImageCard';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import FAQItem from 'components/FAQ/FAQItem/FAQItem';
import PodcastData from 'components/podcasts/podcastsdata';
import ReactAudioPlayer from 'react-audio-player';
import { s3 } from 'common/constants/urls';
import styles from './styles/podcast.css';

export default () => {
  const pageTitle = 'Operation Code Podcast';

  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle}>
        {/* Don't forget to define the imageSource prop in the HeroBanner Component */}
        Interviews with military veterans, spouses, and others from the Operation Code community on
        their transition to careers to technology.
      </HeroBanner>

      {/* <Content
        title="Episodes"
        theme="white"
        columns={QuestionAnswerData.general.map(faq => (
          <FAQItem question={faq.question} answer={faq.answer} key={faq.question} />
        ))}
      /> */}

      {/* <Content
        title="Episodes"
        theme="white"
        columns={[
          <>
            <Card>
              <ReactAudioPlayer
                title="Title"
                art="http://static.libsyn.com/p/assets/2/0/a/3/20a3052760331f2c/Logo-resized.png" // podcast image
                src="http://traffic.libsyn.com/operationcode/Mike.mp3" // podcast Link
                // autoPlay
                controls
              />

              <p className={styles.justifyAlign}>
                We at Operation Code strive to provide an efficient way into a tech career for
                veterans and their families.
              </p>
            </Card>
          </>,
        ]}
      /> */}
      <Content
        title="Episodes"
        theme="white"
        columns={PodcastData.general.map(faq => (
          <ImageCard
            alt="Default podcast Image"
            className={styles.content}
            imageSource={`${s3}image_unavailable_placeholder.png`}
          >
            <ReactAudioPlayer
              // title="Title"
              // art="http://static.libsyn.com/p/assets/2/0/a/3/20a3052760331f2c/Logo-resized.png" // podcast image
              src={faq.source} // podcast Link
              // autoPlay
              controls
            />
            <FAQItem question={faq.name} answer={faq.story} key={faq.name} />
          </ImageCard>
        ))}
        // columns={[
        //   <>
        //     <Card>
        //       <ReactAudioPlayer
        //         title="Title"
        //         art="http://static.libsyn.com/p/assets/2/0/a/3/20a3052760331f2c/Logo-resized.png" // podcast image
        //         src="http://traffic.libsyn.com/operationcode/Mike.mp3" // podcast Link
        //         // autoPlay
        //         controls
        //       />

        //       <p className={styles.justifyAlign}>
        //         We at Operation Code strive to provide an efficient way into a tech career for
        //         veterans and their families.
        //       </p>
        //     </Card>
        //   </>,
        // ]}
      />

      {/* Rest of page content goes in here */}
    </>
  );
};
