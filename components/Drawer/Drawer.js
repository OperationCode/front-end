import React from 'react';
import { node, string, bool } from 'prop-types';
import classNames from 'classnames';
import styles from './Drawer.css';

Drawer.propTypes = {
  children: node.isRequired,
  className: string,
  isVisible: bool,
};

Drawer.defaultProps = {
  className: undefined,
  isVisible: false,
};

function Drawer({ children, className, isVisible }) {
  return (
    <div
      className={classNames(className, {
        [styles.visible]: isVisible,
        [styles.hidden]: !isVisible,
      })}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Drawer;
