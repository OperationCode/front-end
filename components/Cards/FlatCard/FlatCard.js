import React from 'react';
import { element, node, string } from 'prop-types';
import classNames from 'classnames';
import styles from './FlatCard.css';

FlatCard.propTypes = {
  button: element,
  children: node.isRequired,
  className: string,
  header: node,
  imageAlt: string,
  imageSource: string,
};

FlatCard.defaultProps = {
  button: null,
  className: undefined,
  header: undefined,
  imageAlt: undefined,
  imageSource: undefined,
};

function FlatCard({ button: Button, children, className, header, imageSource, imageAlt }) {
  const cardClassNames = [styles.FlatCard];

  if (imageSource) {
    cardClassNames.push(styles.cardWithImage);
  }

  return (
    <article className={classNames(...cardClassNames, className)}>
      <div className={styles.borderContainer}>
        {header && <div className={styles.header}>{header}</div>}
        {imageSource && (
          <div className={styles.rowCenter}>
            <img className={styles.image} src={imageSource} alt={imageAlt} />
          </div>
        )}
        {header && <hr className={styles.divider} />}
        <div className={styles.children}>{children}</div>
        {Button && <div className={styles.flatCardButton}>{Button}</div>}
      </div>
    </article>
  );
}

export default FlatCard;
