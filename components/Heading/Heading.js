import React, { Component } from 'react';
import { string, number, oneOfType, bool, oneOf } from 'prop-types';
import classNames from 'classnames';
import kebabCase from 'lodash/kebabCase';
import LinkIcon from 'static/images/icons/FontAwesome/link-solid.svg';
import styles from './Heading.css';

class Heading extends Component {
  static propTypes = {
    className: string,
    id: oneOfType([string, number]), // reference for scroll anchors
    customAnchorClass: string,
    children: string.isRequired,
    hasHeadingLines: bool,
    hasHashLink: bool,
    headingLevel: number,
    theme: oneOf(['gray', 'secondary', 'white']),
  };

  static defaultProps = {
    className: undefined,
    id: '',
    customAnchorClass: '',
    hasHeadingLines: false,
    hasHashLink: true,
    headingLevel: 2,
    theme: 'secondary',
  };

  getHeading = () => {
    const { props } = this;
    const classes = this.getHeadingClasses();
    const { headingLevel } = props;
    const HeadingElement = `h${headingLevel}`;

    return (
      <HeadingElement className={classes} id={props.id}>
        {props.children}
      </HeadingElement>
    );
  };

  getHeadingClasses = () => {
    const { props } = this;
    const customHeadingClass =
      props.className === 'headingOurMission' ? styles.headingOurMission : styles.Heading;
    const withLinkIcon = classNames(
      styles.headingTextWithLinkIconOffset,
      customHeadingClass,
      styles[props.theme],
      {
        [`${styles.headingLines}`]: props.hasHeadingLines,
      },
    );
    const withoutLinkIcon = classNames(customHeadingClass, styles[props.theme], {
      [`${styles.headingLines}`]: props.hasHeadingLines,
    });

    return props.hasHashLink ? withLinkIcon : withoutLinkIcon;
  };

  getAnchorLinkIcon = () => {
    const { props } = this;
    const anchorId = kebabCase(props.children);
    const hashLinkClass = `${styles.hashLinkContainer}`;

    if (props.hasHashLink) {
      return (
        <div className={hashLinkClass}>
          <a href={`#${anchorId}`} data-testid="Hash Link">
            <LinkIcon className={styles.icon} />
          </a>
        </div>
      );
    }

    return undefined;
  };

  getSpan = () => {
    const { props } = this;
    const anchorId = kebabCase(props.children);
    const anchorClass = this.getAnchorClass();

    if (props.hasHashLink) {
      return <span id={anchorId} className={anchorClass} />;
    }
    return '';
  };

  getAnchorClass = () => {
    const { props } = this;
    let anchorClass = `${styles.anchor}`;

    if (props.customAnchorClass === 'podcast') {
      anchorClass += ` ${styles.anchorMarginPodcast}`;
    } else {
      anchorClass += ` ${styles.anchorMargin}`;
    }

    return anchorClass;
  };

  render() {
    const headingContainer = `${styles.headingContainer}`;

    return (
      <div className={headingContainer}>
        {this.getSpan()}
        {this.getAnchorLinkIcon()}
        {this.getHeading()}
      </div>
    );
  }
}

export default Heading;
