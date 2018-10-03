import React from 'react';
import PropTypes from 'prop-types';
import styles from './PressLinks.css';
import * as Articles from './Articles';
import ArticleGroup from './ArticleGroup/ArticleGroup';

PressLinks.propTypes = {
  numberOfInitiallyVisibleLinks: PropTypes.number,
};

PressLinks.defaultProps = {
  numberOfInitiallyVisibleLinks: 5,
};

function PressLinks({ numberOfInitiallyVisibleLinks }) {
  return (
    <div className={styles.logos}>
      <div className={styles.flexContainer}>
        {Object.keys(Articles).map(group => (
          <ArticleGroup
            key={`ArticleGroup_${group}`}
            title={group}
            links={Articles[group]}
            numberOfInitiallyVisibleLinks={numberOfInitiallyVisibleLinks}
          />
        ))}
      </div>
    </div>
  );
}

export default PressLinks;
