import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import TimelineEvent from '../TimelineEvent';

describe('TimelineEvent', () => {
  it('should render properly with all required props', () => {
    createSnapshotTest(<TimelineEvent title="test title" content="here is some test content" />);
  });
});
