import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import Nav from '../Nav';

describe('Nav', () => {
  it('should render with no props passed', () => createShallowSnapshotTest(<Nav />));
});
