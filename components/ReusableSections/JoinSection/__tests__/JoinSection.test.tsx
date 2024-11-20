import { render } from '@testing-library/react';
import { JoinSection } from '../JoinSection';
import createSnapshotTest from '@/test-utils/createSnapshotTest';

describe('JoinSection', () => {
  it('should render', () => {
    const { queryByTestId } = render(<JoinSection />);
    expect(queryByTestId('Join Section')).not.toBeNull();

    createSnapshotTest(<JoinSection />);
  });
});
