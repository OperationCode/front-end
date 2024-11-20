import { Timeline } from '../Timeline';
import createShallowSnapshotTest from '@/test-utils/createShallowSnapshotTest';

describe('Timeline', () => {
  it('should render with no props passed passed', () => {
    createShallowSnapshotTest(<Timeline />);
  });
});
