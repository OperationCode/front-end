import React from 'react';
import styles from './PressVideos.module.css';

function PressVideos() {
  return (
    <div className={styles.pressVideos}>
      <iframe
        title="GitHub Universe: Operation Code"
        src="https://www.youtube.com/embed/xN7yMoe38xc"
        frameBorder="0"
        allowFullScreen
        width="755"
        height="425"
      />
      <iframe
        title="GitHub Universe: Operation Code"
        src="https://player.vimeo.com/video/124866675?byline=0&portrait=0"
        frameBorder="0"
        allowFullScreen
        width="755"
        height="425"
      />
    </div>
  );
}

export default PressVideos;
