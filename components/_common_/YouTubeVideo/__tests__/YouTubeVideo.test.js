import React from 'react';
import { shallow } from 'enzyme';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import YouTubeVideo from '../YouTubeVideo';

describe('YouTubeVideo', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(<YouTubeVideo videoId="12345">test 1</YouTubeVideo>);
  });

  it('should render with all props assigned', () => {
    createShallowSnapshotTest(
      <YouTubeVideo className="YouTube-video" height="450px" width="875px" videoId="12395">
        test 3
      </YouTubeVideo>,
    );
  });

  it('should call onReady function on mount', () => {
    const mockFunc = jest.fn();
    const event = { target: { pauseVideo: mockFunc } };

    const YouTubeVideoShallowInstance = shallow(<YouTubeVideo videoId="d2L8IPJql3Q" />);
    YouTubeVideoShallowInstance.find('YouTube').simulate('ready', event);

    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});
