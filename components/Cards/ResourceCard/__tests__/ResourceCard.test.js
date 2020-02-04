/* eslint-env jest */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { UPVOTE_BUTTON, DOWNVOTE_BUTTON } from 'common/constants/testIDs';

import ResourceCard from '../ResourceCard';

describe('ResourceCard', () => {
  const requiredProps = {
    href: 'https://all-the-javascripts.com/',
    name: 'JavaScript for Dummies',
  };

  // Swallowing warnings from ReactGA
  const realConsoleWarn = console.warn;
  beforeAll(() => {
    console.warn = () => {};
  });
  afterAll(() => {
    console.warn = realConsoleWarn;
  });

  it('fires appropriate method when upvote button clicked', () => {
    const onUpvoteMock = jest.fn();
    const onDownvoteMock = jest.fn();

    const component = render(
      <ResourceCard {...requiredProps} onDownvote={onDownvoteMock} onUpvote={onUpvoteMock} />,
    );

    const UpvoteButton = component.queryAllByTestId(UPVOTE_BUTTON)[0];
    expect(onUpvoteMock).not.toHaveBeenCalled();
    fireEvent.click(UpvoteButton);
    expect(onUpvoteMock).toHaveBeenCalledTimes(1);

    const DownvoteButton = component.queryAllByTestId(DOWNVOTE_BUTTON)[0];
    expect(onDownvoteMock).not.toHaveBeenCalled();
    fireEvent.click(DownvoteButton);
    expect(onDownvoteMock).toHaveBeenCalledTimes(1);
  });
});
