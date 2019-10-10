import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import ProgressIndicator from '../ProgressIndicator';

describe('ProgressIndicator', () => {
  it('should render with required props', () => {
    createSnapshotTest(<ProgressIndicator>Test</ProgressIndicator>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(<ProgressIndicator className="test-class">Test</ProgressIndicator>);
  });
});
