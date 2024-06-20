import { PressLinks } from '../PressLinks';
import createShallowSnapshotTest from '@/test-utils/createShallowSnapshotTest';

describe('PressLinks', () => {
  it('should render with no props passed', () => createShallowSnapshotTest(<PressLinks />));
});
