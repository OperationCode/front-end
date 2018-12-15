import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './FlatCard.css';

FlatCard.propTypes = {
  className: PropTypes.string,
  imageSource: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  subHeaderText: PropTypes.string,
  bodyText: PropTypes.string,
};

FlatCard.defaultProps = {
  className: undefined,
};

function FlatCard({ className, imageSource, imageAlt, headerText, subHeaderText, bodyText }) {
  return (
    <>
      <article className={classNames(styles.FlatCard, className)}>
        <div className={styles.borderContainer}>
          <h1 className={styles.header}>{headerText}</h1>
          {subHeaderText ? <h6 className={styles.subHeader}>{subHeaderText}</h6> : <></>}
          <div className={styles.rowCenter}>
            <img className={styles.image} src={imageSource} alt={imageAlt} />
          </div>
          <hr className={styles.divider} />
          <p className={styles.body}>{bodyText}</p>
        </div>
      </article>
    </>
  );
}

export default FlatCard;
