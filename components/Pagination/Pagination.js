import React from 'react';
import { number, string } from 'prop-types';
import classNames from 'classnames';
import LeftAngleIcon from 'static/images/icons/FontAwesome/angle-left-solid.svg';
import RightAngleIcon from 'static/images/icons/FontAwesome/angle-right-solid.svg';
import PaginationItem from './PaginationItem/PaginationItem';
import styles from './Pagination.css';

Pagination.propTypes = {
  className: string,
  currentPage: number.isRequired,
  totalPages: number.isRequired,
  maxElements: number,
};

Pagination.defaultProps = {
  className: undefined,
  maxElements: 11,
};

// eslint-disable-next-line react/prop-types
const PaginationItems = ({ currentPage, totalPages, maxLength }) => {
  // maxElements is maximum length of the Pagination Bar, should be an odd integer, delault is 11
  const maxElements = maxLength % 2 === 0 ? maxLength - 1 : maxLength;
  const elementsOnOneSide = (maxElements - 1) / 2;

  const shouldTruncateStart = currentPage - 1 > elementsOnOneSide && totalPages >= maxElements;
  const shouldTruncateEnd =
    totalPages - currentPage > elementsOnOneSide && totalPages >= maxElements;

  const truncateStartOnly = shouldTruncateStart && !shouldTruncateEnd;
  const truncateEndOnly = !shouldTruncateStart && shouldTruncateEnd;

  let paginationStart;
  let paginationEnd;

  if (truncateStartOnly) {
    paginationStart = totalPages - maxElements + 3;
    paginationEnd = totalPages;
  } else if (truncateEndOnly) {
    paginationStart = 1;
    paginationEnd = maxElements - 2;
  } else {
    paginationStart = shouldTruncateStart ? currentPage - (elementsOnOneSide - 2) : 1;
    paginationEnd = shouldTruncateEnd ? currentPage + (elementsOnOneSide - 2) : totalPages;
  }

  const paginationLength = paginationEnd - paginationStart + 1;

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

function Pagination({ className, currentPage, totalPages, maxElements }) {
  return (
    <nav className={classNames(styles.Pagination, className)} data-testid="Pagination">
      <ol>
        <PaginationItem key="leftAngle" value={<LeftAngleIcon />} testId="leftAngle" />
        <PaginationItems
          currentPage={currentPage}
          totalPages={totalPages}
          maxLength={maxElements}
        />
        <PaginationItem key="rightAngle" value={<RightAngleIcon />} testId="rightAngle" />
      </ol>
    </nav>
  );
}

export default Pagination;
