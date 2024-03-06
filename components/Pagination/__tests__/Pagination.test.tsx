import { cleanup, render } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Pagination, { developmentErrors } from '../Pagination';

describe('Pagination', () => {
  const requiredProps = {
    currentPage: 1,
    totalPages: 20,
    pathname: '/resources/[page]',
    query: {},
  };

  afterEach(cleanup);

  it('should render with required props', () => {
    createSnapshotTest(<Pagination {...requiredProps} />);
  });

  it('should not have a separator at start if not needed', () => {
    const { queryByTestId } = render(
      <Pagination {...requiredProps} currentPage={6} totalPages={11} />,
    );

    expect(queryByTestId('Pagination Item - separatorStart')).not.toBeInTheDocument();
  });

  it('should not have a separator at end if not needed', () => {
    const { queryByTestId } = render(
      <Pagination {...requiredProps} currentPage={6} totalPages={11} />,
    );

    expect(queryByTestId('Pagination Item - separatorEnd')).not.toBeInTheDocument();
  });

  it('should have a separator at start if needed', () => {
    const { queryByTestId } = render(
      <Pagination {...requiredProps} currentPage={7} totalPages={11} />,
    );

    expect(queryByTestId('separatorStart')).toBeInTheDocument();
  });

  it('should have a separator at end if needed', () => {
    const { queryByTestId } = render(
      <Pagination {...requiredProps} currentPage={5} totalPages={11} />,
    );

    expect(queryByTestId('separatorEnd')).toBeInTheDocument();
  });

  it('should throw an error if given value of currentPage is less than 1', () => {
    /* eslint-disable function-paren-newline */
    expect(() =>
      Pagination({ currentPage: 0, totalPages: 5, pathname: requiredProps.pathname, query: {} }),
    ).toThrow(developmentErrors.currentPageTooSmall);
    /* eslint-enable function-paren-newline */
  });

  it('should throw an error if given value of currentPage is greater than totalPages', () => {
    /* eslint-disable function-paren-newline */
    expect(() =>
      Pagination({ currentPage: 6, totalPages: 5, pathname: requiredProps.pathname, query: {} }),
    ).toThrow(developmentErrors.currentPageTooBig);
    /* eslint-enable function-paren-newline */
  });

  it('should throw an error if not using `[page]` in route path param', () => {
    /* eslint-disable function-paren-newline */
    expect(() => Pagination({ ...requiredProps, pathname: '/resources' })).toThrow(
      developmentErrors.mustUsePageAsPathParam,
    );
    /* eslint-enable function-paren-newline */
  });
});
