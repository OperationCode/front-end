import React from 'react';
import { string, number, func, oneOf } from 'prop-types';
import classNames from 'classnames';
import Card from 'components/Cards/Card/Card';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import ThumbsUp from 'static/images/icons/FontAwesome/thumbs-up.svg';
import ThumbsDown from 'static/images/icons/FontAwesome/thumbs-down.svg';
import styles from './ResourceCard.module.css';

export const possibleUserVotes = {
  upvote: 'upvote',
  downvote: 'downvote',
  none: null,
};

ResourceCard.propTypes = {
  className: string,
  description: string,
  downvotes: number,
  href: string.isRequired,
  imageSource: string.isRequired,
  name: string.isRequired,
  onDownvote: func,
  onUpvote: func,
  upvotes: number,
  userVote: oneOf(Object.values(possibleUserVotes)),
};

ResourceCard.defaultProps = {
  className: undefined,
  description: '',
  downvotes: 0,
  onDownvote: () => {},
  onUpvote: () => {},
  upvotes: 0,
  userVote: possibleUserVotes.none,
};

function ResourceCard({
  className,
  description,
  downvotes,
  href,
  imageSource,
  name,
  onDownvote,
  onUpvote,
  upvotes,
  userVote,
}) {
  const onUpvoteHandler = event => {
    event.preventDefault(); // prevent link from being clicked
    onUpvote(event);
  };

  const onDownvoteHandler = event => {
    event.preventDefault(); // prevent link from being clicked
    onDownvote(event);
  };

  const didUpvote = userVote === possibleUserVotes.upvote;
  const didDownvote = userVote === possibleUserVotes.downvote;

  return (
    <OutboundLink
      href={href}
      hasIcon={false}
      className={classNames(styles.link, className)}
      analyticsEventLabel={`Resource: ${name}`}
    >
      <Card className={styles.ResourceCard} hasAnimationOnHover>
        <header className={styles.titleSection}>
          <img src={imageSource} alt="logo" aria-hidden="true" />
          <h5>{name}</h5>
        </header>

        <section>
          <p className={styles.descriptionText}>{description}</p>
        </section>

        <footer className={styles.footerSection}>
          <span className={styles.footerText}>Useful?</span>

          <div className={styles.voteInfo}>
            <button
              className={classNames(styles.voteButton, { [styles.active]: didUpvote })}
              data-testid="Upvote Button"
              onClick={onUpvoteHandler}
              type="button"
            >
              <ScreenReaderOnly>Yes</ScreenReaderOnly>
              <ThumbsUp
                className={classNames(styles.icon, {
                  [styles.active]: didUpvote,
                })}
              />
            </button>

            <span className={classNames(styles.voteCount, { [styles.active]: didUpvote })}>
              <ScreenReaderOnly>Upvotes:</ScreenReaderOnly>
              {upvotes.toString()}
            </span>
          </div>

          <div className={styles.voteInfo}>
            <button
              className={classNames(styles.voteButton, { [styles.active]: didDownvote })}
              data-testid="Downvote Button"
              onClick={onDownvoteHandler}
              type="button"
            >
              <ScreenReaderOnly>No</ScreenReaderOnly>
              <ThumbsDown
                className={classNames(styles.icon, {
                  [styles.active]: didDownvote,
                })}
              />
            </button>
          </div>

          <span className={classNames(styles.voteCount, { [styles.active]: didDownvote })}>
            <ScreenReaderOnly>Downvotes:</ScreenReaderOnly>
            {downvotes.toString()}
          </span>
        </footer>
      </Card>
    </OutboundLink>
  );
}

export default ResourceCard;
