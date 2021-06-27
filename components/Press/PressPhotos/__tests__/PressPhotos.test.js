import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import PressPhotos from '../PressPhotos';

describe('PressPhotos', () => {
  it('should render with no props passed', () => createShallowSnapshotTest(<PressPhotos />));
});
