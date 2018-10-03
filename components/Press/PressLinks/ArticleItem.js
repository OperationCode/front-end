import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PressLinks.css';
import OutboundLink from '../../_common_/OutboundLink/OutboundLink';
import Button from '../../_common_/Button/Button';

class ArticleItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    ).isRequired,
    numberOfInitiallyVisibleLinks: PropTypes.number.isRequired,
  };

  state = {
    areAllLinksVisible: false,
  };

  clickHandler = () => {
    this.setState(prevState => ({ areAllLinksVisible: !prevState.areAllLinksVisible }));
  };

  render() {
    const { areAllLinksVisible } = this.state;
    const { title, links, numberOfInitiallyVisibleLinks } = this.props;
    return (
      <div className={styles.articlesGroup}>
        <h2>{title}</h2>
        <ul>
          {links.map((link, index) => {
            if (index >= numberOfInitiallyVisibleLinks && !areAllLinksVisible) {
              return null;
            }
            return (
              <li key={`GroupLink_${link.url}`}>
                <OutboundLink href={link.url}>{link.title}</OutboundLink>
              </li>
            );
          })}
        </ul>
        {links.length > numberOfInitiallyVisibleLinks && (
          <Button // aria needs to be passed and accepted by the button component
            aria-pressed={areAllLinksVisible} // eslint-disable-line
            className={styles.areAllLinksVisibleButton}
            theme={areAllLinksVisible ? 'slate' : 'primary'}
            onClick={this.clickHandler}
          >
            {areAllLinksVisible ? 'Show Less' : 'Show All'}
          </Button>
        )}
      </div>
    );
  }
}

export default ArticleItem;
