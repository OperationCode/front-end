import React from 'react';
import PropTypes from 'prop-types';
import OutboundLink from 'common/components/OutboundLink/OutboundLink';
import styles from './SocialMediaItem.css';

SocialMediaItem.propTypes = {
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  svg: PropTypes.node.isRequired,
};

function SocialMediaItem({ alt, href, svg }) {
  return (
    <div className={styles.SocialMediaItem}>
      <OutboundLink analyticsEventLabel={`Social Media Item: ${alt}`} hasIcon={false} href={href}>
        {svg}
      </OutboundLink>
    </div>
  );
}

export default SocialMediaItem;
