import { bool, node, string } from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { getDataAttributes } from 'common/utils/prop-utils';

Card.propTypes = {
  children: node.isRequired,
  className: string,
  hasAnimationOnHover: bool,
};

Card.defaultProps = {
  className: undefined,
  hasAnimationOnHover: false,
};

function Card({ children, className, hasAnimationOnHover, ...props }) {
  const customDataAttributes = getDataAttributes(props);

  return (
    <article
      className={twMerge(
        'items-center bg-white [&_svg]:fill-themeSecondary text-themeSecondary flex flex-col flex-nowrap justify-around m-4 min-h-[100px] min-w-[100px] p-6 shadow-md focus-visible:outline-none',
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
