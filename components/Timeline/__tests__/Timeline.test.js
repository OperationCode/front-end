import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import Timeline from '../Timeline';

describe('Timeline', () => {
  it('it should render properly with no props', () => {
    createShallowSnapshotTest(<Timeline />);
  });
});
