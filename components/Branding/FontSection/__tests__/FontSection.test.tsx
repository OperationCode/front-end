import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import FontSection from '../FontSection';

describe('FontSection', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(<FontSection />);
  });
});
