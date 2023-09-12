import { element, node, shape, string } from 'prop-types';
import classNames from 'classnames';
import Image from 'next/image';
import { FLAT_CARD_IMAGE } from 'common/constants/testIDs';
import { getPlaceholder } from 'common/utils/next-utils';
import styles from './FlatCard.module.css';

FlatCard.propTypes = {
  button: element,
  children: node.isRequired,
  className: string,
  header: node,
  image: shape({
    source: string.isRequired,
    alt: string.isRequired,
  }),
};

FlatCard.defaultProps = {
  button: null,
  className: undefined,
  header: undefined,
  image: undefined,
};

function FlatCard({ button: Button, children, className, header, image }) {
  const hasImage = image && image.source;

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
            <div data-testid={FLAT_CARD_IMAGE} className={styles.imageWrapper}>
              <Image
                src={image.source}
                alt={image.alt ?? ''}
                width={200}
                height={200}
                placeholder="blur"
                blurDataURL={getPlaceholder(200, 200)}
              />
            </div>
          </div>
        )}
        {header && <hr className={styles.divider} />}
        <div className={styles.children}>{children}</div>
        {Button && <div className={styles.flatCardButton}>{Button}</div>}
      </div>
    </article>
  );
}

export default FlatCard;
