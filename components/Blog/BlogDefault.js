import React from 'react';
import { string, node } from 'prop-types';
import classNames from 'classnames';
import styles from './Blog.module.css';

BlogDefault.propTypes = {
  children: node.isRequired,
  className: string,
};

BlogDefault.defaultProps = {
  className: undefined,
};

export default function BlogDefault({ className, children }) {
  return <div className={classNames(className, styles.Blog)}>{children}</div>;
}
