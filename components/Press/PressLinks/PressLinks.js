import React from 'react';
import PropTypes from 'prop-types';
import styles from './PressLinks.css';
import * as Links from './Links';
import LinkGroup from './LinkGroup';

PressLinks.propTypes = {
  MaxLinks: PropTypes.number,
};

PressLinks.defaultProps = {
  MaxLinks: 5,
};

function PressLinks({ MaxLinks }) {
  return (
    <div className={styles.logos}>
      <div className={styles.flexContainer}>
        {Object.keys(Links).map(group => (
          <LinkGroup
            key={`LinkGroup_${group}`}
            title={group}
            links={Links[group]}
            MaxLinks={MaxLinks}
          />
        ))}
      </div>
    </div>
  );
}

export default PressLinks;
