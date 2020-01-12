import React from 'react';
import { string, number, bool } from 'prop-types';
import classNames from 'classnames';
import kebabCase from 'lodash/kebabCase';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import LinkIcon from 'static/images/icons/FontAwesome/link-solid.svg';
import styles from './Heading.module.css';

Heading.propTypes = {
  className: string,
  hasHashLink: bool,
  hasTitleUnderline: bool,
  headingLevel: number,
  text: string.isRequired,
};

Heading.defaultProps = {
  className: undefined,
  hasHashLink: true,
  hasTitleUnderline: false,
  headingLevel: 2,
};

function Heading({ className, hasHashLink, hasTitleUnderline, headingLevel, text }) {
  const anchorId = `${kebabCase(text)}-link`;
  const HeadingElement = `h${headingLevel}`;

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
