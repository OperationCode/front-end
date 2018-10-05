import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import SignUpSection from '../SignUpSection';

describe('SignUpSection', () => {
  it('it should render properly with no props', () => {
    createShallowSnapshotTest(<SignUpSection />);
  });
});
