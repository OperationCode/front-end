import { cx } from 'common/utils/cva';
import kebabCase from 'lodash/kebabCase';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import LinkIcon from 'static/images/icons/FontAwesome/link-solid.svg';

type HeadingLevelType = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingPropsType {
  /**
   * Text to be rendered in the heading element.
   */
  text: string;
  /**
   * Applies classnames to the base `figure` element for styling.
   */
  className?: string;
  /**
   * Applies an anchor as the base element if true.
   * @default true
   */
  hasHashLink?: boolean;
  /**
   * Displays an optional line under the title.
   * @default false
   */
  hasTitleUnderline?: boolean;
  /**
   * Sets the heading level (h1, h2, etc)
   * @default 2
   */
  headingLevel?: HeadingLevelType;
}

function Heading({
  className,
  hasHashLink = true,
  hasTitleUnderline = false,
  headingLevel = 2,
  text,
}: HeadingPropsType) {
  const anchorId = `${kebabCase(text)}-link`;
  const HeadingElement = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return (
    <div className="flex justify-center relative">
      <HeadingElement
        className={cx(
          'group flex uppercase text-center my-4 mx-0 border-b border-b-4 border-b-transparent',
          { 'border-b-primary': hasTitleUnderline },
          className,
        )}
        id={anchorId}
      >
        {hasHashLink && (
          <div className="relative h-full" data-testid={`Heading Content ${anchorId}`}>
            <a
              href={`#${anchorId}`}
              data-testid="Hash Link"
              className={cx(
                'hidden sm:visible',
                'absolute top-0 -left-8 opacity-0 h-full flex items-center justify-center',
                'group-hover:opacity-100 focus-visible:opacity-100 transition-opacity',
                'w-0 focus-visible:w-5 group-hover:w-5',
              )}
            >
              <ScreenReaderOnly>Scroll to {text}</ScreenReaderOnly>
              <LinkIcon className="w-full h-5" />
            </a>
          </div>
        )}

        {text}
      </HeadingElement>
    </div>
  );
}

export default Heading;
