import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import ClipPathImage from '../ClipPathImage';

describe('ClipPathImage', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(<ClipPathImage imageSource="image.png" title="Test title" />);
  });

  it('should render with many props assigned', () => {
    createShallowSnapshotTest(
      <ClipPathImage
        altText="Test picture"
        imageSource="test.png"
        theme="secondary"
        title="Test title"
      />,
    );
  });
});
