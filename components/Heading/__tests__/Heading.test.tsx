import { Heading } from '../Heading';
import createSnapshotTest from '@/test-utils/createSnapshotTest';

describe('Heading', () => {
  const requiredProps = {
    text: 'Test',
  };

  it('should render with required props', () => {
    createSnapshotTest(<Heading {...requiredProps} />);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Heading {...requiredProps} headingLevel={5} hasHashLink={false} hasTitleUnderline />,
    );
  });
});
