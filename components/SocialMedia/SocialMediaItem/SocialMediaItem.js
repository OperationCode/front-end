import React from 'react';
import PropTypes from 'prop-types';
import OutboundLink from 'common/components/OutboundLink/OutboundLink';
import styles from './SocialMediaItem.css';

SocialMediaItem.propTypes = {
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
};

function SocialMediaItem({  alt, href, imageSource }) {
  return (
    <div className={styles.SocialMediaItem}>
      <OutboundLink analyticsEventLabel={`Social Media Item: ${alt}`} hasIcon={false} href={href}>
        <img src={imageSource} alt={alt} />
      </OutboundLink>
    </div>
  );
}

export default SocialMediaItem;
