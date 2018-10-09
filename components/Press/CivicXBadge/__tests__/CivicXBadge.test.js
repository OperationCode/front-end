import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import CivicXBadge from '../CivicXBadge';

describe('CivicXBadge', () => {
  it('should render with no props passed', () => createShallowSnapshotTest(<CivicXBadge />));
});
