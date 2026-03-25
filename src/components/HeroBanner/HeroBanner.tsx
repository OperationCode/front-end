import { cn } from '@/lib/utils';
import Container from '@/components/Container/Container';
import { HERO_BANNER_H1 } from '@/lib/constants/testIDs';

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
      className={cn('min-h-dvh pt-20 [&_p]:text-shadow-md', className)}
    >
      <h1
        className={cn('text-shadow-md', {
          'mb-4 border-b-4 border-b-primary text-center': children,
        })}
        data-testid={HERO_BANNER_H1}
      >
        {title}
      </h1>
      {children}
    </Container>
  );
}

export default HeroBanner;
