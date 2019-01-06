import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './HeroBanner.css';

<<<<<<< HEAD


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

=======
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
HeroBanner.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  imageSource: PropTypes.node.isRequired,
<<<<<<< HEAD
  title: PropTypes.node.isRequired,
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
=======
  isFullViewHeight: PropTypes.bool,
  title: PropTypes.node.isRequired,
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
};

HeroBanner.defaultProps = {
  children: undefined,
<<<<<<< HEAD
  className: '',
};

=======
  className: undefined,
  isFullViewHeight: false,
};

function HeroBanner({ children, className, imageSource, isFullViewHeight, title }) {
  // See https://css-tricks.com/tinted-images-multiple-backgrounds/ for explanation
  const darkOverlay = 'linear-gradient(rgba(33, 48, 69, 0.65),rgba(33, 48, 69, 0.65))';
  const dynamicBackgroundImage = {
    backgroundImage: `${darkOverlay}, url(${imageSource})`,
  };

  return (
    <div
      style={dynamicBackgroundImage}
      className={classNames(className, styles.HeroBanner, {
        [styles.fullViewHeight]: isFullViewHeight,
      })}
    >
      <div className={styles.content}>
        <h1 className={classNames({ [styles.underline]: children })}>{title}</h1>
        {children}
      </div>
    </div>
  );
}

>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
export default HeroBanner;
