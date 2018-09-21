/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import FormTextArea from '../FormTextArea';

describe('FormTextArea', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(<FormTextArea />);
  });
});
