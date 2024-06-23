import { Swatch } from '../Swatch';
import createShallowSnapshotTest from '@/test-utils/createShallowSnapshotTest';

describe('Swatch', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(<Swatch colorName="Blue" hexCode="#0000FF" />);
  });
});
