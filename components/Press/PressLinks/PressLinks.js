import React from 'react';
import { number } from 'prop-types';
import styles from './PressLinks.css';
import * as Articles from './Articles';
import ArticleGroup from './ArticleGroup/ArticleGroup';

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
