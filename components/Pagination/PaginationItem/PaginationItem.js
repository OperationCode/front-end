/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
import React from 'react';
import Link from 'next/link';
import { bool, node, number, string, object } from 'prop-types';
import classNames from 'classnames';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import { useRouter } from 'next/router';
import styles from './PaginationItem.module.css';

PaginationItem.propTypes = {
  children: node.isRequired,
  isCurrent: bool,
  pathname: string.isRequired,
  testId: string.isRequired,
  value: number,
  query: object,
  route: string,
};

PaginationItem.defaultProps = {
  isCurrent: false,
  value: undefined,
  query: {},
  route: null,
};

function PaginationItem({ children, isCurrent, pathname, testId, value, query, route }) {
  const router = useRouter();

  const isClickable = !!value;

  function handlePagination(event) {
    event.preventDefault();

    if (route === 'search') {
      console.log('searching');
      router.push({
        pathname: `${pathname.replace('[page]', `${value}`)}/search`,
        query: query.q ? { q: query.q } : null,
        shallow: true,
      });
    } else {
      router.push({
        pathname: `${pathname.replace('[page]', `${value}`)}`,
        query: query.q ? { q: query.q } : null,
        shallow: true,
      });
    }
  }

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
