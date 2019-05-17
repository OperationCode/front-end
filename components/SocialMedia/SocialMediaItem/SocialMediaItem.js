import React from 'react';
import { node, string } from 'prop-types';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import styles from './SocialMediaItem.css';

SocialMediaItem.propTypes = {
  name: string.isRequired,
  href: string.isRequired,
  svg: node.isRequired,
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
