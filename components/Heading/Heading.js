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
    theme: oneOf(['gray', 'secondary', 'white']),
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
    const classes = classNames(styles[props.theme], {
      [`${styles.Heading} ${props.className}`]: !props.hasHeadingLines,
      [`${styles.headingOurMission}`]: props.className === 'headingOurMission',
      [`${styles.headingLines}`]: props.hasHeadingLines,
      [`${styles.headingTextWithLinkIconOffset}`]: props.hasHashLink,
    });
    const HeadingElement = `h${props.headingLevel}`;

    return (
      <div className={`${styles.headingContainer}`}>
        {props.hasHashLink && (
          <span
            id={anchorId}
            className={classNames(styles.anchor, {
              [styles.anchorMargin]: props.customAnchorClass === 'anchorMargin',
              [styles.anchorMarginPodcast]: props.customAnchorClass === 'podcast',
            })}
          />
        )}
        {props.hasHashLink && (
          <div className={`${styles.hashLinkContainer}`}>
            <a href={`#${anchorId}`} data-testid="Hash Link">
              <LinkIcon className={styles.icon} />
              <ScreenReaderOnly>Scroll Link</ScreenReaderOnly>
            </a>
          </div>
        )}
        <HeadingElement className={classes}>{props.text}</HeadingElement>
      </div>
    );
  }
}

export default Heading;
