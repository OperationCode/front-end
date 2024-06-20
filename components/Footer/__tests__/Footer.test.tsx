import { Footer } from '../Footer';
import createShallowSnapshotTest from '@/test-utils/createShallowSnapshotTest';

describe('Footer', () => {
  it('should render with no props passed', () => {
    vi.useFakeTimers().setSystemTime(new Date('2023-03-03'));
    createShallowSnapshotTest(<Footer />);
  });
});
