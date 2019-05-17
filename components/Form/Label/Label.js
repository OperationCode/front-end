import React from 'react';
import { node, string, bool } from 'prop-types';
import classNames from 'classnames';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import styles from './Label.css';

Label.propTypes = {
  children: node.isRequired,
  className: string,
  for: string.isRequired,
  isHidden: bool, // visually hides the label, but maintains accessibility
};

Label.defaultProps = {
  className: undefined,
  isHidden: false,
};

function Label({ children, className, isHidden, ...props }) {
  const TheLabel = (
    <label
      // for isnt destructured because it's a reserved word in JavaScript
      // eslint-disable-next-line react/destructuring-assignment
      htmlFor={props.for}
      className={classNames(styles.Label, className)}
    >
      {children}
    </label>
  );

  return isHidden ? <ScreenReaderOnly>{TheLabel}</ScreenReaderOnly> : <>{TheLabel}</>;
}

export default Label;
