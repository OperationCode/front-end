import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import ScreenReaderOnly from '../ScreenReaderOnly';

describe('ScreenReaderOnly', () => {
  it('should render with required props', () => {
    createSnapshotTest(<ScreenReaderOnly>Test</ScreenReaderOnly>);
  });
});
