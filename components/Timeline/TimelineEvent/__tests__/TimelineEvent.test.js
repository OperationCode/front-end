import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import TimelineEvent from '../TimelineEvent';

describe('TimelineEvent', () => {
<<<<<<< HEAD
  test('should render properly with all required props', () => {
=======
  it('should render with required props', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    createSnapshotTest(<TimelineEvent title="test title" content="here is some test content" />);
  });
});
