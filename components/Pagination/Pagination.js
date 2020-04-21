import React from 'react';
import { number, string, object } from 'prop-types';
import LeftAngleIcon from 'static/images/icons/FontAwesome/angle-left-solid.svg';
import RightAngleIcon from 'static/images/icons/FontAwesome/angle-right-solid.svg';
import PaginationItem from './PaginationItem/PaginationItem';
import styles from './Pagination.module.css';

Pagination.propTypes = {
  currentPage: number.isRequired,
  pathname: string.isRequired,
  totalPages: number.isRequired,
  query: object,
};

Pagination.defaultProps = {
  query: { page: 1 },
};
export const developmentErrors = {
  currentPageValue: value => `The value passed for currentPage is ${value}.`,
  currentPageTooSmall: '"currentPage" cannot be less than 1.',
  currentPageTooBig: '"currentPage" cannot be larger than "totalPages".',
};

const getPagination = (currentPage, totalPages) => {
  // maximum length of the Pagination Bar, should be an odd integer, default is 11
  const MAX_VISIBLE_ELEMENTS = 11;
  const ELEMENTS_ON_ONE_SIDE = (MAX_VISIBLE_ELEMENTS - 1) / 2; // 5

  const isTruncatingRequired = totalPages >= MAX_VISIBLE_ELEMENTS;

  const isLeftSideLengthy = currentPage - 1 > ELEMENTS_ON_ONE_SIDE;
  const isRightSideLengthy = totalPages - currentPage > ELEMENTS_ON_ONE_SIDE;

  const shouldTruncateStart = isTruncatingRequired && isLeftSideLengthy;
  const shouldTruncateEnd = isTruncatingRequired && isRightSideLengthy;

  const truncateStartOnly = shouldTruncateStart && !shouldTruncateEnd;
  const truncateEndOnly = !shouldTruncateStart && shouldTruncateEnd;

  let paginationStart;
  let paginationEnd;

  if (truncateStartOnly) {
    paginationStart = totalPages - MAX_VISIBLE_ELEMENTS + 3;
    paginationEnd = totalPages;
  } else if (truncateEndOnly) {
    paginationStart = 1;
    paginationEnd = MAX_VISIBLE_ELEMENTS - 2;
  } else {
    paginationStart = shouldTruncateStart ? currentPage - (ELEMENTS_ON_ONE_SIDE - 2) : 1;
    paginationEnd = shouldTruncateEnd ? currentPage + (ELEMENTS_ON_ONE_SIDE - 2) : totalPages;
  }

  const paginationLength = paginationEnd - paginationStart + 1;

  return {
    paginationStart,
    paginationLength,
    shouldTruncateStart,
    shouldTruncateEnd,
  };
};

// eslint-disable-next-line react/prop-types
const PaginationItems = ({ currentPage, pathname, totalPages }) => {
  const {
    paginationStart,
    paginationLength,
    shouldTruncateStart,
    shouldTruncateEnd,
  } = getPagination(currentPage, totalPages);

  const PaginationItemArray = [...Array(paginationLength)].map((_, index) => {
    const page = index + paginationStart;
    const isCurrent = page === currentPage;

    return (
      <PaginationItem
        key={page}
        value={page}
        isCurrent={isCurrent}
        testId={`${page}`}
        pathname={pathname}
      >
        {page}
      </PaginationItem>
    );
  });

  return (
    <>
      {shouldTruncateStart && (
        <>
          <PaginationItem key="1" value={1} testId="1" pathname={pathname}>
            1
          </PaginationItem>

          <PaginationItem key="separatorStart" testId="separatorStart" pathname={pathname}>
            &hellip;
          </PaginationItem>
        </>
      )}

      {PaginationItemArray}

      {shouldTruncateEnd && (
        <>
          <PaginationItem key="separatorEnd" testId="separatorEnd" pathname={pathname}>
            &hellip;
          </PaginationItem>

          <PaginationItem
            key={totalPages}
            value={totalPages}
            testId={`${totalPages}`}
            pathname={pathname}
          >
            {totalPages}
          </PaginationItem>
        </>
      )}
    </>
  );
};

function Pagination({ currentPage, pathname, totalPages, query }) {
  if (process.env.NODE_ENV !== 'production') {
    const isCurrentPageTooSmall = currentPage < 1;

    if (isCurrentPageTooSmall) {
      const errorMessage = `${developmentErrors.currentPageValue(currentPage)} ${
        developmentErrors.currentPageTooSmall
      }`;
      throw new Error(errorMessage);
    }

    const isCurrentPageTooBig = currentPage > totalPages;
    if (isCurrentPageTooBig) {
      const errorMessage = `${developmentErrors.currentPageValue(currentPage)} ${
        developmentErrors.currentPageTooBig
      }`;

      throw new Error(errorMessage);
    }
  }

  return (
    <nav className={styles.Pagination} data-testid="Pagination">
      <ol>
        {currentPage > 1 && (
          <PaginationItem
            query={query}
            value={currentPage - 1}
            pathname={pathname}
            testId="leftAngle"
          >
            <LeftAngleIcon className={styles.icon} />
          </PaginationItem>
        )}

        <PaginationItems
          query={query}
          currentPage={currentPage}
          totalPages={totalPages}
          pathname={pathname}
        />

        {currentPage < totalPages && (
          <PaginationItem
            query={query}
            value={currentPage + 1}
            pathname={pathname}
            testId="rightAngle"
          >
            <RightAngleIcon className={styles.icon} />
          </PaginationItem>
        )}
      </ol>
    </nav>
  );
}

export default Pagination;
