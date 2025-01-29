import classNames from 'classnames';
import Container from 'components/Container/Container';
import { HERO_BANNER_H1 } from 'common/constants/testIDs';

export interface HeroBannerPropsType {
  /**
   * Renders a title for the banner.
   */
  title: string;
  /**
   * Sets the path for an optional background image.
   */
  backgroundImageSource?: string;
  /**
   * Applies classnames to the base `figure` element for styling.
   */
  className?: string;
  /**
   * Content to be rendered in the Container.
   */
  children?: React.ReactNode;
  /**
   * Sets the height of the container to be full viewport height.
   * @default false
   */
  isFullViewportHeight?: boolean;
}

function HeroBanner({
  backgroundImageSource,
  children,
  className,
  isFullViewportHeight = false,
  title,
}: HeroBannerPropsType) {
  const shouldBeMini = !children && !backgroundImageSource;

  return (
    <Container
      backgroundImageSource={backgroundImageSource}
      className={classNames(className, 'pt-20 text-shadow-[0_0_15px_#111111]', {
        'min-h-[35vh]': shouldBeMini,
        'min-h-[60vh]': !shouldBeMini,
      })}
      isFullViewportHeight={isFullViewportHeight}
    >
      <h1
        className={classNames({ 'border-b-4 border-b-themePrimary text-center mb-4': children })}
        data-testid={HERO_BANNER_H1}
      >
        {title}
      </h1>
      {children}
    </Container>
  );
}

export default HeroBanner;
