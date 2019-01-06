<<<<<<< HEAD
import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import JoinSection from '../JoinSection';

describe('JoinSection', () => {
  test('it should render properly with no props', () => createShallowSnapshotTest(<JoinSection />));
=======
/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import JoinSection from '../JoinSection';

describe('JoinSection', () => {
  it('should render with required props', () => {
    createSnapshotTest(<JoinSection />);
  });
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
});
