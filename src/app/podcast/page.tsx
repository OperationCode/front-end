import axios from 'axios';
import get from 'lodash/get';
import { parse as parseXml } from 'fast-xml-parser';
import type { Metadata } from 'next';
import Image from 'next/image';
import Card from '@/components/Cards/Card/Card';
import Section from '@/components/Section/Section';
import Heading from '@/components/Heading/Heading';
import PodcastPlayer from './PodcastPlayer';

export const metadata: Metadata = { title: 'Podcast' };

export const revalidate = 86400;

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

async function getEpisodes(): Promise<Episode[]> {
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
    return rss.channel.item.map(({ image: { href }, link, title, description }) => ({
      image: href,
      name: title[0],
      source: link,
      story: description.replace(/(<p>|<\/p>)/g, ''),
    }));
  }

  throw new Error('Failed to fetch podcast episodes.');
}

export default async function Podcast() {
  const episodes = await getEpisodes();

  return (
    <Section>
      <div className="flex flex-wrap items-start justify-center">
        {episodes.map(({ name, image, source, story }, index) => {
          const interviewee = name.replace(/ interview/gi, '').split(',')[0];

          return (
            <Card
              data-testid="Podcast Card"
              className="m-6 flex w-full flex-col items-center justify-center overflow-hidden sm:w-[500px]"
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

              <PodcastPlayer url={source} />

              <p className="mt-2 mb-6 h-[250px] overflow-y-scroll">{story}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
