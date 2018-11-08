/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import JoinSection from '../JoinSection';

describe('JoinSection', () => {
  it('should render with required props', () => {
    createSnapshotTest(<JoinSection />);
  });
});
