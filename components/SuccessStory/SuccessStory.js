import React from 'react';
import PropTypes from 'prop-types';
import styles from './SuccessStory.css';

SuccessStory.propTypes = {
  imageSource: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

function SuccessStory({ imageSource, quote, title }) {
  return (
    <div className={styles.SuccessStory}>
      <img alt={`${title} headshot`} className={styles.image} src={imageSource} />
<<<<<<< HEAD

      <div className={styles.quote}>
        <h3 className={styles.title}>{title}</h3>
=======
      <div className={styles.quote}>
        <h6 className={styles.title}>{title}</h6>
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
        <blockquote>{`"${quote}"`}</blockquote>
      </div>
    </div>
  );
}

export default SuccessStory;
