import { render } from '@testing-library/react';
import createSnapshotTest from '@/test-utils/createSnapshotTest';
import { JoinSection } from '../JoinSection';

describe('JoinSection', () => {
  it('should render', () => {
    const { queryByTestId } = render(<JoinSection />);
    expect(queryByTestId('Join Section')).not.toBeNull();

    createSnapshotTest(<JoinSection />);
  });
});
