import createSnapshotTest from 'test-utils/createSnapshotTest';

import FontSection from '../FontSection';

describe('FontSection', () => {
  it('should render with required props', () => {
    createSnapshotTest(<FontSection />);
  });
});
