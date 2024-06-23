import { render } from '@testing-library/react';
import { ResourceSkeletonCard } from '../ResourceSkeletonCard';
import { SKELETON_CARD } from '@/common/constants/testIDs';

describe('ResourceSkeletonCard', () => {
  const numberOfSkeletons = 5;

  it('renders the correct amount of skeletons', () => {
    const component = render(<ResourceSkeletonCard numberOfSkeletons={numberOfSkeletons} />);
    const Skeletons = component.queryAllByTestId(SKELETON_CARD);
    expect(Skeletons).toHaveLength(numberOfSkeletons);
  });
});
