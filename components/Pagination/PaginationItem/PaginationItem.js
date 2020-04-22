/* eslint-disable no-console */
import React from 'react';
import Link from 'next/link';
import { bool, node, number, string, object } from 'prop-types';
import classNames from 'classnames';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import styles from './PaginationItem.module.css';

PaginationItem.propTypes = {
  children: node.isRequired,
  isCurrent: bool,
  pathname: string.isRequired,
  testId: string.isRequired,
  value: number,
  query: object,
};

PaginationItem.defaultProps = {
  isCurrent: false,
  value: undefined,
  query: {},
};

function PaginationItem({ children, isCurrent, pathname, testId, value, query }) {
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
        <Link
          href={{ pathname, query }}
          as={{ pathname: pathname.replace('[page]', value), query }}
          scroll={false}
        >
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
