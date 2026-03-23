import createSnapshotTest from '@/test-utils/createSnapshotTest';

import Timeline from '../Timeline';

describe('Timeline', () => {
  it('should render with no props passed passed', () => {
    createSnapshotTest(<Timeline />);
  });
});
