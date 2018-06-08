import React from 'react';
import PropTypes from 'prop-types';
import OutboundLink from 'common/components/OutboundLink/OutboundLink';
import styles from './AdBanner.css';

AdBanner.propTypes = {
  altText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  imageSource: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

function AdBanner({
  altText, children, imageSource, link,
}) {
  return (
    <OutboundLink
      href={link}
      analyticsEventLabel={`[AdBanner Hit] to ${link}`}
      className={styles.adBannerLink}
    >
      <div className={styles.adBanner}>
        <div className={styles.adBannerImageContainer}>
          <img
            alt={altText}
            className={styles.adBannerImage}
            src={imageSource}
          />
        </div>
        <h4 className={styles.adBannerText}>{children}</h4>
      </div>
    </OutboundLink>
  );
}

export default AdBanner;
