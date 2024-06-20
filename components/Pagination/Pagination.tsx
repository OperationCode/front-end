import LeftAngleIcon from 'static/images/icons/FontAwesome/angle-left-solid.svg';
import RightAngleIcon from 'static/images/icons/FontAwesome/angle-right-solid.svg';
import { PREV_PAGE_BUTTON, NEXT_PAGE_BUTTON } from '../../common/constants/testIDs';
import { PaginationItem } from './PaginationItem/PaginationItem';

export interface PaginationPropsType {
  /**
   * Sets the current page number to indicate which PaginationItem is styled differently.
   */
  currentPage: number;
  /**
   * Sets the current page number to indicate which PaginationItem is styled differently.
   */
  pathname: string;
  /**
   * Sets the URL path.
   */
  query: Record<string, any>;
  /**
   * Sets the total number of pages.
   */
  totalPages: number;
}

export const developmentErrors = {
  currentPageValue: (value: number) => `The value passed for currentPage is ${value}.`,
  currentPageTooSmall: '"currentPage" cannot be less than 1.',
  currentPageTooBig: '"currentPage" cannot be larger than "totalPages".',
  mustUsePageAsPathParam: `Your path parameter must be "[page]". See https://nextjs.org/docs/routing/dynamic-routes for more`,
};

const getPagination = (
  currentPage: PaginationPropsType['currentPage'],
  totalPages: PaginationPropsType['totalPages'],
) => {
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
const PaginationItems = ({ currentPage, pathname, query, totalPages }: PaginationPropsType) => {
  const { paginationStart, paginationLength, shouldTruncateStart, shouldTruncateEnd } =
    getPagination(currentPage, totalPages);

  const PaginationItemArray = [...Array(paginationLength)].map((_, index) => {
    const page = index + paginationStart;
    const isCurrent = page === currentPage;

    return (
      <PaginationItem
        key={page}
        value={page}
        isCurrent={isCurrent}
        testId={`page ${page}`}
        pathname={pathname}
        query={query}
      >
        {page}
      </PaginationItem>
    );
  });

  return (
    <>
      {shouldTruncateStart && (
        <>
          <PaginationItem key="1" value={1} query={query} testId="page 1" pathname={pathname}>
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
            query={query}
            testId={`page ${totalPages}`}
            pathname={pathname}
          >
            {totalPages}
          </PaginationItem>
        </>
      )}
    </>
  );
};

export function Pagination({ currentPage, pathname, query, totalPages }: PaginationPropsType) {
  /* Developer Errors */
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

    if (!pathname.endsWith('[page]')) {
      throw new Error(developmentErrors.mustUsePageAsPathParam);
    }
  }

  return (
    <nav
      className={
        '[&>ol]:flex [&>ol]:my-0 [&>ol]:mx-auto [&>ol]:p-0 [&>ol]:justify-between [&>ol]:items-center [&>ol]:max-w-fit"'
      }
      data-testid="Pagination"
    >
      <ol>
        {currentPage > 1 && (
          <PaginationItem
            value={currentPage - 1}
            pathname={pathname}
            query={query}
            testId={PREV_PAGE_BUTTON}
          >
            <LeftAngleIcon className="w-full" />
          </PaginationItem>
        )}

        <PaginationItems
          currentPage={currentPage}
          totalPages={totalPages}
          pathname={pathname}
          query={query}
        />

        {currentPage < totalPages && (
          <PaginationItem
            value={currentPage + 1}
            pathname={pathname}
            query={query}
            testId={NEXT_PAGE_BUTTON}
          >
            <RightAngleIcon className="w-full" />
          </PaginationItem>
        )}
      </ol>
    </nav>
  );
}
