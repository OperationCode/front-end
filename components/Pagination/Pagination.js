import React from 'react';
import { number } from 'prop-types';
import LeftAngleIcon from 'static/images/icons/FontAwesome/angle-left-solid.svg';
import RightAngleIcon from 'static/images/icons/FontAwesome/angle-right-solid.svg';
import PaginationItem from './PaginationItem/PaginationItem';
import styles from './Pagination.module.css';

Pagination.propTypes = {
  currentPage: number.isRequired,
  totalPages: number.isRequired,
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
const PaginationItems = ({ currentPage, totalPages }) => {
  const {
    paginationStart,
    paginationLength,
    shouldTruncateStart,
    shouldTruncateEnd,
  } = getPagination(currentPage, totalPages);

  const PaginationItemArray = [...Array(paginationLength)].map((_, index) => {
    const page = index + paginationStart;
    const isCurrent = page === currentPage;

    return <PaginationItem key={page} value={`${page}`} isCurrent={isCurrent} testId={`${page}`} />;
  });

  return (
    <>
      {shouldTruncateStart && (
        <>
          <PaginationItem key="1" value="1" testId="1" />
          <PaginationItem
            key="seperatorStart"
            value="&hellip;"
            isClickable={false}
            testId="seperatorStart"
          />
        </>
      )}
      {PaginationItemArray}
      {shouldTruncateEnd && (
        <>
          <PaginationItem
            key="seperatorEnd"
            value="&hellip;"
            isClickable={false}
            testId="seperatorEnd"
          />
          <PaginationItem key={totalPages} value={`${totalPages}`} testId={`${totalPages}`} />
        </>
      )}
    </>
  );
};

function Pagination({ currentPage, totalPages }) {
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
        <PaginationItem key="leftAngle" value={<LeftAngleIcon />} testId="leftAngle" />
        <PaginationItems currentPage={currentPage} totalPages={totalPages} />
        <PaginationItem key="rightAngle" value={<RightAngleIcon />} testId="rightAngle" />
      </ol>
    </nav>
  );
}

export default Pagination;
