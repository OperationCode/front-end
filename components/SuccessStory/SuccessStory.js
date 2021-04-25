import React from 'react';
import { string } from 'prop-types';
import Image from 'next/image';
import styles from './SuccessStory.module.css';

SuccessStory.propTypes = {
  imageSource: string.isRequired,
  quote: string.isRequired,
  title: string.isRequired,
};

function SuccessStory({ imageSource, quote, title }) {
  return (
    <div className={styles.SuccessStory}>
      <div className={styles.imageWrapper}>
        <Image
          alt={`${title} headshot`}
          src={imageSource}
          width={200}
          height={200}
          layout="fixed"
        />
      </div>

      <div className={styles.quote}>
        <h6 className={styles.title}>{title}</h6>
        <blockquote>{`"${quote}"`}</blockquote>
      </div>
    </div>
  );
}

export default SuccessStory;
