import type { Metadata } from 'next';
import Image from 'next/image';
import Card from '@/components/Cards/Card/Card';
import Section from '@/components/Section/Section';
import Heading from '@/components/Heading/Heading';
import episodes from './episodes';

export const metadata: Metadata = { title: 'Podcast' };

export default function Podcast() {
  return (
    <Section>
      <div className="flex flex-wrap items-start justify-center">
        {episodes.map(({ name, image, source, story }, index) => {
          const interviewee = name.replace(/ interview/gi, '').split(',')[0];

          return (
            <Card
              data-testid="Podcast Card"
              className="m-6 flex w-full flex-col items-center justify-center overflow-hidden sm:w-125"
              key={name}
            >
              <Heading text={interviewee} headingLevel={3} />

              <Image
                src={image}
                alt={interviewee}
                className="max-h-50 max-w-full object-cover"
                priority={index < 2}
                loading={index < 2 ? 'eager' : 'lazy'}
                width={200}
                height={200}
              />

              {/* eslint-disable-next-line jsx-a11y/media-has-caption -- no captions available */}
              <audio controls preload={index < 2 ? 'metadata' : 'none'} className="my-3 w-4/5">
                <source src={source} type={source.endsWith('.m4a') ? 'audio/mp4' : 'audio/mpeg'} />
              </audio>

              <p className="mt-2 mb-6 h-62.5 overflow-y-scroll">{story}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
