import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import Footer from '../Footer';

describe('Footer', () => {
  it('should render with no props passed', () => {
    jest.useFakeTimers().setSystemTime(new Date('2023-03-03'));
    createShallowSnapshotTest(<Footer />);
  });
});
