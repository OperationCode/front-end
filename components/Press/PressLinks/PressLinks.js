import { number } from 'prop-types';
import React from 'react';
import ArticleGroup from './ArticleGroup/ArticleGroup';
import * as Articles from './Articles';
import styles from './PressLinks.css';

PressLinks.propTypes = {
  numberOfInitiallyVisibleLinks: number,
};

PressLinks.defaultProps = {
  numberOfInitiallyVisibleLinks: 5,
};

function PressLinks({ numberOfInitiallyVisibleLinks }) {
  return (
    <div className={styles.logos}>
      <div className={styles.flexContainer}>
        {Object.keys(Articles).map(region => (
          <ArticleGroup
            key={`ArticleGroup_${region}`}
            region={region}
            articles={Articles[region]}
            numberOfInitiallyVisibleLinks={numberOfInitiallyVisibleLinks}
          />
        ))}
      </div>
    </div>
  );
}

export default PressLinks;
