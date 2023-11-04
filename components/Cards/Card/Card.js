import { bool, node, string } from 'prop-types';
import classNames from 'classnames';
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
      className={classNames(
        'items-center bg-white text-secondary flex flex-col flex-nowrap justify-around m-4 min-h-[100px] min-w-[100px] p-6 shadow-md focus-visible:outline-none',
        className,
        {
          'shadow-sm transition-shadow duration-200 ease-linear hover:shadow-lg focus-visible:shadow-lg':
            hasAnimationOnHover,
        },
      )}
      {...customDataAttributes}
    >
      {children}
    </article>
  );
}

export default Card;
