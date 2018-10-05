import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import PressPhotos from '../PressPhotos';

describe('PressPhotos', () => {
  it('it should render properly no props', () => createShallowSnapshotTest(<PressPhotos />));
});
