import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import styles from './Card.css';

Card.propTypes = {
  cardHeaderClassName: PropTypes.string,
  cardContentClassName: PropTypes.string,
  cardFooterClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  headerContent: PropTypes.node,
  footerContent: PropTypes.node,
};

Card.defaultProps = {
  cardHeaderClassName: '',
  cardContentClassName: '',
  cardFooterClassName: '',
  className: '',
  headerContent: '',
  footerContent: '',
};

function Card({
  cardHeaderClassName,
  cardContentClassName,
  cardFooterClassName,
  children,
  className,
  headerContent,
  footerContent,
}) {
  const header = headerContent ? (
    <CardHeader className={classNames(styles.header, cardHeaderClassName)}>
      {headerContent}
    </CardHeader>
  ) : null;

  const content = (
    <section className={classNames(styles.content, cardContentClassName)}>{children}</section>
  );

  const footer = footerContent ? (
    <CardFooter className={classNames(styles.footer, cardFooterClassName)}>
      {footerContent}
    </CardFooter>
  ) : null;

  if (header && footer) {
    return (
      <article className={classNames(styles.Card, className)}>
        {header}
        {content}
        {footer}
      </article>
    );
  }

  return (
    <div className={classNames(styles.Card, className)}>
      {header}
      {content}
      {footer}
    </div>
  );
}

export default Card;
