import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import Footer from '../Footer';

describe('Footer', () => {
  it('should render with no props passed', () => createShallowSnapshotTest(<Footer />));
});
