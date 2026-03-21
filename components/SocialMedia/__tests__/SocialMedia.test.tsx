import createSnapshotTest from 'test-utils/createSnapshotTest';

import SocialMedia from '../SocialMedia';

describe('SocialMedia', () => {
  it('should render with no props passed passed', () => {
    createSnapshotTest(<SocialMedia />);
  });
});
