import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'common/components/Button/Button';
import OutboundLink from 'common/components/OutboundLink/OutboundLink';
import styles from './ImageCard.css';

ImageCard.propTypes = {
  buttonText: PropTypes.string,
  cardText: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  link: PropTypes.string,
  title: PropTypes.string.isRequired,
};

ImageCard.defaultProps = {
  buttonText: '',
  link: '',
};

function ImageCard({ buttonText, cardText, imageSource, link, title }) {
  return (
    <div className={styles.ImageCard}>
      <img className={styles.cardImage} src={imageSource} alt={title} />

      <div className={styles.cardText}>
        <h6>{title}</h6>
        <p>{cardText}</p>
        {link && (
          <Button>
            {link.startsWith('http') ? (
              <OutboundLink analyticsEventLabel={`${title} Image Card`} href={link}>
                {buttonText}
              </OutboundLink>
            ) : (
              <Link href={link}>
                {/* eslint-disable jsx-a11y/anchor-is-valid */}
                <a>{buttonText}</a>
                {/* eslint-enable jsx-a11y/anchor-is-valid */}
              </Link>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}

export default ImageCard;
