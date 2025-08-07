import { cx } from 'common/utils/cva';
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
}

function HeroBanner({ backgroundImageSource, children, className, title }: HeroBannerPropsType) {
  return (
    <Container
      backgroundImageSource={backgroundImageSource}
      className={cx(className, 'pt-20 text-shadow-[0_0_15px_#111111] min-h-dvh')}
    >
      <h1
        className={cx({ 'border-b-4 border-b-primary text-center mb-4': children })}
        data-testid={HERO_BANNER_H1}
      >
        {title}
      </h1>
      {children}
    </Container>
  );
}

export default HeroBanner;
