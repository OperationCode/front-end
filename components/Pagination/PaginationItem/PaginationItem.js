import React from 'react';
import { bool, element, oneOfType, string } from 'prop-types';
import classNames from 'classnames';
import styles from './PaginationItem.module.css';

PaginationItem.propTypes = {
  value: oneOfType([string, element]).isRequired,
  isCurrent: bool,
  isClickable: bool,
  testId: string.isRequired,
};

PaginationItem.defaultProps = {
  isCurrent: false,
  isClickable: true,
};

function PaginationItem({ value, isCurrent, isClickable, testId }) {
  return (
    <li
      className={classNames(styles.PaginationItem, {
        [styles.current]: isCurrent,
        [styles.notClickable]: !isClickable,
      })}
      data-testid={`Pagination Item - ${testId}`}
    >
      {value}
    </li>
  );
}

export default PaginationItem;
