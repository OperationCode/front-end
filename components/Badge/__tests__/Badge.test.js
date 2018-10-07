/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Badge from '../Badge';

describe('Badge', () => {
  it('should render with just required props passed', () => {
    createSnapshotTest(<Badge>Test</Badge>);
  });

  it('should render properly with all props assigned', () => {
    createSnapshotTest(<Badge className="test-class">Test</Badge>);
  });
});
