/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Drawer from '../Drawer';

describe('Drawer', () => {
  it('should render with just required props passed', () => {
    createSnapshotTest(<Drawer>Test</Drawer>);
  });

  it('should render properly with some props assigned', () => {
    createSnapshotTest(
      <Drawer className="test-class" isVisible>
        Test
      </Drawer>,
    );
  });
});
