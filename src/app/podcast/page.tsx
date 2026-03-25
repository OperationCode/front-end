import type { Metadata } from 'next';
import Image from 'next/image';
import Card from '@/components/Cards/Card/Card';
import Section from '@/components/Section/Section';
import Heading from '@/components/Heading/Heading';
import PodcastPlayer from './PodcastPlayer';
import episodes from './episodes.json';

export const metadata: Metadata = { title: 'Podcast' };

interface Episode {
  image: string;
  name: string;
  source: string;
  story: string;
}

export default function Podcast() {
  return (
    <Section>
      <div className="flex flex-wrap items-start justify-center">
        {(episodes as Episode[]).map(({ name, image, source, story }, index) => {
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
