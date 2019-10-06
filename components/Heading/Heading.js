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
    customAnchorClass: string,
    text: string.isRequired,
    hasTitleUnderline: bool,
    hasHeadingLines: bool,
    hasHashLink: bool,
    headingLevel: number,
  };

  static defaultProps = {
    className: undefined,
    customAnchorClass: 'anchorMargin',
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
      <div className={`${styles.headingContainer}`}>
        {props.hasHashLink && (
          <>
            <span
              id={anchorId}
              className={classNames(styles.anchorSpan, styles[props.customAnchorClass])}
            />
            <div className={`${styles.hashLinkContainer}`}>
              <HeadingElement
                className={classNames(
                  props.className,
                  styles.headingTextWithLinkIconOffset,
                  styles.Heading,
                )}
              >
                <div className={`${styles.hashLink}`}>
                  <a id={`${anchorId}-link`} href={`#${anchorId}`} data-testid="Hash Link">
                    <ScreenReaderOnly>Scroll Link for {props.text}</ScreenReaderOnly>
                    <LinkIcon className={styles.icon} />
                  </a>
                  {props.hasTitleUnderline ? (
                    <span className={`${styles.underline}`}>{props.text}</span>
                  ) : (
                    <span>{props.text}</span>
                  )}
                </div>
              </HeadingElement>
            </div>
          </>
        )}
        {props.hasHeadingLines && (
          <HeadingElement className={classNames(styles[props.className], styles.headingLines)}>
            {props.text}
          </HeadingElement>
        )}
      </div>
    );
  }
}

export default Heading;
