import { cx } from 'common/utils/cva';
import { getDataAttributes } from 'common/utils/prop-utils';

export interface CardPropsType {
  children: React.ReactNode;
  className?: string;
  hasAnimationOnHover?: boolean;
}

function Card({ children, className, hasAnimationOnHover, ...props }: CardPropsType) {
  const customDataAttributes = getDataAttributes(props);

  return (
    <article
      className={cx(
        'items-center bg-white [&_svg]:fill-secondary text-secondary flex flex-col flex-nowrap justify-around m-4 min-h-[100px] min-w-[100px] p-6 shadow-md focus-visible:outline-none',
        hasAnimationOnHover &&
          'shadow-sm transition-shadow duration-200 ease-linear hover:shadow-lg focus-visible:shadow-lg',
        className,
      )}
      {...customDataAttributes}
    >
      {children}
    </article>
  );
}

export default Card;
