/* eslint-env jest */
import { fireEvent, render } from '@testing-library/react';
import { UPVOTE_BUTTON, DOWNVOTE_BUTTON } from 'common/constants/testIDs';

import ResourceCard from '../ResourceCard';

describe('ResourceCard', () => {
  const requiredProps = {
    href: 'https://all-the-javascripts.com/',
    name: 'JavaScript for Dummies',
    id: 4,
  };

  it('fires appropriate method when upvote button clicked', () => {
    const handleVoteMock = jest.fn();

    const component = render(<ResourceCard {...requiredProps} handleVote={handleVoteMock} />);

    const UpvoteButton = component.queryByTestId(UPVOTE_BUTTON);
    expect(handleVoteMock).not.toHaveBeenCalled();
    fireEvent.click(UpvoteButton);
    expect(handleVoteMock).toHaveBeenCalledTimes(1);
    expect(handleVoteMock).toHaveBeenCalledWith(
      'upvote',
      4,
      expect.any(Function),
      expect.any(Function),
    );
  });

  it('fires appropriate method when downvote button clicked', () => {
    const handleVoteMock = jest.fn();

    const component = render(<ResourceCard {...requiredProps} handleVote={handleVoteMock} />);

    const DownvoteButton = component.queryByTestId(DOWNVOTE_BUTTON);
    expect(handleVoteMock).not.toHaveBeenCalled();
    fireEvent.click(DownvoteButton);
    expect(handleVoteMock).toHaveBeenCalledTimes(1);
    expect(handleVoteMock).toHaveBeenCalledWith(
      'downvote',
      4,
      expect.any(Function),
      expect.any(Function),
    );
  });
});
