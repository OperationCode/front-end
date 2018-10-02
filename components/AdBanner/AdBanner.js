import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import styles from './AdBanner.css';

AdBanner.propTypes = {
  altText: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
};

AdBanner.defaultProps = { className: '' };

function AdBanner({ altText, children, className, imageSource, href }) {
  return (
    <OutboundLink
      analyticsEventLabel="[AdBanner Hit]"
      className={classNames(className, styles.adBannerLink)}
      hasIcon={false}
      href={href}
    >
      <div className={styles.adBanner}>
        <div className={styles.adBannerImageContainer}>
          <img alt={altText} className={styles.adBannerImage} src={imageSource} />
        </div>
        <h4 className={styles.adBannerText}>{children}</h4>
      </div>
    </OutboundLink>
  );
}

export default AdBanner;
