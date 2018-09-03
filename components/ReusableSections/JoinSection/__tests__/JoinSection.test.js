import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import JoinSection from '../JoinSection';

describe('JoinSection', () => {
  test('it should render properly with no props', () => createShallowSnapshotTest(<JoinSection />));
});
