import { render } from '@testing-library/react';
import partners from 'common/constants/partners';

import SponsorsSection from '../SponsorsSection';

describe('SponsorsSection', () => {
  it('should render a secure link and image for each partner', () => {
    const component = render(<SponsorsSection>Test</SponsorsSection>);

    partners.forEach(partner => {
      const image = component.queryByAltText(`${partner.name} logo`);
      const link = image.parentNode;

      expect(image).toBeInTheDocument();
      expect(link.href.startsWith('https://')).toStrictEqual(true);
    });
  });
});
