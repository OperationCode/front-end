import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FlatCard.css';

FlatCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  header: PropTypes.node,
  imageAlt: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
};

FlatCard.defaultProps = {
  className: undefined,
  header: undefined,
};

function FlatCard({ children, className, header, imageSource, imageAlt }) {
  return (
    <article className={classNames(styles.FlatCard, className)}>
      <div className={styles.borderContainer}>
        {header && <div className={styles.header}>{header}</div>}
        <div className={styles.rowCenter}>
          <img className={styles.image} src={imageSource} alt={imageAlt} />
        </div>
        {header && <hr className={styles.divider} />}
        <div className={styles.children}>{children}</div>
      </div>
    </article>
  );
}

export default FlatCard;
