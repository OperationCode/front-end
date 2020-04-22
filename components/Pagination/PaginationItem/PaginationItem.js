/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
import React from 'react';
import Link from 'next/link';
import { bool, node, number, string, func } from 'prop-types';
import classNames from 'classnames';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import styles from './PaginationItem.module.css';

PaginationItem.propTypes = {
  children: node.isRequired,
  isCurrent: bool,
  pathname: string.isRequired,
  testId: string.isRequired,
  value: number,
  handlePagination: func.isRequired,
};

PaginationItem.defaultProps = {
  isCurrent: false,
  value: undefined,
};

function PaginationItem({ children, isCurrent, pathname, testId, value, handlePagination }) {
  const isClickable = !!value;

  return (
    <li
      className={classNames(styles.PaginationItem, {
        [styles.current]: isCurrent,
        [styles.notClickable]: !isClickable,
      })}
      data-testid={testId}
      value={value}
    >
      {isClickable ? (
        <Link href={pathname} as={pathname.replace('[page]', value)} scroll={false} passHref>
          <a onClick={handlePagination} className={styles.unstyledLink} value={value}>
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
