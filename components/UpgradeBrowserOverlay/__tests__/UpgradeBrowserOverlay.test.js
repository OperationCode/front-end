import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import UpgradeBrowserOverlay from '../UpgradeBrowserOverlay';

describe('UpgradeBrowserOverlay', () => {
  beforeEach(() => {
    jest.mock('react-modal');
  });

  afterEach(() => {
    jest.unmock('react-modal');
  });

  it('should render with no props passed', () => {
    createShallowSnapshotTest(<UpgradeBrowserOverlay />);
  });
});
