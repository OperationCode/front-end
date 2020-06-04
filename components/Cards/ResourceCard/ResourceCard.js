import React from 'react';
import { string, number, func, oneOf, array } from 'prop-types';
import classNames from 'classnames';
import Accordion from 'components/Accordion/Accordion';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import {
  UPVOTE_BUTTON,
  DOWNVOTE_BUTTON,
  RESOURCE_CARD,
  RESOURCE_TITLE,
} from 'common/constants/testIDs';
import ThumbsUp from 'static/images/icons/FontAwesome/thumbs-up.svg';
import ThumbsDown from 'static/images/icons/FontAwesome/thumbs-down.svg';
import styles from './ResourceCard.module.css';

export const possibleUserVotes = {
  upvote: 'upvote',
  downvote: 'downvote',
  none: null,
};

ResourceCard.propTypes = {
  description: string,
  downvotes: number,
  href: string.isRequired,
  name: string.isRequired,
  category: string.isRequired,
  languages: array,
  paid: string,
  onDownvote: func,
  onUpvote: func,
  upvotes: number,
  userVote: oneOf(Object.values(possibleUserVotes)),
};

ResourceCard.defaultProps = {
  description: '',
  downvotes: 0,
  languages: [],
  paid: false,
  onDownvote: () => {},
  onUpvote: () => {},
  upvotes: 0,
  userVote: possibleUserVotes.none,
};

function ResourceCard({
  description,
  downvotes,
  href,
  name,
  category,
  languages,
  paid,
  onDownvote,
  onUpvote,
  upvotes,
  userVote,
}) {
  const didUpvote = userVote === possibleUserVotes.upvote;
  const didDownvote = userVote === possibleUserVotes.downvote;

  // Sync IDs with stylesheet
  // eslint-disable-next-line react/prop-types
  const VotingBlock = ({ id }) => (
    <div className={classNames(styles.votingBlock, styles[id])}>
      <span className={styles.votingBlockHeader}>Useful?</span>

      <div className={styles.voteInfo}>
        <button
          className={classNames(styles.voteButton, { [styles.active]: didUpvote })}
          aria-pressed={didUpvote}
          data-testid={UPVOTE_BUTTON}
          onClick={onUpvote}
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
          <ScreenReaderOnly>Number of upvotes:</ScreenReaderOnly>
          {upvotes.toString()}
        </span>
      </div>

      <div className={styles.voteInfo}>
        <button
          className={classNames(styles.voteButton, { [styles.active]: didDownvote })}
          aria-pressed={didDownvote}
          data-testid={DOWNVOTE_BUTTON}
          onClick={onDownvote}
          type="button"
        >
          <ScreenReaderOnly>No</ScreenReaderOnly>
          <ThumbsDown
            className={classNames(styles.icon, {
              [styles.active]: didDownvote,
            })}
          />
        </button>

        <span className={classNames(styles.voteCount, { [styles.active]: didDownvote })}>
          <ScreenReaderOnly>Number of downvotes:</ScreenReaderOnly>
          {downvotes.toString()}
        </span>
      </div>
    </div>
  );

  return (
    <Accordion
      accessibilityId={name}
      className={styles.ResourceCard}
      content={{
        headingChildren: (
          <div
            data-testid={RESOURCE_CARD}
            data-test-category={category}
            data-test-languages={languages}
            data-test-paid={paid}
            className={styles.header}
          >
            <h5 data-testid={RESOURCE_TITLE} className={styles.resourceName}>
              <OutboundLink
                analyticsEventLabel={`Resource: ${name}`}
                className={styles.link}
                hasIcon={false}
                href={href}
              >
                {name}
              </OutboundLink>
            </h5>

            <VotingBlock id="desktopVotingBlock" />
          </div>
        ),
        bodyChildren: (
          <div className={styles.content}>
            <p className={styles.descriptionText}>{description}</p>

            <VotingBlock id="mobileVotingBlock" />
          </div>
        ),
      }}
    />
  );
}

export default ResourceCard;
