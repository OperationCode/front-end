import React from 'react';
import PropTypes from 'prop-types';
import OutboundLink from 'common/components/OutboundLink/OutboundLink';
import styles from './SocialMediaItem.css';

SocialMediaItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  svg: PropTypes.node.isRequired,
};

function SocialMediaItem({ name, href, svg }) {
  return (
    <div className={styles.SocialMediaItem}>
      <OutboundLink
        analyticsEventLabel={`Social Media Engagement: ${name}`}
        hasIcon={false}
        href={href}
      >
        {svg}
      </OutboundLink>
    </div>
  );
}

export default SocialMediaItem;
