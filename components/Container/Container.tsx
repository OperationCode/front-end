import classNames from 'classnames';
import { getDataAttributes } from 'common/utils/prop-utils';
import styles from './Container.module.css';

export interface ContainerPropsType {
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
   * Sets the height of the container to be full viewport height.
   * @default false
   */
  isFullViewportHeight?: boolean;
  /**
   * Applies the color theme.
   * @default secondary
   */
  theme?: 'gray' | 'secondary' | 'white';
}

function Container(props: ContainerPropsType) {
  const {
    backgroundImageSource,
    children,
    className,
    id,
    isFullViewportHeight = false,
    theme = 'secondary',
  } = props;
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
      className={classNames(className, styles.Container, styles[theme], {
        [styles.fullViewportHeight]: isFullViewportHeight,
      })}
      id={id}
      style={dynamicBackgroundImage}
      {...customDataAttributes}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Container;
