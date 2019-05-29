// TODO: Add google/apple podcast buttons to page
import Head from 'components/head';
import ImageCard from 'components/Cards/ImageCard/ImageCard';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import FAQItem from 'components/FAQ/FAQItem/FAQItem';
import PodcastData from 'components/Podcasts/Podcastsdata';
import ReactAudioPlayer from 'react-audio-player';
// import { s3 } from 'common/constants/urls';
import styles from './styles/podcasts.css';

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

      <Content
        title="Episodes"
        theme="white"
        columns={PodcastData.general.map(episode => (
          <ImageCard
            alt="Default podcast Image"
            className={styles.content}
            imageSource={episode.image}
          >
            <ReactAudioPlayer
              // title="Title"
              src={episode.source}
              // autoPlay
              controls
            />
            <FAQItem question={episode.name} answer={episode.story} key={episode.name} />
          </ImageCard>
        ))}
      />
    </>
  );
};
