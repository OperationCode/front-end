/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import podcasts from '../podcasts';

describe('podcasts', () => {
  it('should render with required props', () => {
    createSnapshotTest(<podcasts>Test</podcasts>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(<podcasts className="test-class">Test</podcasts>);
  });
});
