import type { ReactElement, ReactNode } from 'react';
import { cx } from 'common/utils/cva';
import Image from 'next/image';
import { FLAT_CARD_IMAGE } from 'common/constants/testIDs';
import { getPlaceholder } from 'common/utils/next-utils';

interface FlatCardProps {
  button?: ReactElement | null;
  children: ReactNode;
  className?: string;
  header?: ReactNode;
  image?: {
    source: string;
    alt: string;
  };
}

function FlatCard({ button: Button, children, className, header, image }: FlatCardProps) {
  const hasImage = image && image.source;

  return (
    <article
      className={cx('box-border my-6 mx-4 relative max-w-[400px]', className, {
        'pt-20 sm:pt-14': hasImage,
      })}
    >
      <div
        className={cx(
          'p-8 flex flex-col gap-5 border-4 border-solid border-primary',
          hasImage && `pt-32`,
        )}
      >
        {header && <div className="text-center">{header}</div>}

        {hasImage && (
          <div className="flex justify-center -my-5">
            <div
              data-testid={FLAT_CARD_IMAGE}
              className="absolute -top-4 border-solid border-primary border-[3px] w-[194px] h-[194px]"
            >
              <Image
                src={image.source}
                alt={image.alt ?? ''}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={getPlaceholder(194, 194)}
              />
            </div>
          </div>
        )}

        {header && <hr className="w-full border-2 border-solid border-primary" />}

        <div>{children}</div>

        {Button && (
          <div className="text-center absolute left-0 right-0 -bottom-7 [&>button]:hover:bg-white [&>button]:hover:text-secondary [&>button]:focus-visible:text-primary [&>button]:focus-visible:bg-white [&>a]:hover:bg-white [&>a]:hover:text-secondary [&>a]:focus-visible:bg-white [&>a]:focus-visible:text-secondary ">
            {Button}
          </div>
        )}
      </div>
    </article>
  );
}

export default FlatCard;
