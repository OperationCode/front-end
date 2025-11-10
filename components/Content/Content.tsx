import type { ReactElement } from 'react';
import { cloneElement } from 'react';
import Container from 'components/Container/Container';
import Heading from 'components/Heading/Heading';

export interface ContentPropsType {
  /**
   * Elements to be rendered in the container.
   */
  columns: React.ReactNode[];
  /**
   * Sets the path for an optional background image.
   */
  backgroundImageSource?: string;
  /**
   * Applies style classes to the wrapping div.
   */
  className?: string;
  /**
   * Displays an optional line under the title.
   */
  hasTitleUnderline?: boolean;
  /**
   * Applies an id to the container.
   */
  id?: string;
  /**
   * Applies the color theme.
   * @default secondary
   */
  theme?: 'gray' | 'secondary' | 'white';
  /**
   * Applies an additional title element.
   */
  title?: string;
}

function Content({
  className,
  columns,
  hasTitleUnderline = false,
  id,
  theme = 'secondary',
  title,
  backgroundImageSource,
}: ContentPropsType) {
  return (
    <Container
      backgroundImageSource={backgroundImageSource}
      className={className}
      id={id}
      theme={theme}
    >
      {title && <Heading text={title} hasTitleUnderline={hasTitleUnderline} headingLevel={3} />}

      <div className="flex justify-center items-center flex-wrap w-full *:m-4">
        {/* eslint-disable-next-line react/no-array-index-key */}
        {columns.map((column, index) =>
          cloneElement(column as ReactElement<unknown>, { key: index }),
        )}
      </div>
    </Container>
  );
}

export default Content;
