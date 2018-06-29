import React from 'react';
import PropTypes from 'prop-types';
import styles from './SocialMediaItem.css';

const SocialMediaItem = (props) => {
  const {
    smImage,
    smText,
    link,
  } = props;

  return (
    <div className={styles.SocialMediaItem}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={smImage} alt={smText} />
      </a>
    </div>
  );
};

SocialMediaItem.propTypes = {
  smImage: PropTypes.string.isRequired,
  smText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SocialMediaItem;
