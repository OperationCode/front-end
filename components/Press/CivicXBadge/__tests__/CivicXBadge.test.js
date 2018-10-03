import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import CivicXBadge from '../CivicXBadge';

describe('CivicXBadge', () => {
  test('it should render properly no props', () => createShallowSnapshotTest(<CivicXBadge />));
});
