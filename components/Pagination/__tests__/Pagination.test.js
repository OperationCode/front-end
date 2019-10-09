import React from 'react';
import { cleanup, render } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Pagination from '../Pagination';

describe('Pagination', () => {
  afterEach(cleanup);

  it('should render with required props', () => {
    createSnapshotTest(<Pagination currentPage={3} totalPages={5} />);
  });

  it('should not have a seperator at start if not needed', () => {
    const { queryByTestId } = render(<Pagination currentPage={6} totalPages={11} />);

    expect(queryByTestId('Pagination Item - seperatorStart')).not.toBeInTheDocument();
  });

  it('should not have a seperator at end if not needed', () => {
    const { queryByTestId } = render(<Pagination currentPage={6} totalPages={11} />);

    expect(queryByTestId('Pagination Item - seperatorEnd')).not.toBeInTheDocument();
  });

  it('should have a seperator at start if needed', () => {
    const { queryByTestId } = render(<Pagination currentPage={7} totalPages={11} />);

    expect(queryByTestId('Pagination Item - seperatorStart')).toBeInTheDocument();
  });

  it('should have a seperator at end if needed', () => {
    const { queryByTestId } = render(<Pagination currentPage={5} totalPages={11} />);

    expect(queryByTestId('Pagination Item - seperatorEnd')).toBeInTheDocument();
  });

  it('should throw an error if given value of currentPage is less than 1', () => {
    const errorMessage =
      'The value passed for currentPage is 0. "currentPage" cannot be less than 1.';

    expect(() => Pagination({ currentPage: 0, totalPages: 5 })).toThrow(errorMessage);
  });

  it('should throw an error if given value of currentPage is greater than totalPages', () => {
    const errorMessage =
      'The value passed for currentPage is 6. "currentPage" cannot be larger than "totalPages".';

    expect(() => Pagination({ currentPage: 6, totalPages: 5 })).toThrow(errorMessage);
  });
});
