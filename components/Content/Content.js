import React from 'react';
import { string, array, bool } from 'prop-types';
import classNames from 'classnames';
import Container from 'components/Container/Container';
import styles from './Content.css';

Content.propTypes = {
  backgroundImageSource: string,
  columns: array.isRequired, // can be JSX, elements, or strings
  hasTitleUnderline: bool,
  id: string,
  isFullViewportHeight: bool,
  theme: string,
  title: string,
};

Content.defaultProps = {
  backgroundImageSource: undefined,
  hasTitleUnderline: false,
  id: undefined,
  isFullViewportHeight: false,
  theme: 'secondary',
  title: undefined,
};

function Content({
  columns,
  hasTitleUnderline,
  id,
  isFullViewportHeight,
  theme,
  title,
  backgroundImageSource,
}) {
  return (
    <Container
      backgroundImageSource={backgroundImageSource}
      id={id}
      isFullViewportHeight={isFullViewportHeight}
      theme={theme}
    >
      {title && (
        <h3
          className={classNames(styles.title, {
            [styles.underline]: hasTitleUnderline,
          })}
        >
          {title}
        </h3>
      )}

      <div className={styles.columnsContainer}>
        {/* eslint-disable-next-line react/no-array-index-key */}
        {columns.map((column, index) => React.cloneElement(column, { key: index }))}
      </div>
    </Container>
  );
}

export default Content;
