import classNames from 'classnames';
import kebabCase from 'lodash/kebabCase';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import LinkIcon from 'static/images/icons/FontAwesome/link-solid.svg';
import styles from './Heading.module.css';

type HeadingLevelType = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingPropsType = {
  text: string;
  className?: string;
  hasHashLink?: boolean;
  hasTitleUnderline?: boolean;
  headingLevel: HeadingLevelType;
};

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

export default Heading;
