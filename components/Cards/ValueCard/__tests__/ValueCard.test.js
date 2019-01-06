/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import ValueCard from '../ValueCard';

describe('ValueCard', () => {
<<<<<<< HEAD
  test('should render properly with all required props assigned', () => {
=======
  it('should render with required props', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    createSnapshotTest(
      <ValueCard
        name="Testing"
        description="Testing is good for the soul and scientifically proven to make puppies happy."
      />,
    );
  });
});
