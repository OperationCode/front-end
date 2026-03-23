import type { ReactElement, ReactNode } from 'react';
import Image from 'next/image';
import { cx } from '@/common/utils/cva';
import { FLAT_CARD_IMAGE } from '@/common/constants/testIDs';
import { getPlaceholder } from '@/common/utils/next-utils';

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
  const hasImage = !!image?.source;

  return (
    <article
      className={cx('relative mx-4 my-6 box-border max-w-[400px]', className, {
        'pt-20 sm:pt-14': hasImage,
      })}
    >
      <div
        className={cx(
          'flex flex-col gap-5 border-4 border-solid border-primary p-8',
          hasImage && `pt-32`,
        )}
      >
        {header && <div className="text-center">{header}</div>}

        {hasImage && (
          <div className="-my-5 flex justify-center">
            <div
              data-testid={FLAT_CARD_IMAGE}
              className="absolute -top-4 h-[194px] w-[194px] border-[3px] border-solid border-primary"
            >
              <Image
                src={image.source}
                alt={image.alt ?? ''}
                fill
                style={{ objectFit: 'cover' }}
                placeholder="blur"
                blurDataURL={getPlaceholder(194, 194)}
              />
            </div>
          </div>
        )}

        {header && <hr className="w-full border-2 border-solid border-primary" />}

        <div>{children}</div>

        {Button && (
          <div className="absolute inset-x-0 -bottom-7 text-center [&>a]:hover:bg-white [&>a]:hover:text-secondary [&>a]:focus-visible:bg-white [&>a]:focus-visible:text-secondary [&>button]:hover:bg-white [&>button]:hover:text-secondary [&>button]:focus-visible:bg-white [&>button]:focus-visible:text-primary">
            {Button}
          </div>
        )}
      </div>
    </article>
  );
}

export default FlatCard;
