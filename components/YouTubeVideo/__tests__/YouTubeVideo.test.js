import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import YouTubeVideo from '../YouTubeVideo';

describe('YouTubeVideo', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(<YouTubeVideo videoId="12345">test 1</YouTubeVideo>);
  });

  it('should render with many props assigned', () => {
    createShallowSnapshotTest(
      <YouTubeVideo className="YouTube-video" height="450px" width="875px" videoId="12395">
        test 3
      </YouTubeVideo>,
    );
  });
});
