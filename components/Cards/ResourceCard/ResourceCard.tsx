import { useState } from 'react';
import classNames from 'classnames';
import Accordion from 'components/Accordion/Accordion';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import {
  UPVOTE_BUTTON,
  UPVOTE_COUNT,
  DOWNVOTE_BUTTON,
  DOWNVOTE_COUNT,
  RESOURCE_CARD,
  RESOURCE_TITLE,
} from 'common/constants/testIDs';
import ThumbsUp from 'static/images/icons/FontAwesome/thumbs-up.svg';
import ThumbsDown from 'static/images/icons/FontAwesome/thumbs-down.svg';
import styles from './ResourceCard.module.css';

const DESKTOP_VOTING_BLOCK = 'desktopVotingBlock';

type VoteDirectionType = 'upvote' | 'downvote';

type HandleVoteType = (
  /**
   * Sets the vote to be up or down.
   */
  voteDirection: VoteDirectionType,
  /**
   * Sets which resource is gets the vote.
   */
  resourceID: number,
  /**
   * Function that sets the state value of "up" votes.
   */
  setUpVotes: VotingBlockPropsType['setUpVotes'],
  /**
   * Function that sets the state value of "down" votes.
   */
  setDownVotes: VotingBlockPropsType['setDownVotes'],
) => void;

type VotingBlockPropsType = {
  /**
   * Applies an id.
   */
  blockID: string;
  /**
   * Sets which resource is gets the vote.
   */
  resourceID: number;
  /**
   * Number of "up" votes.
   */
  upVotes: number;
  /**
   * Number of "down" votes.
   */
  downVotes: number;
  /**
   * Function to handle the vote.
   */
  handleVote: HandleVoteType | undefined;
  /**
   * Function that sets the state value of "up" votes.
   */
  setUpVotes: React.Dispatch<React.SetStateAction<number>>;
  /**
   * Function that sets the state value of "down" votes.
   */
  setDownVotes: React.Dispatch<React.SetStateAction<number>>;
  /**
   * Applies classes based on whether an "up" vote has occurred.
   */
  didUpvote: boolean;
  /**
   * Applies classes based on whether an "down" vote has occurred.
   */
  didDownvote: boolean;
};

function VotingBlock({
  blockID,
  resourceID,
  upVotes,
  downVotes,
  handleVote,
  setUpVotes,
  setDownVotes,
  didUpvote,
  didDownvote,
}: VotingBlockPropsType) {
  const onVote = (voteDirection: VoteDirectionType) =>
    handleVote?.(voteDirection, resourceID, setUpVotes, setDownVotes);
  const onUpvote = () => onVote('upvote');
  const onDownvote = () => onVote('downvote');

  return (
    <div className={classNames(styles.votingBlock, styles[blockID])}>
      <span className={styles.votingBlockHeader}>Useful?</span>

      <div className={styles.voteInfo}>
        <button
          className={classNames(styles.voteButton, { [styles.active]: didUpvote })}
          aria-pressed={didUpvote}
          data-testid={blockID === DESKTOP_VOTING_BLOCK ? UPVOTE_BUTTON : undefined}
          onClick={onUpvote}
          type="button"
        >
          <ScreenReaderOnly>Yes</ScreenReaderOnly>
          <ThumbsUp
            className={classNames(styles.icon, {
              [styles.active]: didUpvote,
            })}
          />

          <span
            aria-live="polite"
            className={classNames(styles.voteCount, { [styles.active]: didUpvote })}
          >
            <ScreenReaderOnly>Number of upvotes:</ScreenReaderOnly>
            <span data-testid={UPVOTE_COUNT}>{upVotes.toString()}</span>
          </span>
        </button>
      </div>

      <div className={styles.voteInfo}>
        <button
          className={classNames(styles.voteButton, { [styles.active]: didDownvote })}
          aria-pressed={didDownvote}
          data-testid={blockID === DESKTOP_VOTING_BLOCK ? DOWNVOTE_BUTTON : undefined}
          onClick={onDownvote}
          type="button"
        >
          <ScreenReaderOnly>No</ScreenReaderOnly>
          <ThumbsDown
            className={classNames(styles.icon, {
              [styles.active]: didDownvote,
            })}
          />

          <span className={classNames(styles.voteCount, { [styles.active]: didDownvote })}>
            <ScreenReaderOnly>Number of downvotes:</ScreenReaderOnly>
            <span data-testid={DOWNVOTE_COUNT}>{downVotes.toString()}</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export const possibleUserVotes = {
  upvote: 'upvote',
  downvote: 'downvote',
  none: null,
};

// ResourceCard.propTypes = {
//   description: string,
//   downvotes: number,
//   href: string.isRequired,
//   name: string.isRequired,
//   id: number.isRequired,
//   category: string,
//   languages: oneOfType([string, array]),
//   isFree: bool,
//   handleVote: func,
//   upvotes: number,
//   userVote: oneOf(Object.values(possibleUserVotes)),
// };

export type ResourceCardPropType = {
  href: string;
  name: string;
  id: number;
  description?: string;
  downvotes?: number;
  category?: string;
  languages?: string | string[];
  isFree?: boolean;
  handleVote?: () => void;
  upvotes?: number;
  userVote?: keyof typeof possibleUserVotes | null;
};

// ResourceCard.defaultProps = {
//   description: '',
//   downvotes: 0,
//   category: '',
//   languages: [],
//   isFree: false,
//   handleVote: () => {},
//   upvotes: 0,
//   userVote: possibleUserVotes.none,
// };

function ResourceCard({
  description = '',
  downvotes = 0,
  href,
  name,
  category = '',
  languages = [],
  isFree = false,
  handleVote,
  upvotes = 0,
  userVote = possibleUserVotes.none,
  id,
}: ResourceCardPropType) {
  const [upVotes, setUpVotes] = useState(upvotes);
  const [downVotes, setDownVotes] = useState(downvotes);
  const didUpvote = userVote === possibleUserVotes.upvote;
  const didDownvote = userVote === possibleUserVotes.downvote;

  return (
    <Accordion
      accessibilityId={name}
      className={styles.ResourceCard}
      content={{
        headingChildren: (
          <div
            data-testid={RESOURCE_CARD}
            data-test-category={category}
            data-test-languages={Array.isArray(languages) ? languages.join('-') : languages}
            data-test-isfree={isFree}
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

            <VotingBlock
              blockID={DESKTOP_VOTING_BLOCK}
              resourceID={id}
              upVotes={upVotes}
              downVotes={downVotes}
              handleVote={handleVote}
              setUpVotes={setUpVotes}
              setDownVotes={setDownVotes}
              didUpvote={didUpvote}
              didDownvote={didDownvote}
            />
          </div>
        ),
        bodyChildren: (
          <div className={styles.content}>
            <p className={styles.descriptionText}>{description}</p>

            <div className={styles.metadata}>
              <p>
                <span className={styles.metadataLabel}>Languages:</span>{' '}
                {Array.isArray(languages) ? languages.join(', ') : languages}
              </p>
              <p>
                <span className={styles.metadataLabel}>Category:</span> {category}
              </p>
            </div>

            <VotingBlock
              blockID="mobileVotingBlock"
              resourceID={id}
              upVotes={upVotes}
              downVotes={downVotes}
              handleVote={handleVote}
              setUpVotes={setUpVotes}
              setDownVotes={setDownVotes}
              didUpvote={didUpvote}
              didDownvote={didDownvote}
            />
          </div>
        ),
      }}
    />
  );
}

export default ResourceCard;
