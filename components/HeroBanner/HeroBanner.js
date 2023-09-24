import { string, node, bool } from 'prop-types';
import classNames from 'classnames';
import Container from 'components/Container/Container';
import { HERO_BANNER_H1 } from 'common/constants/testIDs';

HeroBanner.propTypes = {
  backgroundImageSource: string,
  className: string,
  children: node,
  isFullViewportHeight: bool,
  title: string.isRequired,
};

HeroBanner.defaultProps = {
  backgroundImageSource: '',
  className: undefined,
  children: undefined,
  isFullViewportHeight: false,
};

function HeroBanner({ backgroundImageSource, children, className, isFullViewportHeight, title }) {
  return (
    <Container
      backgroundImageSource={backgroundImageSource}
      className={classNames(className, 'pt-20 min-h-[60vh] text-shadow-[0_0_15px_#111111]', {
        'min-h-[35vh]': !children && !backgroundImageSource,
      })}
      isFullViewportHeight={isFullViewportHeight}
    >
      <h1
        className={classNames({ 'border-b-4 border-b-primary text-center mb-4': children })}
        data-testid={HERO_BANNER_H1}
      >
        {title}
      </h1>
      {children}
    </Container>
  );
}

export default HeroBanner;
