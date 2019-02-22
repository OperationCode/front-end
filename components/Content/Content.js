import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/_common_/Container/Container';
import styles from './Content.css';

Content.propTypes = {
  columns: PropTypes.array.isRequired, // can be JSX, elements, or strings
  title: PropTypes.string,
  id: PropTypes.string,
  isFullViewportHeight: PropTypes.bool,
  theme: PropTypes.string,
};

Content.defaultProps = {
  id: undefined,
  isFullViewportHeight: false,
  theme: 'secondary',
  title: undefined,
};

function Content({ columns, id, isFullViewportHeight, theme, title }) {
  return (
    <Container id={id} isFullViewportHeight={isFullViewportHeight} theme={theme}>
      {title && <h3 className={styles.title}>{title}</h3>}

      <div className={styles.columnsContainer}>
        {/* eslint-disable-next-line react/no-array-index-key */}
        {columns.map((column, index) => React.cloneElement(column, { key: index }))}
      </div>
    </Container>
  );
}

export default Content;
