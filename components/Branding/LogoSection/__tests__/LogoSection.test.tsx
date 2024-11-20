import { LogoSection } from '../LogoSection';
import createShallowSnapshotTest from '@/test-utils/createShallowSnapshotTest';

describe('LogoSection', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(<LogoSection />);
  });
});
