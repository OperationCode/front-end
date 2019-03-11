import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import YouTube from 'react-youtube';
import styles from './YouTubeVideo.css';

YouTubeVideo.propTypes = {
  className: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  videoId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
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
      onReady={e => {
        e.target.pauseVideo();
      }}
      opts={options}
      videoId={videoId}
    />
  );
}

export default YouTubeVideo;
