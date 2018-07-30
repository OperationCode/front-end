/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Card from '../Card';

describe('Card', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(<Card>Test</Card>);
  });

  test('should render properly with some props assigned', () => {
    createSnapshotTest(
      <Card className="test-class" hasAnimationOnHover>
        Test
      </Card>,
    );
  });
});
