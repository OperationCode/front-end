import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import Timeline from '../Timeline';

describe('Timeline', () => {
  test('it should render properly with no props', () => {
    createShallowSnapshotTest(<Timeline />);
  });
});
