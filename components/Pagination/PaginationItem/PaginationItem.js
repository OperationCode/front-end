import React from 'react';
import Link from 'next/link';
import omit from 'lodash/omit';
import { bool, node, number, object, string } from 'prop-types';
import classNames from 'classnames';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import styles from './PaginationItem.module.css';

PaginationItem.propTypes = {
  children: node.isRequired,
  isCurrent: bool,
  pathName: string.isRequired,
  query: object,
  testId: string.isRequired,
  value: number,
};

PaginationItem.defaultProps = {
  isCurrent: false,
  query: {},
  value: undefined,
};

function PaginationItem({ children, isCurrent, pathName, query, testId, value }) {
  const relevantQueryStringObject = omit(query, ['page']);
  const realURL = { pathName: pathName.replace('[page]', value), query: relevantQueryStringObject };

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
        <Link href={{ pathName, query }} as={realURL}>
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
