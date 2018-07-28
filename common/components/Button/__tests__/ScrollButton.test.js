/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import ScrollButton from '../ScrollButton';

describe('ScrollButton', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(<ScrollButton>Test</ScrollButton>);
  });

  test('should render properly with some props assigned', () => {
    createSnapshotTest(
      <ScrollButton
        theme="secondary"
        data-custom-attr="custom stuff here"
        disabled
        fullWidth
        type="submit"
      >
        Test
      </ScrollButton>
    );
  });
});
