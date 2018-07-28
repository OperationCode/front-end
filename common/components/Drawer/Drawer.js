import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Drawer.css';

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isVisible: PropTypes.bool,
};

Drawer.defaultProps = {
  className: '',
  isVisible: false,
};

function Drawer({
 children, className, isVisible 
}) {
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
