/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import FormInput from '../FormInput';

describe('FormInput', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(<FormInput id="test"/>);
  });
});
