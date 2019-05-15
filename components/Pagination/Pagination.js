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
    perPageCount: 2,
  };

  constructor(props) {
    super(props);

    this.state = {
      startIndex: 0,
      currentIndex: 0,
    };
  }

  buildPageIndices = () => {
    const {
      children: { length },
      perPageCount,
    } = this.props;

    const { startIndex, currentIndex } = this.state;
    const totalPageCount = Math.floor(length / perPageCount);
    const pageIndices = Array(totalPageCount)
      .fill(0)
      .map((_, index) => index + startIndex);

    return pageIndices.map(pageIndex => (
      <div
        className={pageIndex === currentIndex ? styles.pageIndexActive : styles.pageIndex}
        key={pageIndex}
        data-page-index={pageIndex}
        data-action="selectPage"
      >
        {pageIndex + 1}
      </div>
    ));
  };
  /*
    c = 3
    l = 8
    0 1 2 / 3 4 5 / 6 7
    1 2 3 / 4 5 6 / 7 8
  */

  handleControlOnClick = event => {
    const {
      children: { length },
      perPageCount,
    } = this.props;
    const { action, pageIndex } = event.target.dataset;
    console.log({ action });
    console.log({ pageIndex });

    this.setState(state => {
      let { currentIndex, startIndex } = state;

      if (action === 'firstPage') {
        startIndex = 0;
        currentIndex = 0;
      } else if (action === 'previousPage') {
        const shiftedStartIndex = startIndex - perPageCount;
        startIndex = shiftedStartIndex <= 0 ? 1 : shiftedStartIndex;
        currentIndex = startIndex;
      } else if (action === 'nextPage') {
        const shiftedStartIndex = startIndex + perPageCount;
        startIndex = shiftedStartIndex >= length ? length : shiftedStartIndex;
        currentIndex = startIndex;
      } else if (action === 'lastPage') {
        startIndex = Math.floor(length / perPageCount) * perPageCount + 1;
        currentIndex = startIndex;
      } else if (action === 'selectPage') {
        startIndex = parseInt(pageIndex, 10) + 1;
      }
      console.log({ startIndex });
      console.log({ currentIndex });
      return { ...state, startIndex, currentIndex };
    });
  };

  buildControls = () => {
    return (
      <div
        className={styles.controls}
        onClick={this.handleControlOnClick}
        onKeyDown={this.handleControlOnKeyDown}
        role="presentation"
      >
        <div data-action="firstPage" className={styles.btnFirstPage}>
          First
        </div>
        <div data-action="previousPage" className={styles.btnPreviousPage}>
          Previous
        </div>
        <div className={styles.rest}>{this.buildPageIndices()}</div>
        <div data-action="nextPage" className={styles.btnNextPage}>
          Next
        </div>
        <div data-action="lastPage" className={styles.btnLastPage}>
          Last
        </div>
      </div>
    );
  };

  render() {
    const { className, children, perPageCount } = this.props;
    const { startIndex } = this.state;
    const endIndex =
      startIndex + perPageCount >= children.length ? children.length : startIndex + perPageCount;

    return (
      <div className={classNames(className, styles.Pagination)}>
        {children.slice(startIndex, endIndex)}
        {this.buildControls()}
      </div>
    );
  }
}
