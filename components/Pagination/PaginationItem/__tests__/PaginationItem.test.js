import React from 'react';
import { cleanup, render } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import PaginationItem from '../PaginationItem';

describe('PaginationItem', () => {
  afterEach(cleanup);

  it('should render with required props', () => {
    createSnapshotTest(<PaginationItem value="1" />);
  });

  it('should have class current when isCurrent prop is true', () => {
    const { queryByTestId } = render(<PaginationItem value="1" isCurrent />);

    expect(queryByTestId('Pagination Item - 1')).toHaveClass('current');
  });

  it('should have class notClickable when isClickable prop is false', () => {
    const { queryByTestId } = render(<PaginationItem value="1" isClickable={false} />);

    expect(queryByTestId('Pagination Item - 1')).toHaveClass('notClickable');
  });
});
