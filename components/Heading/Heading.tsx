import classNames from 'classnames';
import kebabCase from 'lodash/kebabCase';
import { ScreenReaderOnly } from '@/components/ScreenReaderOnly/ScreenReaderOnly';
import LinkIcon from '@/public/static/images/icons/FontAwesome/link-solid.svg';
import styles from './Heading.module.css';

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

export function Heading({
  className,
  hasHashLink = true,
  hasTitleUnderline = false,
  headingLevel = 2,
  text,
}: HeadingPropsType) {
  const anchorId = `${kebabCase(text)}-link`;
  const HeadingElement = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return (
    <div className={styles.headingContainer}>
      <HeadingElement
        className={classNames(className, styles.Heading, {
          [styles.underline]: hasTitleUnderline,
        })}
      >
        {hasHashLink ? (
          <div className={styles.hashLinkContainer} data-testid={`Heading Content ${anchorId}`}>
            <a id={anchorId} href={`#${anchorId}`} data-testid="Hash Link">
              <ScreenReaderOnly>Scroll Link for {text}</ScreenReaderOnly>
              <LinkIcon className={styles.icon} />
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
