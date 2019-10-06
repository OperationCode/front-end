import React from 'react';
import { bool, element, oneOfType, string } from 'prop-types';
import classNames from 'classnames';
import styles from './PaginationItem.css';

PaginationItem.propTypes = {
  value: oneOfType([string, element]).isRequired,
  isCurrent: bool,
  isClickable: bool,
};

PaginationItem.defaultProps = {
  isCurrent: false,
  isClickable: true,
};

function PaginationItem({ value, isCurrent, isClickable }) {
  return (
    <span
      className={classNames(styles.PaginationItem, {
        [styles.current]: isCurrent,
        [styles.notClickable]: !isClickable,
      })}
      data-testid={`Pagination Item - ${value}`}
    >
      {value}
    </span>
  );
}

export default PaginationItem;
