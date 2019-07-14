import { arrayOf, shape, string } from 'prop-types';
import ReactPlayer from 'react-player';
import RssParser from 'rss-parser';
import { getServerErrorMessage } from 'common/utils/api-utils';
import Head from 'components/head';
import Alert from 'components/Alert/Alert';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Card from 'components/Cards/Card/Card';
import Content from 'components/Content/Content';
import styles from './styles/podcast.css';

class Podcast extends React.Component {
  static async getInitialProps() {
    const parser = new RssParser();

    try {
      const feed = await parser.parseURL('https://operationcode.libsyn.com/rss');
      const error = 'No episodes found';
      const episodes = feed.items.map(({ itunes: { image }, link, title, contentSnippet }) => ({
        image,
        name: title,
        source: link,
        story: contentSnippet,
      }));

      if (episodes.length === 0) {
        return error;
      }
      return { episodes };
    } catch (error) {
      return { errorMessage: getServerErrorMessage(error) };
    }
  }

  static propTypes = {
    episodes: arrayOf(shape({ image: string, name: string, source: string, story: string })),
    errorMessage: string,
  };

  static defaultProps = {
    episodes: [],
    errorMessage: '',
  };

  render() {
    const { episodes, errorMessage } = this.props;
    const pageTitle = 'Podcast';

    return (
      <>
        <Head title={pageTitle} />

        <HeroBanner title={pageTitle} />

        <Content
          columns={[
            <p>Come listen to some inspiring stories of our vets transitioning into tech!</p>,
            <div className={styles.podcastCards}>
              {errorMessage ? (
                <Alert isOpen>{errorMessage}</Alert>
              ) : (
                episodes.map(({ name, image, source, story }) => {
                  /*
                   * Some episodes have multiple parts and are named like "${Name}, part 1".
                   * Some episodes are named "${Name} Interview"
                   *
                   * Parsing them in this manner ensures that the name of the interviewee is
                   * available and used for the image alt tag.
                   */
                  const interviewee = name.replace(/ interview/gi, '').split(',')[0];

                  return (
                    <Card data-testid="Podcast Card" className={styles.podcastCard} key={name}>
                      <h3>{interviewee}</h3>

                      <img src={image} alt={interviewee} className={styles.img} />

                      <ReactPlayer url={source} controls width="80%" height="65px" />

                      <p>{story}</p>
                    </Card>
                  );
                })
              )}
            </div>,
          ]}
        />
      </>
    );
  }
}

export default Podcast;
