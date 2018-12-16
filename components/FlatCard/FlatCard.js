import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FlatCard.css';

FlatCard.propTypes = {
  className: PropTypes.string,
  imageSource: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  renderHeader: PropTypes.node,
  renderContent: PropTypes.node.isRequired,
};

FlatCard.defaultProps = {
  className: undefined,
};

function FlatCard({ className, imageSource, imageAlt, renderHeader, renderContent }) {
  return (
    <>
      <article className={classNames(styles.FlatCard, className)}>
        <div className={styles.borderContainer}>
          <div className={styles.header}>{renderHeader}</div>
          <div className={styles.rowCenter}>
            <img className={styles.image} src={imageSource} alt={imageAlt} />
          </div>
          {renderHeader && <hr className={styles.divider} />}
          <div className={styles.content}>{renderContent}</div>
        </div>
      </article>
    </>
  );
}

export default FlatCard;
