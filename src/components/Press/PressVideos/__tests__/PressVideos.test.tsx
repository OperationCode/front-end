import createSnapshotTest from '@/test-utils/createSnapshotTest';

import PressVideos from '../PressVideos';

describe('PressVideos', () => {
  it('should render with no props passed', () => createSnapshotTest(<PressVideos />));
});
