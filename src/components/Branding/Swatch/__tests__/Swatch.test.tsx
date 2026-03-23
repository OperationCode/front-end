import createSnapshotTest from '@/test-utils/createSnapshotTest';

import Swatch from '../Swatch';

describe('Swatch', () => {
  it('should render with required props', () => {
    createSnapshotTest(<Swatch colorName="Blue" hexCode="#0000FF" />);
  });
});
