import createSnapshotTest from '@/test-utils/createSnapshotTest';

import LogoSection from '../LogoSection';

describe('LogoSection', () => {
  it('should render with required props', () => {
    createSnapshotTest(<LogoSection />);
  });
});
