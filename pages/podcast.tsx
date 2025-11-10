import axios from 'axios';
import get from 'lodash/get';
import dynamic from 'next/dynamic';
import { parse as parseXml } from 'fast-xml-parser';
import { ONE_DAY } from 'common/constants/unitsOfTime';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Card from 'components/Cards/Card/Card';
import Content from 'components/Content/Content';
import Heading from 'components/Heading/Heading';
import Image from 'next/image';

interface RSS {
  channel: {
    item: { image: { href: string }; link: string; title: string[]; description: string }[];
  };
}

interface Episode {
  image: string;
  name: string;
  source: string;
  story: string;
}

const pageTitle = 'Podcast';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

// We have atypical error handling because there exist errors thrown on nearly every request.
export async function getStaticProps() {
  const { data } = await axios.get<string>('https://operationcode.libsyn.com/rss');

  const {
    rss,
  }: {
    rss: RSS;
  } = parseXml(data, {
    ignoreNameSpace: true,
    ignoreAttributes: false,
    attributeNamePrefix: '',
  });

  const numberOfEpisodes = get(rss, 'channel.item.length', 0);

  if (numberOfEpisodes > 0) {
    const episodes = rss.channel.item.map(({ image: { href }, link, title, description }) => ({
      image: href,
      name: title[0],
      source: link,
      story: description.replace(/(<p>|<\/p>)/g, ''),
    }));

    return { props: { episodes }, revalidate: ONE_DAY };
  }

  // Request failed or RSS Feed is broken... Break the build!
  throw new Error('getStaticProps in /podcast failed.');
}

function Podcast({ episodes }: { episodes: Episode[] }) {
  return (
    <div>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} className="pt-30 -mb-8 min-h-[40dvh]">
        <p>Come listen to some inspiring stories of our vets transitioning into tech!</p>
      </HeroBanner>

      <Content
        columns={[
          <div className="flex justify-center items-start flex-wrap" key="podcast-page">
            {episodes.map(({ name, image, source, story }, index) => {
              /*
               * Some episodes have multiple parts and are named like "${Name}, part 1".
               * Some episodes are named "${Name} Interview"
               *
               * Parsing them in this manner ensures that the name of the interviewee is
               * available and used for the image alt tag.
               */
              const interviewee = name.replace(/ interview/gi, '').split(',')[0];

              return (
                <Card
                  data-testid="Podcast Card"
                  className="items-center flex flex-col justify-center overflow-hidden m-6 w-full sm:w-[500px]"
                  key={name}
                >
                  <Heading text={interviewee} headingLevel={3} />

                  <Image
                    src={image}
                    alt={interviewee}
                    className="max-h-[200px] max-w-full object-cover"
                    priority={index === 0 || index === 1}
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

                  <p className="overflow-y-scroll h-[250px] mt-2 mb-6">{story}</p>
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
