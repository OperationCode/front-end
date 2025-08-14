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
    <div className="flex justify-center">
      <HeadingElement
        className={cx(
          'group flex uppercase text-center my-4 mx-0',
          {
            'border-solid border-b-4 border-b-primary': hasTitleUnderline,
          },
          className,
        )}
      >
        {hasHashLink ? (
          <div className="relative" data-testid={`Heading Content ${anchorId}`}>
            <a
              id={anchorId}
              href={`#${anchorId}`}
              data-testid="Hash Link"
              className={cx(
                'hidden absolute top-2 -left-8',
                'transition-all duration-200 ease-linear',
                'sm:inline sm:opacity-0 sm:group-hover:opacity-100',
              )}
            >
              <ScreenReaderOnly>Scroll Link for {text}</ScreenReaderOnly>
              <LinkIcon className="w-4 h-8 leading-9 mx-2 -my-1 outline-none" />
            </a>
            {text}
          </div>
        ) : (
          text
        )}
      </HeadingElement>
    </div>
  );
}

export default Heading;
