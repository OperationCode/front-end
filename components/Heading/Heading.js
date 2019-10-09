import React, { Component } from 'react';
import { string, number, bool } from 'prop-types';
import classNames from 'classnames';
import kebabCase from 'lodash/kebabCase';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import LinkIcon from 'static/images/icons/FontAwesome/link-solid.svg';
import styles from './Heading.css';

class Heading extends Component {
  static propTypes = {
    className: string,
    text: string.isRequired,
    hasTitleUnderline: bool,
    hasHeadingLines: bool,
    hasHashLink: bool,
    headingLevel: number,
  };

  static defaultProps = {
    className: undefined,
    hasTitleUnderline: false,
    hasHeadingLines: false,
    hasHashLink: true,
    headingLevel: 2,
  };

  render() {
    const { props } = this;
    const anchorId = kebabCase(props.text);
    const HeadingElement = `h${props.headingLevel}`;

    return (
      <div className={styles.headingContainer}>
        <HeadingElement
          className={classNames(props.className, styles.Heading, {
            [styles.headingTextWithLinkIconOffset]: props.hasHashLink,
            [styles.underline]: props.hasTitleUnderline,
            [styles.headingLines]: props.hasHeadingLines,
          })}
        >
          {props.hasHashLink ? (
            <div className={styles.hashLink}>
              <a id={`${anchorId}-link`} href={`#${anchorId}-link`} data-testid="Hash Link">
                <ScreenReaderOnly>Scroll Link for {props.text}</ScreenReaderOnly>
                <LinkIcon className={styles.icon} />
              </a>

              {props.text}
            </div>
          ) : (
            props.text
          )}
        </HeadingElement>
      </div>
    );
  }
}

export default Heading;
