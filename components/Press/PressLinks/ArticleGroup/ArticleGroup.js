import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import Button from 'components/Buttons/Button/Button';
import styles from './ArticleGroup.module.css';

ArticleGroup.propTypes = {
  articles: arrayOf(
    shape({
      title: string.isRequired,
      url: string.isRequired,
    }),
  ).isRequired,
  numberOfInitiallyVisibleLinks: number.isRequired,
  region: string.isRequired,
};

export default function ArticleGroup({ articles, region, numberOfInitiallyVisibleLinks }) {
  const [areAllLinksVisible, setAreAllLinksVisible] = React.useState(false);

  const clickHandler = () => {
    setAreAllLinksVisible(previousState => !previousState);
  };

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
          <Button onClick={clickHandler} aria-pressed={areAllLinksVisible} theme="primary">
            {areAllLinksVisible ? 'Show Less' : 'Show All'}
          </Button>
        </div>
      )}
    </div>
  );
}
