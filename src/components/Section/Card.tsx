import Image from 'next/image';
import { cx } from '@/common/utils/cva';
import BaseCard from '@/components/Cards/Card/Card';

interface CardProps {
  children: React.ReactNode;
  image?: string;
  alt?: string;
  className?: string;
}

function Card({ children, image, alt = '', className }: CardProps) {
  if (image) {
    return (
      <BaseCard
        className={cx(
          'size-auto max-w-xs flex-col p-0 *:flex-[1_1_50%] md:h-56 md:w-[650px] md:max-w-none md:flex-row',
          className,
        )}
      >
        <div className="relative size-full min-h-[225px]">
          <Image src={image} alt={alt} fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="m-4 flex flex-col items-center justify-start overflow-y-auto">
          {children}
        </div>
      </BaseCard>
    );
  }

  return (
    <BaseCard
      className={cx('h-[400px] max-w-[400px] justify-start! overflow-y-auto p-8', className)}
      hasAnimationOnHover={false}
    >
      {children}
    </BaseCard>
  );
}

export default Card;
