import type { Metadata } from 'next';
import Section from '@/components/Section/Section';
import FlatCard from '@/components/Cards/FlatCard/FlatCard';
import OutboundLink from '@/components/OutboundLink/OutboundLink';

export const metadata: Metadata = { title: 'Chapters' };

const unsortedChapterLocations = [
  {
    name: 'Kansas City',
    url: 'https://www.eventbrite.com/cc/kansas-city-chapter-877989',
  },
  {
    name: 'New York',
    url: 'https://www.eventbrite.com/cc/nyc-chapter-877919',
  },
  {
    name: 'Austin',
    url: 'https://www.eventbrite.com/cc/austin-tx-chapter-847379',
  },
  {
    name: 'DC',
    url: 'https://www.eventbrite.com/cc/washington-dc-and-metro-collection-1111969',
  },
  {
    name: 'National',
    url: 'https://www.eventbrite.com/cc/operation-code-national-events-847109',
  },
];

const chapterLocations = unsortedChapterLocations.sort(({ name: nameA }, { name: nameB }) =>
  nameA > nameB ? 1 : -1,
);

function Chapters() {
  return (
    <Section theme="white" title="Locations">
      <div className="flex w-full flex-wrap justify-center gap-8">
        {chapterLocations.map((chapter) => {
          return (
            <FlatCard key={chapter.name} className="min-w-40 text-center">
              <OutboundLink
                href={chapter.url}
                hasIcon={false}
                analyticsEventLabel={`${chapter.name} Eventbrite`}
              >
                {chapter.name}
              </OutboundLink>
            </FlatCard>
          );
        })}
      </div>
      <div className="w-full text-center">
        Don't see your a location in your area?
        <br />
        <OutboundLink
          href="mailto:staff@operationcode.org"
          analyticsEventLabel="Email About Chapter Interest"
          hasIcon={false}
        >
          Contact us
        </OutboundLink>{' '}
        to share your interest in being involved at a local level!
      </div>
    </Section>
  );
}

export default Chapters;
