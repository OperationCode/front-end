import { cloneElement, ReactElement } from 'react';
import Container from 'components/Container/Container';
import Heading from 'components/Heading/Heading';

export type ContentPropsType = {
  columns: React.ReactNode[];
  backgroundImageSource?: string;
  className?: string;
  hasTitleUnderline?: boolean;
  id?: string;
  isFullViewportHeight?: boolean;
  theme?: 'gray' | 'secondary' | 'white';
  title?: string;
};

function Content({
  className,
  columns,
  hasTitleUnderline = false,
  id,
  isFullViewportHeight = false,
  theme = 'secondary',
  title,
  backgroundImageSource,
}: ContentPropsType) {
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
        {columns.map((column, index) => cloneElement(column as ReactElement<any>, { key: index }))}
      </div>
    </Container>
  );
}

export default Content;
