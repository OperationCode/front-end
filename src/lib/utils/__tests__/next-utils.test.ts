import { getPlaceholder, getShimmerSVG } from '../next-utils';

describe('Next.js Utilities', () => {
  describe('getPlaceholder', () => {
    it('defines a valid base64 string', () => {
      expect(getPlaceholder(200, 200)).toMatchSnapshot();
    });
  });

  describe('getShimmerSVG', () => {
    it('renders a valid SVG', () => {
      expect(getShimmerSVG(200, 200)).toMatchSnapshot();
    });
  });
});
