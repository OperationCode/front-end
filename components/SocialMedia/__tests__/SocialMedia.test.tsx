import { SocialMedia } from '../SocialMedia';
import createShallowSnapshotTest from '@/test-utils/createShallowSnapshotTest';

describe('SocialMedia', () => {
  it('should render with no props passed passed', () => {
    createShallowSnapshotTest(<SocialMedia />);
  });
});
