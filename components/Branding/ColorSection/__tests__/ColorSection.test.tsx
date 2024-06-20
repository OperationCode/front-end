import { ColorSection } from '../ColorSection';
import createShallowSnapshotTest from '@/test-utils/createShallowSnapshotTest';

describe('ColorSection', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(<ColorSection />);
  });
});
