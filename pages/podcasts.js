import { arrayOf, shape, string } from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import RssParser from 'rss-parser';
import Head from 'components/head';
import Alert from 'components/Alert/Alert';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import ImageCard from 'components/Cards/ImageCard/ImageCard';
import Content from 'components/Content/Content';
import FAQItem from 'components/FAQ/FAQItem/FAQItem';
import styles from './styles/podcasts.css';

class Podcasts extends React.Component {
  static async getInitialProps() {
    const parser = new RssParser();

    try {
      const feed = await parser.parseURL('http://operationcode.libsyn.com/rss');

      const episodes = feed.items.map(({ itunes: { image }, link, title, contentSnippet }) => ({
        image,
        name: title,
        source: link,
        story: contentSnippet,
      }));

      return { episodes };
    } catch (error) {
      return { error };
    }
  }

  static propTypes = {
    episodes: arrayOf(shape({ image: string, name: string, source: string, story: string })),
    error: shape({ name: string }),
  };

  static defaultProps = {
    episodes: [],
    error: undefined,
  };

  render() {
    const { episodes, error } = this.props;
    const pageTitle = 'Podcasts';

    return (
      <>
        <Head title={pageTitle} />

        {/* TODO: Set meta info to: Interviews with military veterans, spouses, and others from
        the Operation Code community on their transition to careers to technology. */}

        <HeroBanner title={pageTitle} />

        <Content
          columns={
            error ? (
              <Alert isOpen>Something went wrong on our end...</Alert>
            ) : (
              episodes.map(episode => (
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
              ))
            )
          }
        />
      </>
    );
  }
}

export default Podcasts;
