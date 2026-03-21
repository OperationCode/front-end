import createSnapshotTest from 'test-utils/createSnapshotTest';

import PressPhotos from '../PressPhotos';

describe('PressPhotos', () => {
  it('should render with no props passed', () => createSnapshotTest(<PressPhotos />));
});
