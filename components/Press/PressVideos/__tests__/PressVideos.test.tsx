import { PressVideos } from '../PressVideos';
import createShallowSnapshotTest from '@/test-utils/createShallowSnapshotTest';

describe('PressVideos', () => {
  it('should render with no props passed', () => createShallowSnapshotTest(<PressVideos />));
});
