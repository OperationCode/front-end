import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import { JoinSection } from '../JoinSection';

describe('JoinSection', () => {
  it('should render with required props', () => {
    createSnapshotTest(<JoinSection isLoggedIn={false} />);
  });

  it('should render correctly when logged in', () => {
    createSnapshotTest(<JoinSection isLoggedIn />);
  });
});
