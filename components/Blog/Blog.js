import React from 'react';
import { string, node } from 'prop-types';
import classNames from 'classnames';
import styles from './Blog.module.css';

Blog.propTypes = {
  children: node.isRequired,
  className: string,
};

Blog.defaultProps = {
  className: undefined,
};

export default function Blog({ className, children }) {
  return <div className={classNames(className, styles.Blog)}>{children}</div>;
}
