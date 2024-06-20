import { PressPhotos } from '../PressPhotos';
import createShallowSnapshotTest from '@/test-utils/createShallowSnapshotTest';

describe('PressPhotos', () => {
  it('should render with no props passed', () => createShallowSnapshotTest(<PressPhotos />));
});
