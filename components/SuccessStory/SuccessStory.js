import React from 'react';
import { string } from 'prop-types';
import styles from './SuccessStory.css';

SuccessStory.propTypes = {
  imageSource: string.isRequired,
  quote: string.isRequired,
  title: string.isRequired,
};

function SuccessStory({ imageSource, quote, title }) {
  return (
    <div className={styles.SuccessStory}>
      <img alt={`${title} headshot`} className={styles.image} src={imageSource} />
      <div className={styles.quote}>
        <h6 className={styles.title}>{title}</h6>
        <blockquote>{`"${quote}"`}</blockquote>
      </div>
    </div>
  );
}

export default SuccessStory;
