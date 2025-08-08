import { cva } from 'common/utils/cva';
import { getDataAttributes } from 'common/utils/prop-utils';
import type { VariantProps } from 'common/utils/cva';

export interface ContainerPropsType extends VariantProps<typeof containerCva> {
  /**
   * Sets the path for an optional background image.
   */
  backgroundImageSource?: string;
  /**
   * Content to be rendered in the Container.
   */
  children?: React.ReactNode;
  /**
   * Applies style classes to the wrapping div.
   */
  className?: string;
  /**
   * Applies an id to the container.
   */
  id?: string;
  /**
   * Applies the color theme.
   * @default secondary
   */
  theme?: 'gray' | 'secondary' | 'white';
}

const containerCva = cva({
  base: 'bg-center bg-no-repeat bg-cover flex items-center justify-between w-full fill-current min-h-[250px]',
  variants: {
    theme: {
      gray: 'bg-theme-gray-800 text-secondary',
      secondary: 'bg-secondary text-white',
      white: 'bg-white text-secondary',
    },
  },
  defaultVariants: {
    theme: 'secondary',
  },
});

function Container({
  backgroundImageSource,
  children,
  className,
  id,
  theme,
  ...props
}: ContainerPropsType) {
  // See https://css-tricks.com/tinted-images-multiple-backgrounds/ for explanation
  const darkOverlay = 'linear-gradient(hsl(215, 30%, 10%, 0.7),hsl(215, 30%, 10%, 0.7))';
  const dynamicBackgroundImage = backgroundImageSource
    ? {
        backgroundImage: `${darkOverlay}, url(${backgroundImageSource})`,
      }
    : undefined;

  const customDataAttributes = getDataAttributes(props);

  return (
    <div
      className={containerCva({ theme, className })}
      id={id}
      style={dynamicBackgroundImage}
      {...customDataAttributes}
    >
      <div className="flex flex-col items-center justify-center mx-auto w-full my-[3.5rem] max-w-[1400px] sm:w-[85%]">
        {children}
      </div>
    </div>
  );
}

export default Container;
