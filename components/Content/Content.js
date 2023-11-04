import { cloneElement } from 'react';
import { array, bool, oneOf, string } from 'prop-types';
import Container from 'components/Container/Container';
import Heading from 'components/Heading/Heading';

Content.propTypes = {
  backgroundImageSource: string,
  className: string,
  columns: array.isRequired, // can be JSX, elements, or strings
  hasTitleUnderline: bool,
  id: string,
  isFullViewportHeight: bool,
  theme: oneOf(['gray', 'secondary', 'white']),
  title: string,
};

Content.defaultProps = {
  backgroundImageSource: undefined,
  className: '',
  hasTitleUnderline: false,
  id: undefined,
  isFullViewportHeight: false,
  theme: 'secondary',
  title: undefined,
};

function Content({
  className,
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
      className={className}
      id={id}
      isFullViewportHeight={isFullViewportHeight}
      theme={theme}
    >
      {title && <Heading text={title} hasTitleUnderline={hasTitleUnderline} headingLevel={3} />}

      <div className="flex justify-center items-center flex-wrap w-full [&>*]:m-4">
        {/* eslint-disable-next-line react/no-array-index-key */}
        {columns.map((column, index) => cloneElement(column, { key: index }))}
      </div>
    </Container>
  );
}

export default Content;
