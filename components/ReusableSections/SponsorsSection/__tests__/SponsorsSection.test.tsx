import { render } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import partners from 'common/constants/partners';
import SponsorsSection from '../SponsorsSection';

describe('SponsorsSection', () => {
  it('should render', () => {
    const { queryByTestId } = render(<SponsorsSection />);
    expect(queryByTestId('Sponsors Section')).not.toBeNull();

    createSnapshotTest(<SponsorsSection />);
  });

  it('should render a secure link and image for each partner', () => {
    const component = render(<SponsorsSection />);

    partners.forEach(partner => {
      const image = component.queryByAltText(`${partner.name} logo`)!;
      const link = image.closest('a') as HTMLAnchorElement;
      expect(image).toBeInTheDocument();
      expect(link.href.startsWith('https://')).toStrictEqual(true);
    });
  });
});
