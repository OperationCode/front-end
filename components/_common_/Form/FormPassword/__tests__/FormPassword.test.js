/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import FormPassword from '../FormPassword';

describe('FormPassword', () => {
  it('should render with required props', () => {
    createSnapshotTest(<FormPassword id="test" />);
  });
});
