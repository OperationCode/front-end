import React from 'react';
import { arrayOf, element, string, node } from 'prop-types';
import classNames from 'classnames';
import styles from './Pagination.css';

export default class Pagination extends React.Component {
  static propTypes = {
    children: [arrayOf(node), element, string].isRequired,
    className: string,
    perPageCount: Number,
  };

  static defaultProps = {
    className: undefined,
    perPageCount: 10,
  };

  constructor(props) {
    super(props);

    this.state = {
      startPageNumber: 1,
      currentPageNumber: 1,
    };
  }

  buildPageNumbers = () => {
    const { perPageCount } = this.props;
    const { startPageNumber, currentPageNumber } = this.state;
    const pageNumbers = Array(perPageCount)
      .fill(0)
      .map((_, index) => index + startPageNumber);

    return pageNumbers.map(pageNumber => (
      <div
        className={pageNumber === currentPageNumber ? styles.pageNumberActive : styles.pageNumber}
        key={pageNumber}
      >
        {pageNumber}
      </div>
    ));
  };

  buildControls = () => {
    return (
      <div className={styles.controls}>
        <div className={styles.btnFirst}>First</div>
        <div className={styles.btnPrevious}>Previous</div>
        <div className={styles.rest}>{this.buildPageNumbers()}</div>
        <div className={styles.btnNext}>Next</div>
        <div className={styles.btnLast}>Last</div>
      </div>
    );
  };

  render() {
    const { className, children, perPageCount } = this.props;
    const { startPageNumber } = this.state;

    return (
      <div className={classNames(className, styles.Pagination)}>
        {children.slice(startPageNumber - 1, perPageCount + 1)}
        {this.buildControls()}
      </div>
    );
  }
}
