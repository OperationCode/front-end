/* eslint-env jest */
import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import UpgradeBrowserOverlay from '../UpgradeBrowserOverlay';

describe('UpgradeBrowserOverlay', () => {
  test('should render with no props', () => {
    createShallowSnapshotTest(<UpgradeBrowserOverlay />);
  });
});
