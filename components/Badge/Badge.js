import { bool, element, oneOfType, string } from 'prop-types';
import classNames from 'classnames';

Badge.propTypes = {
  className: string,
  icon: element.isRequired, // TODO: Create custom proptype accepting only `<svg>` or `<img>`
  label: oneOfType([string, element]).isRequired,
  isImageFirst: bool,
};

Badge.defaultProps = {
  className: undefined,
  isImageFirst: true,
};

function Badge({ className, icon, isImageFirst, label }) {
  return (
    <figure
      className={classNames(
        'flex flex-col justify-items-center place-content-start m-2 [&>img>svg]:fill-current [&>img>svg]:my-4 [&>img>svg]:mx-0 [&>img>svg]:h-24',
        className,
      )}
    >
      {isImageFirst ? (
        <>
          {icon}
          <figcaption className="text-center whitespace-nowrap">{label}</figcaption>
        </>
      ) : (
        <>
          <figcaption className="text-center whitespace-nowrap">{label}</figcaption>
          {icon}
        </>
      )}
    </figure>
  );
}

export default Badge;
