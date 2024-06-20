import createShallowSnapshotTest from '@/test-utils/createShallowSnapshotTest';

import { SocialMedia } from '../SocialMedia';

describe('SocialMedia', () => {
  it('should render with no props passed passed', () => {
    createShallowSnapshotTest(<SocialMedia />);
  });
});
