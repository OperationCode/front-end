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
        `m-4 flex min-h-[100px] min-w-[100px] flex-col flex-nowrap items-center justify-around bg-white p-6 text-secondary shadow-md focus-visible:outline-none [&_svg]:fill-secondary`,
        hasAnimationOnHover &&
          `shadow-sm transition-shadow duration-200 ease-linear hover:shadow-lg focus-visible:shadow-lg`,
        className,
      )}
      {...customDataAttributes}
    >
      {children}
    </article>
  );
}

export default Card;
