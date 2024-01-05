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
      className={classNames('box-border my-6 mx-4 relative max-w-[400px]', className, {
        'pt-14': hasImage,
      })}
    >
      <div className="p-8 border-4 border-solid border-themePrimary">
        {header && <div className="order-2 text-center">{header}</div>}

        {hasImage && (
          <div className="flex justify-center">
            <div
              data-testid={FLAT_CARD_IMAGE}
              className="border-solid border-themePrimary order-1 absolute -top-1 h-52 [&>img]:object-cover"
            >
              <Image
                src={image.source}
                alt={image.alt ?? ''}
                width={194}
                height={194}
                placeholder="blur"
                blurDataURL={getPlaceholder(194, 194)}
              />
            </div>
          </div>
        )}

        {header && <hr className="w-10/12 border-1 border-solid border-themePrimary" />}

        <div className={styles.children}>{children}</div>

        {Button && (
          <div className="text-center absolute left-0 right-0 -bottom-7 [&>button]:hover:bg-white [&>button]:hover:text-themeSecondary [&>button]:focus-visible:text-themePrimary [&>button]:focus-visible:bg-white [&>a]:hover:bg-white [&>a]:hover:text-themeSecondary [&>a]:focus-visible:bg-white [&>a]:focus-visible:text-themeSecondary ">
            {Button}
          </div>
        )}
      </div>
    </article>
  );
}

export default FlatCard;
