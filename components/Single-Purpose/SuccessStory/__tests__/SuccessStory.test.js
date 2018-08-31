import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import SuccessStory from '../SuccessStory';

describe('SuccessStory', () => {
  test('it should render properly with all required props', () => {
    createShallowSnapshotTest(
      <SuccessStory
        imageSource="image.png"
        quote="Best test of my life!"
        title="Great testing culture"
      >
        Test
      </SuccessStory>,
    );
  });
});
