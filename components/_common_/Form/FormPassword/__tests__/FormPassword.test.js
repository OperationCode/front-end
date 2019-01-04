/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import FormPassword from '../FormPassword';

describe('FormPassword', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(<FormPassword id="test" />);
  });
});
