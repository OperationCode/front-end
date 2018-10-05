import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import CivicXBadge from '../CivicXBadge';

describe('CivicXBadge', () => {
  it('it should render properly no props', () => createShallowSnapshotTest(<CivicXBadge />));
});
