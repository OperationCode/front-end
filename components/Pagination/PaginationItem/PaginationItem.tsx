import Link from 'next/link';
import omit from 'lodash/omit';
import classNames from 'classnames';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import styles from './PaginationItem.module.css';

export type PaginationItemPropsType = {
  /**
   * Content to be rendered as the link.
   */
  children: React.ReactNode;
  /**
   * Sets the URL path
   */
  pathname: string;
  /**
   * Sets an id to the base element for testing.
   */
  testId: string;
  /**
   * Sets styles to indicate the current item is selected.
   */
  isCurrent?: boolean;
  query?: Record<string, any>;
  value?: number;
};

function PaginationItem({
  children,
  isCurrent = false,
  pathname,
  query,
  testId,
  value,
}: PaginationItemPropsType) {
  const relevantQueryStringObject = omit(query, ['page']);
  const realURL = {
    pathname: pathname.replace('[page]', String(value)),
    query: relevantQueryStringObject,
  };

  const isClickable = !!value;

  return (
    <li
      className={classNames(styles.PaginationItem, {
        [styles.current]: isCurrent,
        [styles.notClickable]: !isClickable,
      })}
      data-testid={testId}
    >
      {isClickable ? (
        <Link href={{ pathname, query }} as={realURL}>
          <a className={styles.unstyledLink}>
            <ScreenReaderOnly>Go to page</ScreenReaderOnly>
            {children}
          </a>
        </Link>
      ) : (
        children
      )}
    </li>
  );
}

export default PaginationItem;
