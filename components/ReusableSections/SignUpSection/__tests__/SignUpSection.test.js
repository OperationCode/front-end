import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import SignUpSection from '../SignUpSection';

describe('SignUpSection', () => {
  it('should render with no props passed passed', () => {
    createShallowSnapshotTest(<SignUpSection />);
  });
});
