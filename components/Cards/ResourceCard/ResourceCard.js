import React from 'react';
import { string, number, func, oneOf } from 'prop-types';
import classnames from 'classnames';

import Card from 'components/Cards/Card/Card';
import ThumbsUp from 'static/images/icons/FontAwesome/thumbs-up.svg';
import ThumbsDown from 'static/images/icons/FontAwesome/thumbs-down.svg';
import styles from './ResourceCard.css';

ResourceCard.propTypes = {
  name: string.isRequired,
  imageSource: string.isRequired,
  description: string,
  userVote: oneOf(['upvote', 'downvote', '']),
  upvotes: number,
  onUpvote: func,
  downvotes: number,
  onDownvote: func,
  href: string,
  className: string,
};

ResourceCard.defaultProps = {
  className: undefined,
  description: '',
  userVote: '',
  upvotes: 0,
  onUpvote: () => {},
  downvotes: 0,
  onDownvote: () => {},
  href: '',
};

export default function ResourceCard({
  imageSource,
  name,
  description,
  userVote,
  upvotes,
  onUpvote,
  downvotes,
  onDownvote,
  className,
}) {
  return (
    <Card className={classnames(styles.ResourceCard, className)}>
      <header className={styles.titleSection}>
        <img src={imageSource} alt="logo" />
        <h5>{name}</h5>
      </header>

      <section>
        <p className={styles.descriptionText}>{description}</p>
      </section>

      <footer className={styles.footerSection}>
        <span className={styles.footerText}>I found this useful </span>
        <button
          type="button"
          className={classnames(styles.voteBtn, { [styles.faded]: !upvotes })}
          onClick={onUpvote}
        >
          <ThumbsUp
            className={classnames(styles.icon, { [styles.active]: userVote === 'upvote' })}
          />
          {upvotes}
        </button>

        <button
          type="button"
          className={classnames(styles.voteBtn, { [styles.faded]: !downvotes })}
          onClick={onDownvote}
        >
          <ThumbsDown
            className={classnames(styles.icon, { [styles.active]: userVote === 'downvote' })}
          />
          {downvotes}
        </button>
      </footer>
    </Card>
  );
}
