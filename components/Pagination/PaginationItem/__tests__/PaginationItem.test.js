import { cleanup, render } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import PaginationItem from '../PaginationItem';

describe('PaginationItem', () => {
  const requiredProps = {
    children: '1',
    pathname: '/resources/[page]',
    query: {},
    testId: 'test',
  };

  afterEach(cleanup);

  it('renders with required props', () => {
    createSnapshotTest(<PaginationItem {...requiredProps} />);
  });

  it('renders correctly as a current item with value', () => {
    createSnapshotTest(<PaginationItem {...requiredProps} value={1} isCurrent />);
  });

  it('should be marked as current if current', () => {
    const { queryByTestId } = render(<PaginationItem {...requiredProps} value={1} isCurrent />);

    expect(queryByTestId(requiredProps.testId)).toHaveClass('current');
  });

  it('is not clickable when value is undefined', () => {
    const { queryByTestId } = render(<PaginationItem {...requiredProps} />);
    expect(queryByTestId(requiredProps.testId)).toHaveClass('notClickable');
  });
});
