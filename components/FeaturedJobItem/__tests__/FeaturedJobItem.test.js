/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import FeaturedJobItem from '../FeaturedJobItem';

describe('FeaturedJobItem', () => {
  it('should render with just required props passed', () => {
    createSnapshotTest(<FeaturedJobItem />);
  });

  it('should render properly with all props assigned', () => {
    createSnapshotTest(<FeaturedJobItem remote="false" />);
  });
});
