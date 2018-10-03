import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import Button from 'components/_common_/Button/Button';
import styles from './ArticleGroup.css';

class ArticleGroup extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
    numberOfInitiallyVisibleLinks: PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
  };

  state = {
    areAllLinksVisible: false,
  };

  clickHandler = () => {
    this.setState(prevState => ({ areAllLinksVisible: !prevState.areAllLinksVisible }));
  };

  render() {
    const { areAllLinksVisible } = this.state;
    const { articles, region, numberOfInitiallyVisibleLinks } = this.props;
    return (
      <div className={styles.articlesGroup}>
        <h2>{region}</h2>
        <ul>
          {articles.map((link, index) => {
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
        {articles.length > numberOfInitiallyVisibleLinks && (
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

export default ArticleGroup;
