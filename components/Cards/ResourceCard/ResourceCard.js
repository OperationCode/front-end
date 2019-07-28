import React from 'react';
import { string, number, bool, func } from 'prop-types';
import classnames from 'classnames';

import Card from 'components/Cards/Card/Card';
import ThumbsUp from 'static/images/icons/FontAwesome/thumbs-up.svg';
import ThumbsDown from 'static/images/icons/FontAwesome/thumbs-down.svg';
import styles from './ResourceCard.css';

ResourceCard.propTypes = {
  name: string.isRequired,
  imageSource: string.isRequired,
  description: string,
  upvotes: number,
  upvoted: bool,
  onUpvote: func,
  downvotes: number,
  downvoted: bool,
  onDownvote: func,
  href: string,
  className: string,
};

ResourceCard.defaultProps = {
  className: undefined,
  description: '',
  upvotes: 0,
  upvoted: false,
  onUpvote: () => {},
  downvotes: 0,
  downvoted: false,
  onDownvote: () => {},
  href: '',
};

export default function ResourceCard({
  imageSource,
  name,
  description,
  upvotes,
  upvoted,
  onUpvote,
  downvotes,
  downvoted,
  onDownvote,
  className,
}) {
  return (
    <Card className={classnames(styles.ResourceCard, className)}>
      <div className={styles.titleSection}>
        <img src={imageSource} alt="logo" />
        <h5>{name}</h5>
      </div>

      <div>
        <p className={styles.descriptionText}>{description}</p>
      </div>

      <div className={styles.footerSection}>
        <span className={styles.footerText}>I found this useful </span>
        <button
          type="button"
          className={classnames(styles.voteBtn, { [styles.faded]: !upvotes })}
          onClick={onUpvote}
        >
          <ThumbsUp className={classnames(styles.icon, { [styles.active]: upvoted })} />
          {upvotes}
        </button>

        <button
          type="button"
          className={classnames(styles.voteBtn, { [styles.faded]: !downvotes })}
          onClick={onDownvote}
        >
          <ThumbsDown className={classnames(styles.icon, { [styles.active]: downvoted })} />
          {downvotes}
        </button>
      </div>
    </Card>
  );
}
