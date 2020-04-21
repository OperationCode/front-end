import React from 'react';
import Link from 'next/link';
import { bool, node, number, string } from 'prop-types';
import classNames from 'classnames';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import styles from './PaginationItem.module.css';
/***/
PaginationItem.propTypes = {
  children: node.isRequired,
  isCurrent: bool,
  pathname: string.isRequired,
  testId: string.isRequired,
  value: number,
};

PaginationItem.defaultProps = {
  isCurrent: false,
  value: undefined,
};

function PaginationItem({ children, isCurrent, pathname, testId, value }) {
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
        <Link href={pathname} as={pathname.replace('[page]', value)}>
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
