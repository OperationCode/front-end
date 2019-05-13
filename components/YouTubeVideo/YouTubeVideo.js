import React from 'react';
import { number, oneOfType, string } from 'prop-types';
import classNames from 'classnames';
import YouTube from 'react-youtube';
import styles from './YouTubeVideo.css';

YouTubeVideo.propTypes = {
  className: string,
  height: oneOfType([string, number]),
  width: oneOfType([string, number]),
  videoId: oneOfType([string, number]).isRequired,
};

YouTubeVideo.defaultProps = {
  className: undefined,
  height: 390,
  width: 640,
};

function YouTubeVideo({ className, height, width, videoId }) {
  const options = {
    height: `${height}`,
    width: `${width}`,
  };

  return (
    <YouTube
      className={classNames(className, styles.YouTubeVideo)}
      onReady={event => {
        event.target.pauseVideo();
      }}
      opts={options}
      videoId={videoId}
    />
  );
}

export default YouTubeVideo;
