import { render } from '@testing-library/react';
import { SponsorsSection } from '../SponsorsSection';
import createSnapshotTest from '@/test-utils/createSnapshotTest';
import { sortedPartners } from '@/common/constants/partners';

describe('SponsorsSection', () => {
  it('should render', () => {
    const { queryByTestId } = render(<SponsorsSection />);
    expect(queryByTestId('Sponsors Section')).not.toBeNull();

    createSnapshotTest(<SponsorsSection />);
  });

  it('should render a secure link and image for each partner', () => {
    const component = render(<SponsorsSection />);

    sortedPartners.forEach(partner => {
      const image = component.queryByAltText(`${partner.name} logo`)!;
      const link = image.parentNode as HTMLAnchorElement;

      expect(image).toBeInTheDocument();
      expect(link.href.startsWith('https://')).toStrictEqual(true);
    });
  });
});
