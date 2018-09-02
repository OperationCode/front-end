import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import TimelineEvent from '../TimelineEvent';

describe('TimelineEvent', () => {
  test('should render properly with all required props', () => {
    createShallowSnapshotTest(
      <TimelineEvent title="test title" content="here is some test content" />,
    );
  });
});
