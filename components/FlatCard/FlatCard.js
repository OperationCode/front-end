import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FlatCard.css';

FlatCard.propTypes = {
  className: PropTypes.string,
  imageSource: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  header: PropTypes.node,
  content: PropTypes.node.isRequired,
};

FlatCard.defaultProps = {
  className: undefined,
  header: undefined,
};

function FlatCard({ className, imageSource, imageAlt, header, content }) {
  return (
    <article className={classNames(styles.FlatCard, className)}>
      <div className={styles.borderContainer}>
        {header && <div className={styles.header}>{header}</div>}
        <div className={styles.rowCenter}>
          <img className={styles.image} src={imageSource} alt={imageAlt} />
        </div>
        {header && <hr className={styles.divider} />}
        <div className={styles.content}>{content}</div>
      </div>
    </article>
  );
}

export default FlatCard;
