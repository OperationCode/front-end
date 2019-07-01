import { arrayOf, shape, string } from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import RssParser from 'rss-parser';
import Head from 'components/head';
import Alert from 'components/Alert/Alert';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Card from 'components/Cards/Card/Card';
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

  // Podcasts.defaultProps = {
  //   children: undefined,
  //   title: undefined,
  //   description:
  // eslint-disable-next-line max-len
  //     'Interviews with military veterans, spouses, and others from the Operation Code community on their transition to careers to technology',
  //   url: 'https://operationcode.org',
  //   ogImage: `${s3}branding/logos/small-blue-logo.png`,
  // };

  render() {
    const { episodes, error } = this.props;
    const pageTitle = 'Podcasts';

    return (
      <>
        <Head title={pageTitle} />

        <HeroBanner title={pageTitle}>
          <p>Come listen to some inspiring stories of our vets transitioning into tech!</p>
        </HeroBanner>

        <Content
          columns={
            error ? (
              <Alert isOpen>Something went wrong on our end...</Alert>
            ) : (
              episodes.map(episode => (
                <Card
                  id="podcast-card"
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
                </Card>
              ))
            )
          }
        />
      </>
    );
  }
}

export default Podcasts;
