/* eslint-env jest */
import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import UpgradeBrowserOverlay from '../UpgradeBrowserOverlay';

describe('UpgradeBrowserOverlay', () => {
<<<<<<< HEAD
  test('should render with no props', () => {
=======
  it('should render with no props passed', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    createShallowSnapshotTest(<UpgradeBrowserOverlay />);
  });
});
