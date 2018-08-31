import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import YouTubeVideo from '../YouTubeVideo';

describe('YouTubeVideo', () => {
  test('it should render properly with required props assigned', () => {
    createShallowSnapshotTest(<YouTubeVideo videoId="12345">test 1</YouTubeVideo>);
  });

  test('it should render properly with some props assigned', () => {
    createShallowSnapshotTest(
      <YouTubeVideo className="YouTube-video" videoId="12395">
        test 2
      </YouTubeVideo>,
    );
  });

  test('it should render properly with all props assigned', () => {
    createShallowSnapshotTest(
      <YouTubeVideo className="YouTube-video" height="450px" width="875px" videoId="12395">
        test 3
      </YouTubeVideo>,
    );
  });
});
