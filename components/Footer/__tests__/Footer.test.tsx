import createSnapshotTest from 'test-utils/createSnapshotTest';

import Footer from '../Footer';

describe('Footer', () => {
  it('should render with no props passed', () => {
    vi.useFakeTimers().setSystemTime(new Date('2023-03-03'));
    createSnapshotTest(<Footer />);
  });
});
