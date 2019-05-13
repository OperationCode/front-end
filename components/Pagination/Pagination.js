import React from 'react';
import { oneofType, arrayOf, element, string, node } from 'prop-types';
import classNames from 'classnames';
import styles from './Pagination.css';

export default class Pagination extends React.Component {
  static propTypes = {
    children: oneOfType([arrayOf(node), element, string]).isRequired,
    className: string,
  };

  static defaultProps = {
    className: undefined,
  };

  render() {
    const { props } = this;

    return <div className={classNames(props.className, styles.Pagination)}>{props.children}</div>;
  }
}
