/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import HeroBanner from '../HeroBanner';

describe('HeroBanner', () => {
  it('should render with required props', () => {
    createSnapshotTest(<HeroBanner title="test-title">Test</HeroBanner>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <HeroBanner className="test-class" title="test-title">
        Test
      </HeroBanner>,
    );
  });
});
