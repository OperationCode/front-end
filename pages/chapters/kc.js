/* eslint-disable react/prop-types */
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import styles from 'styles/kc.module.css';
import { ONE_DAY } from 'common/constants/unitsOfTime';
import Image from 'node_modules/next/image';

const pageTitle = 'Kansas City Chapter';

/**
 * Videos:
 * Array<{
    kind: 'youtube#playlistItem',
    etag: string,
    id: string,
    snippet: {
      publishedAt: string; // '2023-04-16T01:33:22Z'
      channelId: string;
      title: string;
      description: string;
      thumbnails: Record<
        'default' | 'high' | 'maxres' | 'medium' | 'standard',
        { url: string; width: number; height: number }
      >;
      channelTitle: 'Operation Code';
      playlistId: string;
      position: number;
      resourceId: { kind: 'youtube#video'; videoId: string };
      videoOwnerChannelTitle: 'Operation Code';
      videoOwnerChannelId: string;
    }
  }>
 *
*/

function ChapterKC({ videos }) {
  return (
    <div className={styles.KC}>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} className={styles.hero}>
        <div>
          <p className={styles.info}>
            Join us in person by getting a free ticket from our{' '}
            <OutboundLink
              href="https://www.eventbrite.com/o/operation-code-kansas-city-chapter-50445160493"
              analyticsEventLabel={`${pageTitle} Eventbrite`}
            >
              Eventbrite
            </OutboundLink>
          </p>

          <p className={styles.info}>
            Have any questions that were not answered on this site?
            <br />
            <OutboundLink
              href="mailto:kc@operationcode.org"
              analyticsEventLabel={`Contact ${pageTitle}`}
            >
              Contact the Kansas City Chapter hosts
            </OutboundLink>
          </p>
        </div>
      </HeroBanner>

      <Content
        title="Podcast"
        theme="white"
        columns={[
          <ul className={styles.podcastThumbnailList}>
            {videos.map(({ id, snippet = {} }) => {
              const { title, thumbnails = {}, resourceId = {} } = snippet;
              const { medium } = thumbnails;

              return (
                <li key={id} className={styles.podcastThumbnailListItem}>
                  <OutboundLink
                    href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                    analyticsEventLabel={`Podcast Video Thumbnail - ${id}`}
                    hasIcon={false}
                  >
                    <p>{title}</p>
                    <Image width={medium.width} height={medium.height} src={medium.url} alt="" />
                  </OutboundLink>
                </li>
              );
            })}
          </ul>,
        ]}
      />
    </div>
  );
}

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
const RELEVANT_PLAYLIST_ID = 'PLvixPHcxfg5kOwP4dQwzTHm5bWLJ9d0kS';

export async function getStaticProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=${RELEVANT_PLAYLIST_ID}&key=${process.env.YOUTUBE_API_KEY}`,
  );
  const data = await res.json();

  return {
    props: {
      videos: data.items,
    },
    revalidate: ONE_DAY,
  };
}

export default ChapterKC;
