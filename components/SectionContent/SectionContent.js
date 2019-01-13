import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionContent.css';

SectionContent.propTypes = {
  columns: PropTypes.array.isRequired, // can be JSX, elements, or strings
  id: PropTypes.string,
  title: PropTypes.string,
};

SectionContent.defaultProps = {
  id: undefined,
  title: undefined,
};

function SectionContent({ columns, id, title }) {
  return (
    <section className={styles.SectionContent} id={id}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.columnsContainer}>
        {/* eslint-disable-next-line react/no-array-index-key */}
        {columns.map((column, index) => React.cloneElement(column, { key: index }))}
      </div>
    </section>
  );
}

export default SectionContent;
