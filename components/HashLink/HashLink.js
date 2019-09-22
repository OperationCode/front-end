import React, { Component } from 'react';
import { string } from 'prop-types';
import LinkIcon from 'static/images/icons/FontAwesome/link-solid.svg';
import styles from './HashLink.css';

class HashLink extends Component {
  static propTypes = {
    id: string,
    theme: string,
    customIconOffset: string,
  };

  static defaultProps = {
    id: 'default',
    theme: 'white',
    customIconOffset: 'default',
  };

  state = {
    isVisible: false,
  };

  getAnchorId = () => {
    const { props } = this;

    return props.id
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
    this.setState({ isVisible: display });
  };

  render() {
    const { isVisible } = this.state;
    const anchorId = this.getAnchorId();
    const anchorClass = this.getAnchorClass();
    const visibleIcon = this.getVisibleIcon();
    const hiddenIcon = `${styles.icon} ${styles.iconHidden}`;

    return (
      <a
        id={anchorId}
        href={`#${anchorId}`}
        className={anchorClass}
        onMouseEnter={() => this.toggleVisible(true)}
        onMouseLeave={() => this.toggleVisible(false)}
      >
        <LinkIcon className={isVisible ? visibleIcon : hiddenIcon} />
      </a>
    );
  }
}

export default HashLink;
