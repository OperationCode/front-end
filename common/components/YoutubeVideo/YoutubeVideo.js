import React from 'react';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';
import './YoutubeVideo.css';

const YoutubeVideo = ({ id, height, width }) => {
  const options = {
    height: `${height}`,
    width: `${width}`,
  };
  return (
    <YouTube
      videoId={id}
      opts={options}
      onReady={(e) => { e.target.pauseVideo(); }}
    />
  );
};

YoutubeVideo.propTypes = {
  id: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

YoutubeVideo.defaultProps = {
  id: '',
  height: '390',
  width: '640',
};

export default YoutubeVideo;
