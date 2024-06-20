import createShallowSnapshotTest from '@/test-utils/createShallowSnapshotTest';

import { Timeline } from '../Timeline';

describe('Timeline', () => {
  it('should render with no props passed passed', () => {
    createShallowSnapshotTest(<Timeline />);
  });
});
