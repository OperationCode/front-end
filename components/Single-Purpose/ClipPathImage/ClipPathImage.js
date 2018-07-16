import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faExternalLinkAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkAlt';
import OutboundLink from 'common/components/OutboundLink/OutboundLink';
import styles from './ClipPathImage.css';

ClipPathImage.propTypes = {
  altText: PropTypes.string,
  className: PropTypes.string,
  imageSource: PropTypes.string.isRequired,
  href: PropTypes.string,
  theme: PropTypes.oneOf(['primary', 'secondary', 'slate']),
  title: PropTypes.string.isRequired,
};

ClipPathImage.defaultProps = {
  altText: '',
  className: '',
  href: '',
  theme: 'primary',
};

function ClipPathImage({
  altText, className, imageSource, href, theme, title,
}) {
  const content = (
    <div className={classNames(
styles[theme], styles.content, { [styles.link]: href },
)}
    >
      <img
        alt={altText}
        src={imageSource}
      />
      <h6>
        {title}&nbsp;
        {href && (
          <FontAwesomeIcon
            className={styles.externalLinkIcon}
            icon={faExternalLinkAlt}
            style={{ width: '14px' }}
          />
        )}
      </h6>
    </div>
  );

  return href ? (
    <OutboundLink
      analyticsEventLabel={`[${title}] <ClipPathImage>`}
      className={classNames(
className, styles.ClipPathImage, styles.ClipPathImageWithLink,
)}
      hasIcon={false}
      href={href}
    >
      {content}
    </OutboundLink>
  ) : (
    <div className={classNames(className, styles.ClipPathImage)}>{content}</div>
  );
}

export default ClipPathImage;
