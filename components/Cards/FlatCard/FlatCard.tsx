import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
import Image from 'next/legacy/image';
import { FLAT_CARD_IMAGE } from '@/common/constants/testIDs';
import { getPlaceholder } from '@/common/utils/next-utils';
import { ReactNode } from 'react';

interface FlatCardProps {
  button?: ReactNode;
  children: ReactNode;
  className?: string;
  header?: ReactNode;
  image?: {
    source: string;
    alt: string;
  };
}

export function FlatCard({ button: Button, children, className, header, image }: FlatCardProps) {
  const hasImage = image && image.source;

  return (
    <article
      className={classNames('box-border my-6 mx-4 relative max-w-[400px]', className, {
        'pt-20 sm:pt-14': hasImage,
      })}
    >
      <div
        className={twMerge(
          'p-8 flex flex-col gap-5 border-4 border-solid border-themePrimary',
          hasImage && `pt-32`,
        )}
      >
        {header && <div className="text-center">{header}</div>}

        {hasImage && (
          <div className="flex justify-center -my-5">
            <div
              data-testid={FLAT_CARD_IMAGE}
              className="absolute -top-4 border-solid border-themePrimary border-[3px] w-[194px] h-[194px]"
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

        {header && <hr className="w-full border-2 border-solid border-themePrimary" />}

        <div>{children}</div>

        {Button && (
          <div className="text-center absolute left-0 right-0 -bottom-7 [&>button]:hover:bg-white [&>button]:hover:text-themeSecondary [&>button]:focus-visible:text-themePrimary [&>button]:focus-visible:bg-white [&>a]:hover:bg-white [&>a]:hover:text-themeSecondary [&>a]:focus-visible:bg-white [&>a]:focus-visible:text-themeSecondary ">
            {Button}
          </div>
        )}
      </div>
    </article>
  );
}
