import React, { Component } from 'react';
import { string, number, oneOfType, bool, oneOf } from 'prop-types';
import classNames from 'classnames';
import kebabCase from 'lodash/kebabCase';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import LinkIcon from 'static/images/icons/FontAwesome/link-solid.svg';
import styles from './Heading.css';

class Heading extends Component {
  static propTypes = {
    className: string,
    id: oneOfType([string, number]), // reference for scroll anchors
    customAnchorClass: string,
    text: string.isRequired,
    hasHeadingLines: bool,
    hasHashLink: bool,
    headingLevel: number,
    theme: oneOf(['gray', 'secondary', 'white', 'transparentWhite']),
  };

  static defaultProps = {
    className: undefined,
    id: '',
    customAnchorClass: 'anchorMargin',
    hasHeadingLines: false,
    hasHashLink: true,
    headingLevel: 2,
    theme: 'secondary',
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
              <a href={`#${anchorId}`} data-testid="Hash Link">
                <ScreenReaderOnly>Scroll Link</ScreenReaderOnly>
                <LinkIcon className={styles.icon} />
              </a>
              <HeadingElement
                className={classNames(
                  styles[props.theme],
                  props.className,
                  styles.headingTextWithLinkIconOffset,
                  styles.Heading,
                )}
              >
                {props.text}
              </HeadingElement>
            </div>
          </>
        )}
        {props.className === 'headingOurMission' && (
          <HeadingElement
            className={classNames(
              styles[props.theme],
              styles.headingOurMission,
              styles.headingLines,
            )}
          >
            {props.text}
          </HeadingElement>
        )}
      </div>
    );
  }
}

export default Heading;
