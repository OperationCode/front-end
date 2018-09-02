/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import mockRouter from 'test-utils/mocks/router';

import { ScrollButton } from '../ScrollButton';

describe('ScrollButton', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(<ScrollButton router={mockRouter}>Test</ScrollButton>);
  });

  test('should render properly with some props assigned', () => {
    createSnapshotTest(
      <ScrollButton
        data-custom-attr="custom stuff here"
        disabled
        fullWidth
        router={mockRouter}
        theme="secondary"
        type="submit"
      >
        Test
      </ScrollButton>,
    );
  });
});
