import React, { Component } from 'react';
import { string, number, oneOfType, bool, oneOf } from 'prop-types';
import classNames from 'classnames';
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

  state = {
    isLinkIconVisible: false,
  };

  getAnchorId = () => {
    const { props } = this;

    return props.children
      .replace(/\s+/g, '-') // replaces spaces with dash
      .replace(/[^a-zA-Z0-9-]/g, '') // removes special characters except dash
      .toLowerCase();
  };

  getVisibleIcon = () => {
    const { props } = this;
    const { theme } = props;
    let visibleIcon = `${styles.icon} ${styles.iconVisible}`;

    if (theme === 'white' || theme === 'gray') {
      visibleIcon += ` ${styles.iconFillBlue}`;
    } else {
      visibleIcon += ` ${styles.iconFillWhite}`;
    }

    return visibleIcon;
  };

  toggleVisible = display => {
    this.setState({ isLinkIconVisible: display });
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
    const { isLinkIconVisible } = this.state;
    const anchorId = this.getAnchorId();
    const hashLinkClass = `${styles.hashLink}`;
    const visibleIcon = this.getVisibleIcon();
    const hiddenIcon = `${styles.icon} ${styles.iconHidden}`;

    if (props.hasHashLink) {
      return (
        <a
          href={`#${anchorId}`}
          className={hashLinkClass}
          onMouseEnter={() => this.toggleVisible(true)}
          onMouseLeave={() => this.toggleVisible(false)}
          onClick={() => this.toggleVisible(false)}
          data-testid="Hash Link"
        >
          <LinkIcon className={isLinkIconVisible ? visibleIcon : hiddenIcon} />
        </a>
      );
    }

    return undefined;
  };

  getSpan = () => {
    const { props } = this;
    const anchorId = this.getAnchorId();
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
