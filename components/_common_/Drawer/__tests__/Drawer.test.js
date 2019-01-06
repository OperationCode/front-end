/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Drawer from '../Drawer';

describe('Drawer', () => {
<<<<<<< HEAD
  test('should render with just required props passed', () => {
    createSnapshotTest(<Drawer>Test</Drawer>);
  });

  test('should render properly with some props assigned', () => {
=======
  it('should render with required props', () => {
    createSnapshotTest(<Drawer>Test</Drawer>);
  });

  it('should render with many props assigned', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    createSnapshotTest(
      <Drawer className="test-class" isVisible>
        Test
      </Drawer>,
    );
  });
});
