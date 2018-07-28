/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Button from '../Button';

describe('Button', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(<Button>Test</Button>);
  });

  test('should render properly with some props assigned', () => {
    createSnapshotTest(
      <Button
        theme="secondary"
        data-custom-attr="custom stuff here"
        disabled
        fullWidth
        type="submit"
      >
        Test
      </Button>
    );
  });
});
