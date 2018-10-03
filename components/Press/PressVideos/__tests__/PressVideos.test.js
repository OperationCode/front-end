import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import PressVideos from '../PressVideos';

describe('PressVideos', () => {
  test('it should render properly no props', () => createShallowSnapshotTest(<PressVideos />));
});
