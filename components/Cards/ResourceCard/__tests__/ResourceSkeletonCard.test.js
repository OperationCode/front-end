import React from 'react';
import { render } from '@testing-library/react';
import { SKELETON_CARD } from 'common/constants/testIDs';
import ResourceSkeletonCard from '../ResourceSkeletonCard';

describe('ResourceSkeletonCard', () => {
  it('renders the correct amount of skeletons', () => {
    const component = render(<ResourceSkeletonCard numberOfSkeletons={5} />);
    const Skeletons = component.queryAllByTestId(SKELETON_CARD);
    expect(Skeletons).toHaveLength(5);
  });
});
