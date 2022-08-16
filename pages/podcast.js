import axios from 'axios';
import { arrayOf, shape, string } from 'prop-types';
import get from 'lodash/get';
import dynamic from 'next/dynamic';
import { parse as parseXml } from 'fast-xml-parser';
import { ONE_DAY } from 'common/constants/unitsOfTime';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Card from 'components/Cards/Card/Card';
import Content from 'components/Content/Content';
import Heading from 'components/Heading/Heading';
import styles from 'styles/podcast.module.css';
import Image from 'next/image';

const pageTitle = 'Podcast';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

Podcast.propTypes = {
  episodes: arrayOf(shape({ image: string, name: string, source: string, story: string }))
    .isRequired,
};

// We have atypical error handling because there exist errors thrown on nearly every request.
export async function getStaticProps() {
  const { data } = await axios.get('https://operationcode.libsyn.com/rss');

  const { rss } = parseXml(data, {
    ignoreNameSpace: true,
    ignoreAttributes: false,
    attributeNamePrefix: '',
  });

  const numberOfEpisodes = get(rss, 'channel.item.length', 0);

  if (numberOfEpisodes > 0) {
    const episodes = rss.channel.item.map(({ image: { href }, link, title, description }) => ({
      image: href,
      name: title,
      source: link,
      story: description.replace(/(<p>|<\/p>)/g, ''),
    }));

    return { props: { episodes }, revalidate: ONE_DAY };
  }

  // Request failed or RSS Feed is broken
  throw new Error('getStaticProps in /podcast failed.');
}

function Podcast({ episodes }) {
  return (
    <div className={styles.Podcast}>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} />

      <Content
        columns={[
          <p>Come listen to some inspiring stories of our vets transitioning into tech!</p>,
          <div className={styles.podcastCards}>
            {episodes.map(({ name, image, source, story }) => {
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
                  <Heading text={interviewee} headingLevel={3} />

                  <Image
                    src={image}
                    alt={interviewee}
                    className={styles.img}
                    width={200}
                    height={200}
                  />

                  <ReactPlayer
                    url={source}
                    controls
                    width="80%"
                    height="65px"
                    config={{
                      file: {
                        attributes: {
                          preload: 'none',
                        },
                      },
                    }}
                  />

                  <p>{story}</p>
                </Card>
              );
            })}
          </div>,
        ]}
      />
    </div>
  );
}

export default Podcast;
