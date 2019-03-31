import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import Button from 'components/Button/Button';
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
        <h2 className={styles.centered}>{region}</h2>
        <ul>
          {articles.map((link, index) => {
            const isArticleVisible = areAllLinksVisible || index < numberOfInitiallyVisibleLinks;

            return isArticleVisible ? (
              <li key={`GroupLink_${link.url}`}>
                <OutboundLink href={link.url} analyticsEventLabel="Press Article">
                  {link.title}
                </OutboundLink>
              </li>
            ) : null;
          })}
        </ul>
        {articles.length > numberOfInitiallyVisibleLinks && (
          <div className={styles.centered}>
            <Button onClick={this.clickHandler} aria-pressed={areAllLinksVisible} theme="primary">
              {areAllLinksVisible ? 'Show Less' : 'Show All'}
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default ArticleGroup;
