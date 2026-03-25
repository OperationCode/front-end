import type { Metadata } from 'next';
import Image from 'next/image';
import Card from '@/components/Cards/Card/Card';
import Section from '@/components/Section/Section';
import Heading from '@/components/Heading/Heading';
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
                priority={index < 2}
                loading={index < 2 ? 'eager' : 'lazy'}
                width={200}
                height={200}
              />

              {/* eslint-disable-next-line jsx-a11y/media-has-caption -- podcast audio, no captions available */}
              <audio controls preload={index < 2 ? 'metadata' : 'none'} className="my-3 w-4/5">
                <source src={source} type={source.endsWith('.m4a') ? 'audio/mp4' : 'audio/mpeg'} />
              </audio>

              <p className="mt-2 mb-6 h-[250px] overflow-y-scroll">{story}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
