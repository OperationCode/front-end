/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import FormZipCode from '../FormZipCode';

describe('FormZipCode', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(<FormZipCode />);
  });
});
