import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import JoinSection from '../JoinSection';

describe('JoinSection', () => {
  it('should render with no props passed passed', () => createShallowSnapshotTest(<JoinSection />));
});
