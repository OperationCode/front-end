import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import Footer from '../Footer';

describe('Footer', () => {
  it('it should render properly no props', () => createShallowSnapshotTest(<Footer />));
});
