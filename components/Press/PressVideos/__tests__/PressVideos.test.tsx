import createShallowSnapshotTest from '@/test-utils/createShallowSnapshotTest';

import { PressVideos } from '../PressVideos';

describe('PressVideos', () => {
  it('should render with no props passed', () => createShallowSnapshotTest(<PressVideos />));
});
