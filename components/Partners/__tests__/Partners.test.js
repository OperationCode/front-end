/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Partners from '../Partners';

describe('Partners', () => {
  it('should render with required props', () => {
    createSnapshotTest(<Partners>Test</Partners>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(<Partners className="test-class">Test</Partners>);
  });
});
