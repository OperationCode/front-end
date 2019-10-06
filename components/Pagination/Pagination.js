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
};

Pagination.defaultProps = {
  className: undefined,
};

// eslint-disable-next-line react/prop-types
const PaginationItems = ({ currentPage, totalPages }) => {
  const shouldTruncateStart = currentPage - 1 > 5;
  const shouldTruncateEnd = totalPages - currentPage > 5;

  const paginationStart = shouldTruncateStart ? currentPage - 4 : 1;
  const paginationEnd = shouldTruncateEnd ? currentPage + 4 : totalPages;

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

function Pagination({ className, currentPage, totalPages }) {
  return (
    <nav className={classNames(styles.Pagination, className)} data-testid="Pagination">
      <ol>
        <PaginationItem key="leftAngle" value={<LeftAngleIcon />} testId="leftAngle" />
        <PaginationItems currentPage={currentPage} totalPages={totalPages} />
        <PaginationItem key="rightAngle" value={<RightAngleIcon />} testId="rightAngle" />
      </ol>
    </nav>
  );
}

export default Pagination;
