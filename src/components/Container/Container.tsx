import { cva } from '@/lib/utils';
import { getDataAttributes } from '@/lib/utils/prop-utils';
import type { VariantProps } from '@/lib/utils';

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
  base: 'bg-center bg-no-repeat bg-cover flex items-center justify-between w-full px-4 md:px-0 fill-current min-h-62.5',
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
      <div className="mx-auto my-14 flex w-full max-w-350 flex-col items-center justify-center sm:w-[85%]">
        {children}
      </div>
    </div>
  );
}

export default Container;
