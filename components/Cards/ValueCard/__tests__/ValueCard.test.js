/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import ValueCard from '../ValueCard';

describe('ValueCard', () => {
  it('should render properly with all required props assigned', () => {
    createSnapshotTest(
      <ValueCard
        name="Testing"
        description="Testing is good for the soul and scientifically proven to make puppies happy."
      />,
    );
  });
});
