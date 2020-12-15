import React from 'react';
import { string, node } from 'prop-types';
import classNames from 'classnames';
import styles from './Blog.module.css';

BlogPost.propTypes = {
  children: node.isRequired,
  className: string,
};

BlogPost.defaultProps = {
  className: undefined,
};

export default function BlogPost({ className, children }) {
  return <div className={classNames(className, styles.Blog)}>{children}</div>;
}
