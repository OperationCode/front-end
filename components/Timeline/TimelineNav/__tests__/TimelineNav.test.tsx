import createShallowSnapshotTest from '@/test-utils/createShallowSnapshotTest';
import { TimelineNav } from '../TimelineNav';

describe('TimelineNav', () => {
  it('should render with no props passed passed', () => {
    createShallowSnapshotTest(<TimelineNav />);
  });
});
