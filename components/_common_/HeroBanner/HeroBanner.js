import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './HeroBanner.css';



const HeroBanner = ({ children, className, imageSource, title, quote, author }) => {
  const dynamicBackgroundImage = { backgroundImage: `url(${imageSource})` };
 return (
    <div style={dynamicBackgroundImage} className={classNames(className, styles.HeroBanner)}>
      <div className={styles.content}>
        <h1 className={classNames({ [styles.underline]: children })}>{title}</h1>
        {children}
      </div>
      <div>
      <hr className={styles.quoteLines}/>
    <h2 className={styles.quoteText}>
      &quot;{quote}&quot;
      <br />
      <span className={styles.author}>- {author}</span>
    </h2>
    <hr className={styles.quoteLines} />
  </div>
    </div>
  );
}

HeroBanner.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  imageSource: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

HeroBanner.defaultProps = {
  children: undefined,
  className: '',
};

export default HeroBanner;
