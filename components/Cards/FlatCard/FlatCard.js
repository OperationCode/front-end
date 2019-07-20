import React from 'react';
import { element, node, shape, string } from 'prop-types';
import classNames from 'classnames';
import { Image } from '@innocuous/components';
import styles from './FlatCard.css';

class FlatCard extends React.Component {
  static propTypes = {
    button: element,
    children: node.isRequired,
    className: string,
    header: node,
    image: shape({
      source: string.isRequired,
      alt: string.isRequired,
    }),
  };

  static defaultProps = {
    button: null,
    className: undefined,
    header: undefined,
    image: undefined,
  };

  render() {
    const { button: Button, children, className, header, image } = this.props;

    const hasImage = image && image.alt && image.source;

    return (
      <article
        className={classNames(styles.FlatCard, className, {
          [styles.cardWithImage]: hasImage,
        })}
      >
        <div className={styles.borderContainer}>
          {header && <div className={styles.header}>{header}</div>}
          {hasImage && (
            <div className={styles.rowCenter}>
              <Image className={styles.image} src={image.source} alt={image.alt} />
            </div>
          )}
          {header && <hr className={styles.divider} />}
          <div className={styles.children}>{children}</div>
          {Button && <div className={styles.flatCardButton}>{Button}</div>}
        </div>
      </article>
    );
  }
}

export default FlatCard;
