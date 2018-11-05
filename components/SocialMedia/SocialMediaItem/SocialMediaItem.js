import React from 'react';
import PropTypes from 'prop-types';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import MockedRouter from 'test-utils/mocks/nextRouterMock';
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
        router={MockedRouter}
      >
        {svg}
      </OutboundLink>
    </div>
  );
}

export default SocialMediaItem;
