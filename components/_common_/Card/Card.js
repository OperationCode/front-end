import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Card.css';

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hasAnimationOnHover: PropTypes.bool,
};

Card.defaultProps = {
  className: undefined,
  hasAnimationOnHover: false,
};

function Card({ children, className, hasAnimationOnHover }) {
  return (
    <article
      className={classNames(styles.Card, className, { [styles.animatedCard]: hasAnimationOnHover })}
    >
      {children}
    </article>
  );
}

export default Card;
