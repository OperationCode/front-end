/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import ErrorDisplay from '../ErrorDisplay';

describe('ErrorDisplay', () => {
<<<<<<< HEAD
  test('should render with just required props', () => {
=======
  it('should render with just required props', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    createSnapshotTest(<ErrorDisplay statusCode={404}>Err!</ErrorDisplay>);
  });
});
