import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import HashLink from '../HashLink';

describe('HashLink', () => {
  it('should render with required props', () => {
    createSnapshotTest(<HashLink>Test</HashLink>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(<HashLink className="test-class">Test</HashLink>);
  });
});
