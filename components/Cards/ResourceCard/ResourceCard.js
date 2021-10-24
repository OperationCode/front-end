import { useState } from 'react';
import { string, number, func, oneOf, oneOfType, array, bool } from 'prop-types';
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
  id: number.isRequired,
  category: string,
  languages: oneOfType([string, array]),
  isFree: bool,
  handleVote: func,
  upvotes: number,
  userVote: oneOf(Object.values(possibleUserVotes)),
};

ResourceCard.defaultProps = {
  description: '',
  downvotes: 0,
  category: '',
  languages: [],
  isFree: false,
  handleVote: () => {},
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
  isFree,
  handleVote,
  upvotes,
  userVote,
  id,
}) {
  const [upVotes, setUpVotes] = useState(upvotes);
  const [downVotes, setDownVotes] = useState(downvotes);
  const didUpvote = userVote === possibleUserVotes.upvote;
  const didDownvote = userVote === possibleUserVotes.downvote;

  const DESKTOP_VOTING_BLOCK = 'desktopVotingBlock';

  // Sync IDs with stylesheet
  // eslint-disable-next-line react/prop-types
  const VotingBlock = ({ blockID, resourceID }) => {
    const onVote = voteDirection => handleVote(voteDirection, resourceID, setUpVotes, setDownVotes);
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
  };

  return (
    <Accordion
      accessibilityId={name}
      className={styles.ResourceCard}
      content={{
        headingChildren: (
          <div
            data-testid={RESOURCE_CARD}
            data-test-category={category}
            data-test-languages={languages.join('-')}
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

            <VotingBlock blockID={DESKTOP_VOTING_BLOCK} resourceID={id} />
          </div>
        ),
        bodyChildren: (
          <div className={styles.content}>
            <p className={styles.descriptionText}>{description}</p>

            <div className={styles.metadata}>
              <p>
                <span className={styles.metadataLabel}>Languages:</span> {languages.join(', ')}
              </p>
              <p>
                <span className={styles.metadataLabel}>Category:</span> {category}
              </p>
            </div>

            <VotingBlock blockID="mobileVotingBlock" resourceID={id} />
          </div>
        ),
      }}
    />
  );
}

export default ResourceCard;
