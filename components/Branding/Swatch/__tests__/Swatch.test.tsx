import createShallowSnapshotTest from '@/test-utils/createShallowSnapshotTest';

import { Swatch } from '../Swatch';

describe('Swatch', () => {
  it('should render with required props', () => {
    createShallowSnapshotTest(<Swatch colorName="Blue" hexCode="#0000FF" />);
  });
});
