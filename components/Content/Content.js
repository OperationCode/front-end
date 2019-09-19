import React from 'react';
import { string, array, bool } from 'prop-types';
import classNames from 'classnames';
import Container from 'components/Container/Container';
import HashLink from 'components/HashLink/HashLink';
import styles from './Content.css';

Content.propTypes = {
  backgroundImageSource: string,
  columns: array.isRequired, // can be JSX, elements, or strings
  hasTitleUnderline: bool,
  id: string,
  isFullViewportHeight: bool,
  theme: string,
  title: string,
  hasHashLink: bool,
};

Content.defaultProps = {
  backgroundImageSource: undefined,
  hasTitleUnderline: false,
  id: undefined,
  isFullViewportHeight: false,
  theme: 'secondary',
  title: undefined,
  hasHashLink: false,
};

function Content({
  columns,
  hasTitleUnderline,
  id,
  isFullViewportHeight,
  theme,
  title,
  backgroundImageSource,
  hasHashLink,
}) {
  return (
    <Container
      backgroundImageSource={backgroundImageSource}
      id={id}
      isFullViewportHeight={isFullViewportHeight}
      theme={theme}
    >
      {title && (
        <div>
          {hasHashLink && (
            <div>
              <HashLink id={title} theme={theme} />
              <h3
                className={classNames(styles.titleHasHashLink, {
                  [styles.underline]: hasTitleUnderline,
                })}
              >
                {title}
              </h3>
            </div>
          )}
          {!hasHashLink && (
            <h3
              className={classNames(styles.title, {
                [styles.underline]: hasTitleUnderline,
              })}
            >
              {title}
            </h3>
          )}
        </div>
      )}
      <div className={styles.columnsContainer}>
        {/* eslint-disable-next-line react/no-array-index-key */}
        {columns.map((column, index) => React.cloneElement(column, { key: index }))}
      </div>
    </Container>
  );
}

export default Content;
