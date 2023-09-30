import { bool, node, number, oneOf, oneOfType, string } from 'prop-types';
import classNames from 'classnames';
import { getDataAttributes } from 'common/utils/prop-utils';
import styles from './Container.module.css';

Container.propTypes = {
  backgroundImageSource: string,
  children: node,
  className: string,
  id: oneOfType([string, number]),
  isFullViewportHeight: bool,
  theme: oneOf(['gray', 'secondary', 'white']),
};

Container.defaultProps = {
  backgroundImageSource: undefined,
  children: undefined,
  className: undefined,
  id: undefined,
  isFullViewportHeight: false,
  theme: 'secondary',
};

function Container({
  backgroundImageSource,
  children,
  className,
  id,
  isFullViewportHeight,
  theme,
  ...props
}) {
  // See https://css-tricks.com/tinted-images-multiple-backgrounds/ for explanation
  const darkOverlay = 'linear-gradient(rgba(33, 48, 69, 0.65),rgba(33, 48, 69, 0.65))';
  const dynamicBackgroundImage = backgroundImageSource
    ? {
        backgroundImage: `${darkOverlay}, url(${backgroundImageSource})`,
      }
    : undefined;

  const customDataAttributes = getDataAttributes(props);

  return (
    <div
      className={classNames(
        className,
        'bg-center bg-no-repeat bg-cover flex items-center justify-center min-h-[250px] w-full fill-current',
        styles[theme],
        {
          'min-h-screen': isFullViewportHeight,
        },
      )}
      id={id}
      style={dynamicBackgroundImage}
      {...customDataAttributes}
    >
      <div className="flex flex-col items-center justify-center my-14 mx-auto w-full max-w-[1400px] sm:w-[85%]">
        {children}
      </div>
    </div>
  );
}

export default Container;
