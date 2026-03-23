'use client';

import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

interface PodcastPlayerProps {
  url: string;
}

export default function PodcastPlayer({ url }: PodcastPlayerProps) {
  return (
    <ReactPlayer
      url={url}
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
  );
}
