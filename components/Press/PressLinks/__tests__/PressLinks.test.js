import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import PressLinks from '../PressLinks';

describe('PressLinks', () => {
  test('it should render properly no props', () => createShallowSnapshotTest(<PressLinks />));
});
