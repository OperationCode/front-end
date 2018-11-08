import React from 'react';
import PropTypes from 'prop-types';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import { withRouter } from 'next/router';
import styles from './SocialMediaItem.css';

SocialMediaItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  svg: PropTypes.node.isRequired,
};

function SocialMediaItem(props) {
  const { name, href, svg } = props;
  return (
    <div className={styles.SocialMediaItem}>
      <OutboundLink
        analyticsEventLabel={`Social Media Engagement: ${name}`}
        hasIcon={false}
        href={href}
        router={props}
      >
        {svg}
      </OutboundLink>
    </div>
  );
}

export default withRouter(SocialMediaItem);
