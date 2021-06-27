import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import PressLinks from '../PressLinks';

describe('PressLinks', () => {
  it('should render with no props passed', () => createShallowSnapshotTest(<PressLinks />));
});
