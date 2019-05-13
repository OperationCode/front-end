/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Pagination from '../Pagination';

describe('Pagination', () => {
  it('should render with required props', () => {
    createSnapshotTest(<Pagination>Test</Pagination>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(<Pagination className="test-class">Test</Pagination>);
  });
});
