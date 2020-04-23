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
  children: node,
  isCurrent: bool,
  pathname: string,
  testId: string,
  value: number,
  query: object,
};
/* will addresss proptypes later */
PaginationItem.defaultProps = {
  isCurrent: false,
  value: undefined,
  children: null,
  pathname: null,
  testId: null,
  query: {},
};

function PaginationItem({ children, isCurrent, pathname, testId, value, query }) {
  const isClickable = !!value;
  const router = useRouter();

  const handlePagination = event => {
    event.preventDefault();

    router.push({
      pathname: router.pathname.replace('[page]', `${value}`),
      query: { ...query, page: value },
    });
  };

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
        <Link href={pathname} as={pathname.replace('[page]', `${value}`)} scroll={false}>
          <a onClick={handlePagination} className={styles.unstyledLink}>
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

// function handlePagination(event) {
//   event.preventDefault();

//   if (route === 'search') {
//     console.log('searching');
//     router.push({
//       pathname: `${pathname.replace('[page]', `${value}`)}`,
//       query: query.q ? { q: query.q } : null,
//       shallow: true,
//     });
//   } else {
//     router.push({
//       pathname: `${pathname.replace('[page]', `${value}`)}`,
//       query: query.q ? { q: query.q } : null,
//       shallow: true,
//     });
//   }
// }
