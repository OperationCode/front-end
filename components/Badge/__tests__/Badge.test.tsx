import { render } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import Icon from 'static/images/icons/github_logo.svg';

import { Badge } from '../Badge';

const badgeIcon = <Icon />;

describe('Badge', () => {
  it('should render with required props', () => {
    createSnapshotTest(<Badge icon={badgeIcon} label="Testing" />);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(<Badge icon={badgeIcon} label="Badge Icon" className="test-class" />);
  });

  it('should render the image after the label when `isImageFirst` is true', () => {
    const { container } = render(<Badge icon={badgeIcon} label="Badge Icon" isImageFirst />);
    // @ts-expect-error
    const { childNodes } = container.firstChild;

    const [firstItem, secondItem] = childNodes;

    expect(firstItem).toBe(container.querySelector('svg'));
    expect(secondItem).toBe(container.querySelector('figcaption'));
  });

  it('should render the image before the label when `isImageFirst` is false', () => {
    const { container } = render(
      <Badge icon={badgeIcon} label="Badge Icon" isImageFirst={false} />,
    );
    // @ts-expect-error
    const { childNodes } = container.firstChild;

    const [firstItem, secondItem] = childNodes;

    expect(firstItem).toBe(container.querySelector('figcaption'));
    expect(secondItem).toBe(container.querySelector('svg'));
  });
});
