import type { ReactElement, ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { FLAT_CARD_IMAGE } from '@/lib/constants/testIDs';
import { getPlaceholder } from '@/lib/utils/next-utils';

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
      className={cn('relative mx-4 my-6 box-border max-w-100 rounded-xl shadow-sm', className, {
        'pt-20 sm:pt-14': hasImage,
      })}
    >
      <div
        className={cn(
          'flex flex-col gap-5 rounded-xl border-2 border-solid border-primary p-8',
          hasImage && 'pt-32',
        )}
      >
        {header && <div className="text-center">{header}</div>}

        {hasImage && (
          <div className="-my-5 flex justify-center">
            <div
              data-testid={FLAT_CARD_IMAGE}
              className="absolute -top-4 size-48.5 border-[3px] border-solid border-primary"
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
          <div className="absolute inset-x-0 -bottom-5 text-center *:outline-2 *:outline-offset-1 *:outline-transparent [&>a]:hover:bg-primary/75 [&>a]:focus-visible:outline-primary [&>button]:hover:bg-primary/75 [&>button]:focus-visible:outline-primary">
            {Button}
          </div>
        )}
      </div>
    </article>
  );
}

export default FlatCard;
