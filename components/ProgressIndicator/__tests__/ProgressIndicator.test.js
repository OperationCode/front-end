import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import ProgressIndicator from '../ProgressIndicator';

describe('ProgressIndicator', () => {
  it('should render with required props', () => {
    createSnapshotTest(<ProgressIndicator stepNumber={1} totalSteps={3} />);
  });
});
