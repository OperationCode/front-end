import React from 'react';
import { cleanup, render } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Pagination from '../Pagination';

describe('Pagination', () => {
  afterEach(cleanup);

  it('should render with required props', () => {
    createSnapshotTest(<Pagination currentPage={3} totalPages={5} maxElements={11} />);
  });

  it('should not have seperatorStart if currentPage - 1 is less than (maxElements + 1) / 2', () => {
    const { queryByTestId } = render(
      <Pagination currentPage={6} totalPages={11} maxElements={11} />,
    );

    expect(queryByTestId('Pagination Item - seperatorStart')).not.toBeInTheDocument();
  });

  // eslint-disable-next-line max-len
  it('should not have seperatorEnd if totalPages - currentPage is less than (maxElements + 1) / 2', () => {
    const { queryByTestId } = render(
      <Pagination currentPage={6} totalPages={11} maxElements={11} />,
    );

    expect(queryByTestId('Pagination Item - seperatorEnd')).not.toBeInTheDocument();
  });

  it('should have seperatorStart if currentPage - 1 is greater than (maxElements - 1) / 2', () => {
    const { queryByTestId } = render(
      <Pagination currentPage={7} totalPages={11} maxElements={11} />,
    );

    expect(queryByTestId('Pagination Item - seperatorStart')).toBeInTheDocument();
  });

  // eslint-disable-next-line max-len
  it('should have seperatorEnd if totalPages - currentPage is greater than (maxElements - 1) / 2', () => {
    const { queryByTestId } = render(
      <Pagination currentPage={5} totalPages={11} maxElements={11} />,
    );

    expect(queryByTestId('Pagination Item - seperatorEnd')).toBeInTheDocument();
  });
});
