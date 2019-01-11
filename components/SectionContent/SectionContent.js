import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './SectionContent.css';

SectionContent.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.array.isRequired,
  id: PropTypes.string,
  title: PropTypes.string,
};

SectionContent.defaultProps = {
  className: undefined,
  id: undefined,
  title: undefined,
};

function SectionContent({ className, columns, id, title }) {
  return (
    <section className={classNames(styles.SectionContent, className)} id={id}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.columnsContainer}>
        {columns.map((Column, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Column key={index} />
        ))}
      </div>
    </section>
  );
}

export default SectionContent;
