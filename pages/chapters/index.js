import Link from 'next/link';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import FlatCard from 'components/Cards/FlatCard/FlatCard';
import styles from 'styles/chapters.module.css';
import OutboundLink from 'components/OutboundLink/OutboundLink';

const pageTitle = 'Chapters';

const unsortedChapterLocations = [
  {
    name: 'Kansas City',
    path: 'kc',
  },
  // {
  //   name: 'New York',
  //   path: 'nyc',
  // },
  // {
  //   name: 'Los Angeles',
  //   path: 'la',
  // },
];

const chapterLocations = unsortedChapterLocations.sort(({ name: nameA }, { name: nameB }) =>
  nameA > nameB ? 1 : -1,
);

function Chapters() {
  return (
    <div className={styles.Chapters}>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} className={styles.hero}>
        <p>Get involved by joing your local chapter!</p>
      </HeroBanner>

      <Content
        theme="white"
        title="Locations"
        columns={[
          <div className={styles.locations}>
            {chapterLocations.map(chapter => {
              return (
                <FlatCard key={chapter.name}>
                  <Link href={`/chapters/${chapter.path}`}>
                    <a>{chapter.name}</a>
                  </Link>
                </FlatCard>
              );
            })}
          </div>,
          <div className={styles.contributeLocation}>
            Don’t see your a location in your area?
            <br />
            <OutboundLink
              href="mailto:staff@operationcode.org"
              analyticsEventLabel="Email About Chapter Interest"
              hasIcon={false}
            >
              Contact us
            </OutboundLink>{' '}
            to share your interest in being involved at a local level!
          </div>,
        ]}
      />
    </div>
  );
}

export default Chapters;
