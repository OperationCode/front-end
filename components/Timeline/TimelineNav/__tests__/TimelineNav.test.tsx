import { TimelineNav } from '../TimelineNav';
import createShallowSnapshotTest from '@/test-utils/createShallowSnapshotTest';

describe('TimelineNav', () => {
  it('should render with no props passed passed', () => {
    createShallowSnapshotTest(<TimelineNav />);
  });
});
