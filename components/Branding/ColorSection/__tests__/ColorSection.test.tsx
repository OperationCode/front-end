import createSnapshotTest from 'test-utils/createSnapshotTest';

import ColorSection from '../ColorSection';

describe('ColorSection', () => {
  it('should render with required props', () => {
    createSnapshotTest(<ColorSection />);
  });
});
