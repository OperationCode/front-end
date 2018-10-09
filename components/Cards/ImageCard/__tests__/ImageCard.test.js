import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import ImageCard from '../ImageCard';

describe('ImageCard', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(
      <ImageCard alt="Test title" imageSource="/static/images/Family1.jpg">
        <p>Testing!</p>
      </ImageCard>,
    );
  });
});
