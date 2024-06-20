import { FontSection } from '../FontSection';
import createShallowSnapshotTest from '@/test-utils/createShallowSnapshotTest';

describe('FontSection', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(<FontSection />);
  });
});
