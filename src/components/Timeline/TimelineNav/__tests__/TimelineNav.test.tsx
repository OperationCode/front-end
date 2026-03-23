import createSnapshotTest from '@/test-utils/createSnapshotTest';
import TimelineNav from '../TimelineNav';

describe('TimelineNav', () => {
  it('should render with no props passed passed', () => {
    createSnapshotTest(<TimelineNav />);
  });
});
