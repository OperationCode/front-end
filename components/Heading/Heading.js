import React, { Component } from 'react';
import { string, number, oneOfType, bool, node, oneOf } from 'prop-types';
import classNames from 'classnames';
import LinkIcon from 'static/images/icons/FontAwesome/link-solid.svg';
import styles from './Heading.css';

class Heading extends Component {
  static propTypes = {
    className: string,
    id: oneOfType([string, number]), // reference for scroll anchors
    anchorId: string,
    children: node.isRequired,
    hasHeadingLines: bool,
    hasHashLink: bool,
    headingLevel: number,
    theme: oneOf(['gray', 'secondary', 'white']),
  };

  static defaultProps = {
    className: undefined,
    id: '',
    anchorId: 'default',
    hasHeadingLines: true,
    hasHashLink: false,
    headingLevel: 2,
    theme: 'gray',
  };

  state = {
    isLinkIconVisible: false,
  };

  getAnchorId = () => {
    const { props } = this;

    return props.anchorId
      .replace(/\s+/g, '-')
      .replace(/\?|!/g, '')
      .toLowerCase();
  };

  getAnchorClass = () => {
    const { props } = this;
    const { anchorDefault, anchorOffsetLineHeightOne } = styles;
    let anchorClass;

    if (props.customIconOffset === 'offsetLineHeightOne') {
      anchorClass = anchorOffsetLineHeightOne;
    } else {
      anchorClass = anchorDefault;
    }

    return anchorClass;
  };

  getVisibleIcon = () => {
    const { props } = this;
    const { theme } = props;
    let visibleIcon = `${styles.icon} ${styles.iconVisible}`;

    if (theme === 'white' || theme === 'gray') {
      visibleIcon += `${styles.iconFillBlue}`;
    } else {
      visibleIcon += `${styles.iconFillWhite}`;
    }

    return visibleIcon;
  };

  toggleVisible = display => {
    this.setState({ isLinkIconVisible: display });
  };

  getHeading = () => {
    const { props } = this;
    const classes = classNames(props.className, styles.Heading, styles[theme], {
      [`${styles.headingLines}`]: props.hasHeadingLines,
    });

    switch (props.headingLevel) {
      case 1:
        return (
          <h1 className={classes} id={props.id}>
            {children}
          </h1>
        );
      case 2:
        return (
          <h2 className={classes} id={props.id}>
            {children}
          </h2>
        );
      case 3:
        return (
          <h3 className={classes} id={props.id}>
            {children}
          </h3>
        );
      case 4:
        return (
          <h4 className={classes} id={props.id}>
            {children}
          </h4>
        );
      case 5:
        return (
          <h5 className={classes} id={props.id}>
            {children}
          </h5>
        );
      case 6:
        return (
          <h6 className={classes} id={props.id}>
            {children}
          </h6>
        );
    }
  };

  render() {
    const { isLinkIconVisible } = this.state;
    const anchorId = this.getAnchorId();
    const anchorClass = this.getAnchorClass();
    const visibleIcon = this.getVisibleIcon();
    const hiddenIcon = `${styles.icon} ${styles.iconHidden}`;

    return (
      <div>
        <a
          id={anchorId}
          href={`#${anchorId}`}
          className={anchorClass}
          onMouseEnter={() => this.toggleVisible(true)}
          onMouseLeave={() => this.toggleVisible(false)}
        >
          <LinkIcon className={isLinkIconVisible ? visibleIcon : hiddenIcon} />
        </a>
        {this.getHeading()}
      </div>
    );
  }
}

export default Heading;
