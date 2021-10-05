import createSnapshotTest from 'test-utils/createSnapshotTest';

import { s3 } from 'common/constants/urls';
import Container from '../Container';

describe('Container', () => {
  const testImageUrl = `${s3}heroBanner/stock_family-2.jpg`;

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Container
        backgroundImageSource={testImageUrl}
        className="test-class"
        isFullViewportHeight
        theme="white"
      >
        Test Children
      </Container>,
    );
  });
});
