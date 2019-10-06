import React from 'react';
import { cleanup, render } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Pagination from '../Pagination';

describe('Pagination', () => {
  afterEach(cleanup);

  it('should render with required props', () => {
    createSnapshotTest(<Pagination currentPage={3} totalPages={5} />);
  });

  it('should not have seperatorStart if currentPage - 1 is less than 6', () => {
    const { queryByTestId } = render(<Pagination currentPage={6} totalPages={11} />);

    expect(queryByTestId('Pagination Item - seperatorStart')).not.toBeInTheDocument();
  });

  it('should not have seperatorEnd if totalPages - currentPage is less than 6', () => {
    const { queryByTestId } = render(<Pagination currentPage={6} totalPages={11} />);

    expect(queryByTestId('Pagination Item - seperatorEnd')).not.toBeInTheDocument();
  });

  it('should have seperatorStart if currentPage - 1 is greater than 5', () => {
    const { queryByTestId } = render(<Pagination currentPage={7} totalPages={11} />);

    expect(queryByTestId('Pagination Item - seperatorStart')).toBeInTheDocument();
  });

  it('should have seperatorEnd if totalPages - currentPage is greater than 5', () => {
    const { queryByTestId } = render(<Pagination currentPage={5} totalPages={11} />);

    expect(queryByTestId('Pagination Item - seperatorEnd')).toBeInTheDocument();
  });
});
