import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OutboundLink from 'common/components/OutboundLink/OutboundLink';
import styles from './ClipPathImage.css';

ClipPathImage.propTypes = {
  altText: PropTypes.string,
  className: PropTypes.string,
  imageSource: PropTypes.string.isRequired,
  href: PropTypes.string,
  theme: PropTypes.oneOf(['primary', 'secondary', 'gray']),
  title: PropTypes.string.isRequired,
};

ClipPathImage.defaultProps = {
  altText: undefined,
  className: undefined,
  href: undefined,
  theme: 'primary',
};

function ClipPathImage({
  altText, className, imageSource, href, theme, title,
}) {
  const content = (
    <div className={classNames(styles[theme], styles.content)}>
      <img
        alt={altText}
        src={imageSource}
      />
      <h6>{title}</h6>
    </div>
  );

  return href ? (
    <OutboundLink
      analyticsEventLabel={`ClipPath [${title}]`}
      className={classNames(className, styles.ClipPathImage, styles.ClipPathImageWithLink)}
      href={href}
    >
      {content}
    </OutboundLink>
  ) : (
    <div className={classNames(className, styles.ClipPathImage)}>{content}</div>
  );
}

export default ClipPathImage;
