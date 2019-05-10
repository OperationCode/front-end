import classNames from 'classnames';
import { getDataAttributes } from 'common/utils/prop-utils';
import { bool, node, string } from 'prop-types';
import React from 'react';
import styles from './Card.css';

Card.propTypes = {
  children: node.isRequired,
  className: string,
  hasAnimationOnHover: bool,
};

Card.defaultProps = {
  className: undefined,
  hasAnimationOnHover: false,
};

function Card({ children, className, hasAnimationOnHover, ...props }) {
  const customDataAttributes = getDataAttributes(props);

  return (
    <article
      className={classNames(styles.Card, className, { [styles.animatedCard]: hasAnimationOnHover })}
      {...customDataAttributes}
    >
      {children}
    </article>
  );
}

export default Card;
