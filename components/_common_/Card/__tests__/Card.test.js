/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Card from '../Card';

describe('Card', () => {
<<<<<<< HEAD
  test('should render with just required props passed', () => {
    createSnapshotTest(<Card>Test</Card>);
  });

  test('should render properly with some props assigned', () => {
=======
  it('should render with required props', () => {
    createSnapshotTest(<Card>Test</Card>);
  });

  it('should render with many props assigned', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    createSnapshotTest(
      <Card className="test-class" hasAnimationOnHover>
        Test
      </Card>,
    );
  });
});
