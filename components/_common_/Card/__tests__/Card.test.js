/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Card from '../Card';

describe('Card', () => {
  it('should render with required props', () => {
    createSnapshotTest(<Card>Test</Card>);
  });

  it('should render with all props assigned', () => {
    createSnapshotTest(
      <Card className="test-class" hasAnimationOnHover>
        Test
      </Card>,
    );
  });
});
