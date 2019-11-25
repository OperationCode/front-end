/* eslint-env jest */
import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';

import ResourceCard from '../ResourceCard';
// import ResourceCard, { possibleUserVotes } from '../ResourceCard';

describe('ResourceCard', () => {
  const requiredProps = {
    href: 'https://all-the-javascripts.com/',
    imageSource: '/static/images/icons/javascript_logo.svg',
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

    const UpvoteButton = component.queryByTestId('Upvote Button');
    expect(onUpvoteMock).not.toHaveBeenCalled();
    act(() => {
      fireEvent.click(UpvoteButton);
    });
    expect(onUpvoteMock).toHaveBeenCalledTimes(1);

    const DownvoteButton = component.queryByTestId('Downvote Button');
    expect(onDownvoteMock).not.toHaveBeenCalled();
    act(() => {
      fireEvent.click(DownvoteButton);
    });
    expect(onDownvoteMock).toHaveBeenCalledTimes(1);
  });
});
