import React from 'react';
import { string, number, bool } from 'prop-types';
import classNames from 'classnames';
import kebabCase from 'lodash/kebabCase';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import LinkIcon from 'static/images/icons/FontAwesome/link-solid.svg';
import styles from './Heading.css';

Heading.propTypes = {
  className: string,
  text: string.isRequired,
  hasTitleUnderline: bool,
  hasHeadingLines: bool,
  hasHashLink: bool,
  headingLevel: number,
};

Heading.defaultProps = {
  className: undefined,
  hasTitleUnderline: false,
  hasHeadingLines: false,
  hasHashLink: true,
  headingLevel: 2,
};

function Heading({
  className,
  text,
  hasTitleUnderline,
  hasHeadingLines,
  hasHashLink,
  headingLevel,
}) {
  const anchorId = kebabCase(text);
  const HeadingElement = `h${headingLevel}`;

  return (
    <div className={styles.headingContainer}>
      <HeadingElement
        className={classNames(className, styles.Heading, {
          [styles.headingTextWithLinkIconOffset]: hasHashLink,
          [styles.underline]: hasTitleUnderline,
          [styles.headingLines]: hasHeadingLines,
        })}
      >
        {hasHashLink ? (
          <div className={styles.hashLink}>
            <a id={`${anchorId}-link`} href={`#${anchorId}-link`} data-testid="Hash Link">
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
