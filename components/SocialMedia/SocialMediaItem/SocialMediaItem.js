import React from 'react';
import PropTypes from 'prop-types';
import OutboundLink from 'common/OutboundLink/OutboundLink';
import styles from './SocialMediaItem.css';

SocialMediaItem.propTypes = {
  link: PropTypes.string.isRequired,
  smImage: PropTypes.string.isRequired,
  smText: PropTypes.string.isRequired,
};

function SocialMediaItem({
  link, smImage, smText,
}) {
  return (
    <div className={styles.SocialMediaItem}>
      <OutboundLink
        analyticsEventLabel={smText}
        hasIcon={false}
        href={link}
      >
        <img
          src={smImage}
          alt={smText}
        />
      </OutboundLink>
    </div>
  );
}

export default SocialMediaItem;
