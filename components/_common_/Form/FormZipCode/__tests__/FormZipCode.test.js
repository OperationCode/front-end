/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import FormZipCode from '../FormZipCode';

describe('FormZipCode', () => {
  it('should render with required props', () => {
    createSnapshotTest(<FormZipCode />);
  });
});
