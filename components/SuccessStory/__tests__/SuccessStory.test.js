import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import SuccessStory from '../SuccessStory';

describe('SuccessStory', () => {
<<<<<<< HEAD
  test('it should render properly with all required props', () => {
=======
  it('should render with required props', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
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
