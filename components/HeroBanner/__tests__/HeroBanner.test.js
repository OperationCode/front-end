import createSnapshotTest from 'test-utils/createSnapshotTest';

import { s3 } from 'common/constants/urls';
import HeroBanner from '../HeroBanner';

describe('HeroBanner', () => {
  it('should render with required props', () => {
    createSnapshotTest(<HeroBanner title="Test" />);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <HeroBanner
        title="Test"
        backgroundImageSource={`${s3}heroBanner/stock_family-2.jpg`}
        className="test"
        isFullViewportHeight
      >
        Testing 123
      </HeroBanner>,
    );
  });
});
