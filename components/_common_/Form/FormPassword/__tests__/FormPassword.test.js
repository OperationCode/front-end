/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import FormPassword from '../FormPassword';

describe('FormPassword', () => {
<<<<<<< HEAD
  test('should render with just required props passed', () => {
=======
  it('should render with required props', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    createSnapshotTest(<FormPassword id="test" />);
  });
});
